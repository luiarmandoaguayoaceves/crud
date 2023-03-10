import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonInput,
} from '@ionic/react';
import { IonButton, IonIcon } from '@ionic/react';
import { star, create, trash } from 'ionicons/icons';

function Example() {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    const newItems = [];
    for (let i = 1; i < 51; i++) {
      newItems.push(`Item ${items.length + i}`);
    }
    setItems([...items, ...newItems]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [nombre, setNombre] = useState([])

  useEffect(() => {
    const getNames = () =>{
      fetch('localhost:3306')
    }
  }, [])
  

  return (
    <IonContent>
      <IonList>
      <IonItem>
        <IonLabel>Nombre</IonLabel>
        <IonInput clearInput={true} placeholder="Enter text"></IonInput>
      </IonItem>
        {items.map((item, index) => (
          <IonItem key={item}>
            <IonAvatar slot="start">
              
              <img src={'https://picsum.photos/80/80?random=' + index} alt="avatar" />
            </IonAvatar>
            <IonLabel>{item}
            <IonIcon slot="start" icon={create}></IonIcon>
            <IonIcon slot="start" icon={trash}></IonIcon>
            </IonLabel>
          </IonItem>
        ))}
      </IonList>
      <IonInfiniteScroll>
        <IonInfiniteScrollContent loadingText="Please wait..." loadingSpinner="bubbles"></IonInfiniteScrollContent>
      </IonInfiniteScroll>
    </IonContent>
  );
}
export default Example;