import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize, map } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import { NgxImageCompressService } from 'ngx-image-compress';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public loadedImage: any;

  public fotoCargada: any;
  public foto: any;
  imgResultBeforeCompression: string;
  imgResultAfterCompression: string;

  constructor(
    private cloudFireStore: AngularFirestore,
    private storage: AngularFireStorage,
    private imageCompress: NgxImageCompressService
  ) {}

  compressFile() {
    this.imageCompress.uploadFile().then(({ image, orientation }) => {
      this.imgResultBeforeCompression = image;
      console.log('Size in bytes of the uploaded image was:', this.imageCompress.byteCount(image));

      this.imageCompress
        .compressFile(image, orientation, 50, 50) // 50% ratio, 50% quality
        .then((compressedImage) => {
          this.imgResultAfterCompression = compressedImage;
          console.log('Size in bytes after compression is now:', this.imageCompress.byteCount(compressedImage));
        });
    });
  }

  Insert(collectionName: string, data: any) {
    data.id = this.cloudFireStore.createId();
    return this.cloudFireStore.collection(collectionName).doc(data.id).set(data);
  }

  ReturnFirestore() {
    return this.cloudFireStore;
  }

  InsertCustomID(collectionName: string, idCustom: any, data: any) {
    return this.cloudFireStore.collection(collectionName).doc(idCustom).set(data);
  }

  GetAll(collectionName: string) {
    return this.cloudFireStore
      .collection(collectionName)
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data: any = a.payload.doc.data();
            data.id = a.payload.doc.id;
            return data;
          })
        )
      );
  }

  GetByParameter(collection: string, parametro: string, value: any) {
    return this.cloudFireStore
      .collection<any>(collection, (ref) => ref.where(parametro, '==', value))
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data: any = a.payload.doc.data();
            data.id = a.payload.doc.id;
            return data;
          })
        )
      );
  }

  Update(id: string, collectionName: string, data: any) {
    return this.cloudFireStore
      .collection(collectionName)
      .doc(id)
      .update({ ...data });
  }

  DeleteColecction(collectionName: string): any {
    return this.cloudFireStore
      .collection(collectionName)
      .get()
      .toPromise()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      });
  }

  Delete(collectionName: string, id: string) {
    return this.cloudFireStore.collection(collectionName).doc(id).delete();
  }

  InsertPropertyWithImage(collectionName: string, property: any) {
    property.id = this.cloudFireStore.createId();
    property.images = []
console.log(property.imagesRaw)
    if (property.imagesRaw) {
      property.imagesRaw.forEach((one) => {
        const filePath = `/properties/${property.id}/image.jpeg`;
        const ref = this.storage
          .ref(filePath)
          .putString(one, 'base64', { contentType: 'image/jpeg' })
          .then(() => {
            let storages = firebase.default.storage();
            let storageRef = storages.ref();
            let spaceRef = storageRef.child(filePath);

            spaceRef.getDownloadURL().then((url) => {
              this.fotoCargada = url;
              this.fotoCargada = `${this.fotoCargada}`;

              property.images.push(this.fotoCargada);

              return this.InsertCustomID(collectionName, property.id, property);
            });
          });
      });
    }
  }

  UpdateProduct(id: string, collectionName: string, product: any) {
    const filePath = `/products/${id}/image.jpeg`;
    const ref = this.storage
      .ref(filePath)
      .putString(product.image, 'base64', { contentType: 'image/jpeg' })
      .then(() => {
        let storages = firebase.default.storage();
        let storageRef = storages.ref();
        let spaceRef = storageRef.child(filePath);

        spaceRef.getDownloadURL().then((url) => {
          this.fotoCargada = url;
          this.fotoCargada = `${this.fotoCargada}`;

          product.images = this.fotoCargada;

          return this.cloudFireStore.collection(collectionName).doc(id).update({
            name: product.name,
            description: product.description,
            price: product.price,
            image: product.image
          });
        });
      });
  }
}
