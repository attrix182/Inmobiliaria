import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { map } from 'rxjs/operators';
import { trace } from '@angular/fire/compat/performance';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public loadedImage: any;

  public fotoCargada: any;
  public foto: any;
  imgResultBeforeCompress: string;
  imgResultAfterCompress: string;

  constructor(private cloudFireStore: AngularFirestore, private storage: AngularFireStorage) {}

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
    return this.cloudFireStore.collection(collectionName).valueChanges()
  }
  GetByParameter(collection: string, parametro: string, value: any) {
    return this.cloudFireStore.collection<any>(collection, (ref) => ref.where(parametro, '==', value))
    .valueChanges()


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

    if (property.image) {
      const filePath = `/properties/${property.id}/image.jpeg`;
      const ref = this.storage
        .ref(filePath)
        .putString(property.image, 'base64', { contentType: 'image/jpeg' })
        .then(() => {

          let storageRef = this.storage.ref(property.id);
          let spaceRef = storageRef.child(filePath);

          let url$ = spaceRef.getDownloadURL().pipe(
            trace('storage')
          )
            this.fotoCargada = url$ ;
            this.fotoCargada = `${this.fotoCargada}`;

            property.images = this.fotoCargada;

            return this.InsertCustomID(collectionName, property.id, property);
          });

    }
  }

  UpdateProduct(id: string, collectionName: string, product: any) {

  }
}
