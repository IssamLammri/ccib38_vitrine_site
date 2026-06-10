import { Sparkles, Globe, ShieldCheck } from 'lucide-react';
import React from 'react';

export const conferencesData = [
  {
    id: "ia-impact",
    title: "L'impact de l'IA sur notre quotidien",
    speaker: "Sara BOUARABA",
    date: "Dimanche 15 Février 2026",
    status: "passé",
    icon: <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-emerald-700" />,
    summary: "Une exploration des nouvelles technologies d'intelligence artificielle, leur utilisation pratique, et les enjeux éthiques et quotidiens qu'elles soulèvent pour notre société.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
    content: `L'intelligence artificielle n'est plus de la science-fiction, elle fait désormais partie intégrante de notre vie de tous les jours. Cette conférence inédite est l'occasion de lever le voile sur ces technologies souvent incomprises.

**Au programme de cette intervention :**

*   **Les fondamentaux de l'IA :** Une explication simple et abordable pour tous pour comprendre comment les machines apprennent et raisonnent.
*   **Applications concrètes :** Comment l'IA transforme la santé, l'éducation, le monde du travail et nos tâches ménagères.
*   **Enjeux éthiques et limites :** La question des biais algorithmiques, la confidentialité des données et les risques potentiels pour la société.
*   **Perspective et éthique musulmane :** Quel regard porter sur ces avancées technologiques à travers le prisme de notre spiritualité et de notre éthique ?

Rejoignez-nous pour un échange riche afin de mieux appréhender les outils de demain.`
  },
  {
    id: "astronomie-univers",
    title: "L'Astronomie et l'Univers",
    speaker: "Bouabdellah ZITOUNI",
    date: "Dimanche 8 Février 2026",
    status: "passé",
    icon: <Globe className="w-6 h-6 md:w-8 md:h-8 text-emerald-700" />,
    summary: "Voyage à travers les étoiles pour comprendre la grandeur de l'univers, la création et l'harmonie des astres d'un point de vue scientifique et spirituel.",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000&auto=format&fit=crop",
    content: `L'observation du ciel et de l'univers est une invitation profonde à la méditation et à l'humilité. Lors de cette conférence fascinante, nous avons voyagé à travers le cosmos pour découvrir les merveilles de la création.

**Les grands thèmes abordés :**

*   **De notre système solaire aux confins de l'univers :** Un voyage visuel à couper le souffle à la découverte des exoplanètes, des nébuleuses et des galaxies lointaines.
*   **La précision de la création :** L'harmonie extraordinaire et les lois physiques d'une précision inouïe qui régissent le mouvement des astres.
*   **Lumière scientifique :** Un résuméVulgarisé des découvertes scientifiques et astrophysiques récentes.
*   **L'invitation coranique (Tafakkour) :** Comment les textes nous incitent continuellement à l'observation réfléchie et contemplative des cieux pour renforcer notre cheminement spirituel.`
  },
  {
    id: "controle-parental",
    title: "Contrôle parental et outils informatiques",
    speaker: "Issam LAMMRI",
    date: "Dimanche 21 Juin 2026",
    status: "à venir",
    icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-emerald-700" />,
    summary: "Atelier pratique pour accompagner les parents dans la gestion des écrans, le paramétrage du contrôle parental sur les applications, et la promotion d'une bonne utilisation des outils numériques par les enfants.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
    content: `La protection de l'enfance à l'ère numérique est devenue un véritable défi éducatif quotidien pour chaque parent. Cet atelier participatif est conçu pour vous outiller de manière très concrète et décomplexée.

**Ce que vous allez apprendre lors de cet atelier :**

*   **État des lieux et impact :** Comprendre l'effet de la surexposition aux écrans sur le développement cognitif et le sommeil de nos enfants.
*   **Mise en place technique :** Démonstrations pas-à-pas pour paramétrer un contrôle parental efficace sur différents supports (smartphones Android/iOS, tablettes, ordinateurs).
*   **Outils pratiques :** Tour d'horizon des applications gratuites et payantes de sécurisation de la navigation (Family Link, temps d'écran, etc.).
*   **La prévention avant tout :** Comment établir un dialogue constructif avec ses enfants, créer une charte d'utilisation des écrans à la maison et prévenir le cyberharcèlement.

N'hésitez pas à venir avec vos téléphones et tablettes pour mettre en pratique les conseils directement sur place !`
  }
];
