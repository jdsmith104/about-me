import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonFooter,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { ReactElement } from "react";
import "./ComingSoon.css";

const ComingSoon = function (): ReactElement {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar />
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar />
        </IonHeader>
      </IonContent>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Coming Soon!</IonCardTitle>
            <IonCardSubtitle>By me!</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>This site will be coming soon</IonCardContent>
        </IonCard>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle>Temporary footer</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default ComingSoon;
