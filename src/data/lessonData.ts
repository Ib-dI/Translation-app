// lessonsData.ts

// export const lessons = [
//   {
//     id: 1,
//     title: "Introduction à Framer Motion",
//     content: `
//       Framer Motion est une librairie populaire de React pour ajouter des animations fluides et des transitions à vos composants.
//       Il permet de créer des animations déclaratives en utilisant des propriétés simples comme \`initial\`, \`animate\`, et \`exit\`.

//       ### Concepts de base :
//       - **initial** : L'état initial de l'animation (avant qu'elle ne commence).
//       - **animate** : L'état final que l'animation va atteindre.
//       - **exit** : L'état lorsque le composant sort de l'affichage.

//       ### Exemple simple :
//       \`\`\`tsx
//       import { motion } from 'framer-motion';

//       function SimpleAnimation() {
//         return (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             Contenu animé
//           </motion.div>
//         );
//       }
//       \`\`\`
//     `,
//   },
//   {
//     id: 2,
//     title: "Utilisation des variantes",
//     content: `
//       Les variantes dans Framer Motion permettent de définir un ensemble de styles et d'animations que vous pouvez appliquer à plusieurs éléments. Cela simplifie le contrôle des animations complexes.

//       ### Exemple d'utilisation des variantes :
//       \`\`\`tsx
//       import { motion } from 'framer-motion';

//       const boxVariants = {
//         hidden: { opacity: 0, x: -100 },
//         visible: { opacity: 1, x: 0 },
//       };

//       function VariantExample() {
//         return (
//           <motion.div
//             variants={boxVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             Contenu avec variantes
//           </motion.div>
//         );
//       }
//       \`\`\`

//       ### Avantages des variantes :
//       - Permet de gérer des animations complexes plus facilement.
//       - Favorise la réutilisation d'animations entre plusieurs composants.
//     `,
//   },
// ];

export const lessons = [
  {
    id: 1,
    title: "Leçon 1",
    description: "Contenu du chapitre 1.",
    content: `

Chapitre 2 - Les Salutations

Les salutations sont un aspect important de la vie mahoraise, surtout à la campagne : il est recommandé de saluer la personne et de l'interroger sur sa santé, et éventuellement sur celle de ses proches, avant de passer à d'autres sujets.

 1. LES SALUTATIONS COURANTES : 


SALUTATIONS
RÉPONSES
- Jeje
= Bonjour ! Ça va ?
- Ndjema != Bien !
- Jeje monye
= Bonjour, Monsieur, ça va ?
- Ndjema != Bien !
- Jeje ɓweni
= Bonjour, Madame, ça va ?
- Ndjema !
= Bien !
- Jeje ɗagoni
= La maison, ça va ?
- Ndjema !
= Bien !
- Kwezi !
= Bonjour ! (à un aîné)
- Mbona !
= Bien !
- Salaam aleikum !
(salut musulman)
- Wa aleikum salaam !


 2. L'ÉCHANGE DE NOUVELLES : 

Ces simples salutations sont souvent suivies de questions plus précises, sur le moment de la journée, la santé, la famille, les enfants, etc..
On utilise pour cela des questions commençant par le mot HAƁARI qui signifie "nouvelles" :


- Haɓari ?
- Quoi de neuf ?
- Haɓari zaho ?
- Comment vas-tu ? / Quelles sont tes nouvelles ?
- Haɓari za asuɓuhi ?
- Comment ça va ce matin ?
- Haɓari za mutsana ?
- Comment ça va cet après-midi ?
- Haɓari za ujoni ?
- Comment ça va ce soir ?
- Haɓari za uku ?
- Comment ça va ce soir / cette nuit ?
- Haɓari za suku nyengi ?
- Comment ça va depuis plusieurs jours ?
- Haɓari za ɗagoni ?
- Comment ça va au village ?


Sauf en cas de malheur (décès, maladie grave, etc...) On répondra invariablement par :


- Ndjema !
 ou - Hairi !
 ou - Fetre !
 ou - Salama !
    = Tout va bien.


 3. AUTRES EXPRESSIONS COURANTES : 


- Urendre jeje ?
- Comment vas-tu ? / comment allez-vous ?
- Trongo za ndjema ?
- Tout va bien ? / Les choses vont bien ?
- Ewa !
- Oui
- Kiasi.
- Un peu
- Wa fetre ?
- Tu vas bien ? / Vous allez bien ?
- Tsa fetre.
- Je vais bien
- Navuzaho ?
- Es-tu bien portant ?
- Alhamdulillahi!
- Dieu merci
- Ɓasi wawe ?
- Et toi ? / Et vous ?
- Halo !
- Allons-y !
- Labe ! ou Labeka !
- Oui ?  (En réponse à un appel, femme)
- Naam !
- Oui ?  (En réponse à un appel, homme)
- Ãhã !   
- Non !
- Tafadhali
- S'il vous plaît. (Peu employé)
- Marahaɓa
- Merci.
- Marahaɓa nyengi / mengi
- Merci beaucoup.
- Haidhuru
- Ça ne fait rien.


 4. EN VISITE CHEZ QUELQU'UN : 

Pour annoncer sa présence chez quelqu'un, on crie à la porte :


- Hoɗi !
- Il y a quelqu'un ?


Auquel la personne répond :


- Kariɓu !
- Sois le bienvenu !  (A une personne)
- Namukariɓu ! / Namukariɓuni !
- Soyez les bienvenus !  (A plusieurs personnes)



 5. LES ADIEUX : 

Le mot pour dire au revoir est  Kwaheri !  Ce mot vient directement du swahili "Kwa heri !" ce qui signifie littéralement : à la chance, au bonheur, ou encore "bonne chance !"


- Kwaheri !
- Au revoir !  (A une personne)
- Namukwaheri ! / Namukwaherini !
- Au revoir !  (A plusieurs personnes)
- Ritsowonana !
- A bientôt !  (Nous nous reverrons)
- Suku yangina tsena.
- A un de ces jours !
- Asuɓuhi ndjema.
- bonne matinée !

Lorsqu'on se quitte le soir, on peut souhaiter :


- Uku wa hairi !
- bonne nuit ! (hairi = heri = le bonheur)
- Uku mwema !
- bonne nuit !


Au moment de dormir, on peut souhaiter aussi :


- Lala ha unono !
- Dors bien !
- Ndzozi ndjema !
- Faites de beaux rêves !


EXERCICES

EXERCICE 1 :	Faites correspondre les questions et les réponses :


QUESTIONS
RÉPONSES
1) Hodi !
a) Tsa fetre, alhamdulillahi !
2) Jeje ?
b) Haya, kwaheri !
3) Kwezi ?
c) Marahaɓa !
4) Haɓari zaho ?
d) Kariɓu !
5) Trongo za ndjema ?
e) Mbona !
6) Ndzozi ndjema !
f) Salama !
7) Ritsowonana !
g) Ndjema !



Chapitre précédentChapitre suivantTable des matières | SALUTATIONS | RÉPONSES | - Jeje | = Bonjour ! Ça va ? | - Ndjema ! | = Bien ! | - Jeje monye | = Bonjour, Monsieur, ça va ? | - Ndjema ! | = Bien ! | - Jeje ɓweni | = Bonjour, Madame, ça va ? | - Ndjema ! | = Bien ! | - Jeje ɗagoni | = La maison, ça va ? | - Ndjema ! | = Bien ! | - Kwezi ! | = Bonjour ! (à un aîné) | - Mbona ! | = Bien ! | - Salaam aleikum ! | (salut musulman) | - Wa aleikum salaam ! | - Haɓari ? | - Quoi de neuf ? | - Haɓari zaho ? | - Comment vas-tu ? / Quelles sont tes nouvelles ? | - Haɓari za asuɓuhi ? | - Comment ça va ce matin ? | - Haɓari za mutsana ? | - Comment ça va cet après-midi ? | - Haɓari za ujoni ? | - Comment ça va ce soir ? | - Haɓari za uku ? | - Comment ça va ce soir / cette nuit ? | - Haɓari za suku nyengi ? | - Comment ça va depuis plusieurs jours ? | - Haɓari za ɗagoni ? | - Comment ça va au village ? | - Ndjema ! | ou - Hairi ! | ou - Fetre ! | ou - Salama ! | = Tout va bien. | - Urendre jeje ? | - Comment vas-tu ? / comment allez-vous ? | - Trongo za ndjema ? | - Tout va bien ? / Les choses vont bien ? | - Ewa ! | - Oui | - Kiasi. | - Un peu | - Wa fetre ? | - Tu vas bien ? / Vous allez bien ? | - Tsa fetre. | - Je vais bien | - Navuzaho ? | - Es-tu bien portant ? | - Alhamdulillahi! | - Dieu merci | - Ɓasi wawe ? | - Et toi ? / Et vous ? | - Halo ! | - Allons-y ! | - Labe ! ou Labeka ! | - Oui ?  (En réponse à un appel, femme) | - Naam ! | - Oui ?  (En réponse à un appel, homme) | - Ãhã ! | - Non ! | - Tafadhali | - S'il vous plaît. (Peu employé) | - Marahaɓa | - Merci. | - Marahaɓa nyengi / mengi | - Merci beaucoup. | - Haidhuru | - Ça ne fait rien. | - Hoɗi ! | - Il y a quelqu'un ? | - Kariɓu ! | - Sois le bienvenu !  (A une personne) | - Namukariɓu ! / Namukariɓuni ! | - Soyez les bienvenus !  (A plusieurs personnes) | - Kwaheri ! | - Au revoir !  (A une personne) | - Namukwaheri ! / Namukwaherini ! | - Au revoir !  (A plusieurs personnes) | - Ritsowonana ! | - A bientôt !  (Nous nous reverrons) | - Suku yangina tsena. | - A un de ces jours ! | - Asuɓuhi ndjema. | - bonne matinée ! | - Uku wa hairi ! | - bonne nuit ! (hairi = heri = le bonheur) | - Uku mwema ! | - bonne nuit ! | - Lala ha unono ! | - Dors bien ! | - Ndzozi ndjema ! | - Faites de beaux rêves ! | QUESTIONS | RÉPONSES | 1) Hodi ! | a) Tsa fetre, alhamdulillahi ! | 2) Jeje ? | b) Haya, kwaheri ! | 3) Kwezi ? | c) Marahaɓa ! | 4) Haɓari zaho ? | d) Kariɓu ! | 5) Trongo za ndjema ? | e) Mbona ! | 6) Ndzozi ndjema ! | f) Salama ! | 7) Ritsowonana ! | g) Ndjema ! | Chapitre précédent | Chapitre suivant | Table des matières
SALUTATIONS | RÉPONSES
- Jeje | = Bonjour ! Ça va ? | - Ndjema ! | = Bien !
- Jeje monye | = Bonjour, Monsieur, ça va ? | - Ndjema ! | = Bien !
- Jeje ɓweni | = Bonjour, Madame, ça va ? | - Ndjema ! | = Bien !
- Jeje ɗagoni | = La maison, ça va ? | - Ndjema ! | = Bien !
- Kwezi ! | = Bonjour ! (à un aîné) | - Mbona ! | = Bien !
- Salaam aleikum ! | (salut musulman) | - Wa aleikum salaam !
- Haɓari ? | - Quoi de neuf ?
- Haɓari zaho ? | - Comment vas-tu ? / Quelles sont tes nouvelles ?
- Haɓari za asuɓuhi ? | - Comment ça va ce matin ?
- Haɓari za mutsana ? | - Comment ça va cet après-midi ?
- Haɓari za ujoni ? | - Comment ça va ce soir ?
- Haɓari za uku ? | - Comment ça va ce soir / cette nuit ?
- Haɓari za suku nyengi ? | - Comment ça va depuis plusieurs jours ?
- Haɓari za ɗagoni ? | - Comment ça va au village ?
- Ndjema ! | ou - Hairi ! | ou - Fetre ! | ou - Salama ! | = Tout va bien.
- Urendre jeje ? | - Comment vas-tu ? / comment allez-vous ?
- Trongo za ndjema ? | - Tout va bien ? / Les choses vont bien ?
- Ewa ! | - Oui
- Kiasi. | - Un peu
- Wa fetre ? | - Tu vas bien ? / Vous allez bien ?
- Tsa fetre. | - Je vais bien
- Navuzaho ? | - Es-tu bien portant ?
- Alhamdulillahi! | - Dieu merci
- Ɓasi wawe ? | - Et toi ? / Et vous ?
- Halo ! | - Allons-y !
- Labe ! ou Labeka ! | - Oui ?  (En réponse à un appel, femme)
- Naam ! | - Oui ?  (En réponse à un appel, homme)
- Ãhã ! | - Non !
- Tafadhali | - S'il vous plaît. (Peu employé)
- Marahaɓa | - Merci.
- Marahaɓa nyengi / mengi | - Merci beaucoup.
- Haidhuru | - Ça ne fait rien.
- Hoɗi ! | - Il y a quelqu'un ?
- Kariɓu ! | - Sois le bienvenu !  (A une personne)
- Namukariɓu ! / Namukariɓuni ! | - Soyez les bienvenus !  (A plusieurs personnes)
- Kwaheri ! | - Au revoir !  (A une personne)
- Namukwaheri ! / Namukwaherini ! | - Au revoir !  (A plusieurs personnes)
- Ritsowonana ! | - A bientôt !  (Nous nous reverrons)
- Suku yangina tsena. | - A un de ces jours !
- Asuɓuhi ndjema. | - bonne matinée !
- Uku wa hairi ! | - bonne nuit ! (hairi = heri = le bonheur)
- Uku mwema ! | - bonne nuit !
- Lala ha unono ! | - Dors bien !
- Ndzozi ndjema ! | - Faites de beaux rêves !
QUESTIONS | RÉPONSES
1) Hodi ! | a) Tsa fetre, alhamdulillahi !
2) Jeje ? | b) Haya, kwaheri !
3) Kwezi ? | c) Marahaɓa !
4) Haɓari zaho ? | d) Kariɓu !
5) Trongo za ndjema ? | e) Mbona !
6) Ndzozi ndjema ! | f) Salama !
7) Ritsowonana ! | g) Ndjema !
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 2,
    title: "Leçon 2",
    description: "Contenu du chapitre 2.",
    content: `

Chapitre 3 - Les Verbes : L'Infinitif

 GÉNÉRALITÉS 

Le verbe en shimaore se caractérise par son caractère agglutinant. Pour qu'il puisse être fonctionnel, qu'il se conjugue et s'intègre à la phrase, on doit lui attacher un nombre variable d'affixes : préfixes, infixes et suffixes, selon les différents cas de figures. Tous ces affixes ont une place et une fonction précise. Le schéma général de position des affixes par rapport au radical verbal est le suivant :

Pré-Préfixe + Préfixe Sujet + Marque de Temps + Temps Auxiliaire + Infixe Objet + RADICAL  +  Dérivation + Suffixe + Post-Suffixe

Heureusement, il est très rare qu'un verbe comporte à la fois tous ces affixes !
Ces différents affixes et leurs fonctions seront expliqués au cours des différents chapitres.

 L'INFINITIF 

En français, l'infinitif est marqué par une terminaison : -ER, -IR, -OIR, -RE.
En shimaore, l'infinitif est marqué par le préfixe U- placé devant le radical verbal.

EXEMPLES : 








U-ENDRA
aller
U-PARA
avoir, trouver, obtenir
U-FANYA
faire
U-REMA
frapper
U-JUA
savoir
U-RENGA
prendre
U-KIA
entendre
U-SOMA
lire, apprendre
U-NGALIA
regarder
U-TRIA
mettre, poser, placer


Comme on le voit à travers ces quelques exemples, la grande majorité des verbes du shimaore se terminent par  -A à l'infinitif. Il y a cependant des exceptions, notamment des verbes d'origine arabe, qui se terminent en  -I et  -U.

 QUELQUES VERBES D'ORIGINE ARABE : 








Uasili
arriver
Ufikiri
penser
Uɓadili
échanger
Ufurahi
se réjouir
Uɓaki
rester
Uhadisi
raconter
Udjereɓu
essayer
Usafiri
voyager
Udjiɓu
répondre
Usalimu
saluer


 LISTE DE VERBES D'USAGE COURANT : 








Uãndrisa
commencer
Ununua
acheter
Udzisa
demander
Uona
voir
Uhima
se lever
Urongoa
dire, raconter
Uhira
appeler
Usaidia
aider
Ukatra
supprimer
Usika
tenir, prendre, saisir
Ulawa
partir, quitter, sortir
Utsaha
vouloir
Ulala
dormir
Uudza
vendre
Ulisha
laisser
Uv̄endza
aimer
Uliv̄a
payer
Uvira
passer
Umalidza
terminer
Uzia
arrêter, retenir


 VERBES MONOSYLLABIQUES 








Ufa
mourir
Unwa
boire
Uja
venir
Unya
tomber (pluie)
Ulaa
venir de
Unya
faire ses besoins
Ula / Uɗya
manger
Uv̄a
donner



Chapitre précédentChapitre suivantTable des matières | U-ENDRA | aller | U-PARA | avoir, trouver, obtenir | U-FANYA | faire | U-REMA | frapper | U-JUA | savoir | U-RENGA | prendre | U-KIA | entendre | U-SOMA | lire, apprendre | U-NGALIA | regarder | U-TRIA | mettre, poser, placer | Uasili | arriver | Ufikiri | penser | Uɓadili | échanger | Ufurahi | se réjouir | Uɓaki | rester | Uhadisi | raconter | Udjereɓu | essayer | Usafiri | voyager | Udjiɓu | répondre | Usalimu | saluer | Uãndrisa | commencer | Ununua | acheter | Udzisa | demander | Uona | voir | Uhima | se lever | Urongoa | dire, raconter | Uhira | appeler | Usaidia | aider | Ukatra | supprimer | Usika | tenir, prendre, saisir | Ulawa | partir, quitter, sortir | Utsaha | vouloir | Ulala | dormir | Uudza | vendre | Ulisha | laisser | Uv̄endza | aimer | Uliv̄a | payer | Uvira | passer | Umalidza | terminer | Uzia | arrêter, retenir | Ufa | mourir | Unwa | boire | Uja | venir | Unya | tomber (pluie) | Ulaa | venir de | Unya | faire ses besoins | Ula / Uɗya | manger | Uv̄a | donner | Chapitre précédent | Chapitre suivant | Table des matières
U-ENDRA | aller | U-PARA | avoir, trouver, obtenir
U-FANYA | faire | U-REMA | frapper
U-JUA | savoir | U-RENGA | prendre
U-KIA | entendre | U-SOMA | lire, apprendre
U-NGALIA | regarder | U-TRIA | mettre, poser, placer
Uasili | arriver | Ufikiri | penser
Uɓadili | échanger | Ufurahi | se réjouir
Uɓaki | rester | Uhadisi | raconter
Udjereɓu | essayer | Usafiri | voyager
Udjiɓu | répondre | Usalimu | saluer
Uãndrisa | commencer | Ununua | acheter
Udzisa | demander | Uona | voir
Uhima | se lever | Urongoa | dire, raconter
Uhira | appeler | Usaidia | aider
Ukatra | supprimer | Usika | tenir, prendre, saisir
Ulawa | partir, quitter, sortir | Utsaha | vouloir
Ulala | dormir | Uudza | vendre
Ulisha | laisser | Uv̄endza | aimer
Uliv̄a | payer | Uvira | passer
Umalidza | terminer | Uzia | arrêter, retenir
Ufa | mourir | Unwa | boire
Uja | venir | Unya | tomber (pluie)
Ulaa | venir de | Unya | faire ses besoins
Ula / Uɗya | manger | Uv̄a | donner
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 3,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 3.",
    content: `

Chapitre 4 - Les Verbes : L'Impératif

 1. L'IMPÉRATIF AFFIRMATIF : 


A la deuxième personne du singulier, on utilise tout simplement le radical verbal pour exprimer un ordre à l'impératif.

RADICAL VERBAL !


EXEMPLES : 







Ufanya
faire
-> FANYA !
fais !
Uhima
se lever
-> HIMA !
lève-toi !
Urenga
prendre
-> RENGA !
prends !
Usoma
apprendre, lire
-> SOMA !
apprends ! / lis !
Uzia
arrêter
-> ZIA !
arrête !


Aux autres personnes, on place le pré-préfixe NA- au début du verbe, puis le préfixe sujet, suivi du radical verbal :








NA+
NI-
= je+RADICAL /E

A-
= il, elle

RI-
= nous

MU-
= vous

WA-
= ils / elles

ZI-
= ils / elles (classe 10)


La voyelle finale  -A du radical se transforme en  -E.
Les verbes qui se terminent en -I et  -U conservent leur voyelle.









1. UFANYA
NA-NI-FANYE
nanifanye !
que je fasse !
    (faire)
NA-A-FANYE
nafanye !
qu'il / elle fasse !
 
NA-RI-FANYE
narifanye !
faisons !
 
NA-MU-FANYE
namufanye !
faites !
 
NA-WA-FANYE
nawafanye !
qu'ils / elles fassent !









2. UHIMA
NA-NI-HIME
nanihime !
que je me lève !
    (se lever)
NA-A-HIME
nahime !
qu'il / elle se lève !
 
NA-RI-HIME
narihime !
levons-nous !
 
NA-MU-HIME
namuhime !
levez-vous !
 
NA-WA-HIME
nawahime !
qu'ils / elles se lèvent !









3. UƁAKI
NA-NI-ƁAKI
naniɓaki !
que je reste !
    (rester)
NA-A-ƁAKI
naɓaki !
qu'il / elle reste !
 
NA-RI-ƁAKI
nariɓaki !
restons !
 
NA-MU-ƁAKI
namuɓaki !
restez !
 
NA-WA-ƁAKI
nawaɓaki !
qu'ils / elles restent !
 
NA-ZI-ƁAKI
naziɓaki !
qu'ils / elles restent ! (Cl 10)


CAS PARTICULIERS : 








Uja
(venir)
-> KO !
viens !
Ulaa
(venir de, partir)
-> LAA V̄AV̄O !
va-t-en !
Uv̄a
(donner)
-> NIV̄E !
donne-moi !



 2. L'IMPÉRATIF NÉGATIF : 

On intercale l'infixe négatif  -SI- entre le préfixe sujet et le radical verbal, et la voyelle finale -A du radical se change en  -E.
La voyelle finale des verbes terminés en -I et -U ne change pas.








NI-= je+SI+RADICAL /E
U-= tu
A-= il, elle
RI-= nous
MU-= vous
WA-= ils / elles
ZI-= ils / elles (classe 10)









1. ULISHA
U-SI-LISHE
usilishe !
ne laisse pas !
    (laisser)
RI-SI-LISHE
risilishe !
ne laissons pas !
 
MU-SI-LISHE
musilishe !
ne laissez pas !









2. UJA
U-SI-JE
usije !
ne viens pas !
    (venir)
RI-SI-JE
risije !
ne venons pas !
 
MU-SI-JE
musije !
ne venez pas !









3. UREMA
U-SI-REME
usireme !
ne frappe pas !
    (frapper)
RI-SI-REME
risireme !
ne frappons pas !
 
MU-SI-REME
musireme !
ne frappez pas !


 3. L'IMPÉRATIF D'INSISTANCE : 

Il se forme en ajoutant le pré-préfixe négatif KA- devant le préfixe sujet suivi de la racine verbale.
A la 2ème personne du singulier, le pré-préfixe KA- et le préfixe sujet U- fusionnent en KU-.
La voyelle finale du verbe change en fonction de la voyelle qui la précède dans le radical.
La voyelle finale est identique à celle de l'Accompli. (Voir : Chapitre 14.)








USOMA
KA-NI-SOMO
kanisomo !
que j'apprenne donc !
(apprendre)
KA-U-SOMO
kusomo !
apprends donc !
 
KA-A-SOMO
kasomo !
qu'il / elle apprenne donc !
 
KA-RI-SOMO
karisomo !
apprenons donc !
 
KA-MU-SOMO
kamusomo !
apprenez donc !
 
KA-WA-SOMO
kawasomo !
qu'ils / elles apprennent donc !


VOCABULAIRE








Uãngadza
jouer
Ulagua
parler, bavarder
Uɓala
fermer
Uloa
pêcher
Uɓua
ouvrir
Uregeya
revenir
Uela
nager
Uruka
sauter
Uengedza
augmenter
Uvungudza
diminuer, réduire
Ukariɓisa
accueillir
Uzina
danser


EXERCICES

EXERCICE 1 : Traduisez en shimaore :


Prends!Fais  Lis !    Vas !    Entends !    Regarde !    Obtiens !    Mets !    Frappe ! Essaye !    Assieds-toi !    Echange !    Commence !    Lève-toi !    Laisse !    Demande ! Saisis !    Arrête !    Termine !    Viens !    Asseyez-vous !    Levez-vous !    Essayez !  Venez !    Laissez !    Demandez !    Achetez !    Passez !    Arrêtez !    Faites !  Commençons !   Restons !   Réjouissons-nous !   Apprenons !   Regardons !   Sachons ! Allons !    Mangeons !    Dormons !    Achetons !
Ne vas pas !   Ne fais pas !   N'entends pas !   Ne regarde pas !   Ne frappe pas !   Ne mets pas !   Ne pense pas !    Ne raconte pas !    Ne t'assieds pas !   N'essaye pas !   Ne réponds pas !   Ne reste pas !   Ne dors pas !   Ne t'arrête pas !   Ne coupe pas !   N'achetez pas ! Ne voyagez pas !   N'aidez pas !    Ne commencez pas !     Ne partez pas !    Ne dormez pas !  Ne buvez pas !   Ne faites pas !   Ne vous réjouissez pas !  Ne restez pas !   N'allons pas !   Ne payons pas !   N'aimons pas !   Ne nous asseyons pas !   Ne regardons pas !


EXERCICE 2 :   Traduisez en français :


Saidia ! Hira ! Lisha ! Rema ! Fanya ! Renga ! Ko !  Niv̄e ! Djiɓu ! Zia ! Soma ! Vira ! Rongoa ! Tria ! Laa v̄av̄o !   Narifanye ! Narirenge ! Namuje ! Namuketsi ! Nawazie ! Nawapare !  Nanifikiri ! Nanitrie ! Kurenge ! Kusomo !
Musinunue ! Usije ! Risifanye ! Risirenge ! Usifanye ! Musikatre ! Usinunue ! Risile ! Nisidjiɓu !  Musidjiɓu ! Usidzise !  Risirongoe ! Risisome ! Usidjereɓu ! Musirenge ! Usiãndrise !  Usifikiri ! Usihadisi ! Asisike ! Asikie ! Musifurahi ! Wasivire ! Usikie ! Risilishe ! Asijue !



Chapitre précédentChapitre suivantTable des matières | RADICAL VERBAL ! | Ufanya | faire | -> FANYA ! | fais ! | Uhima | se lever | -> HIMA ! | lève-toi ! | Urenga | prendre | -> RENGA ! | prends ! | Usoma | apprendre, lire | -> SOMA ! | apprends ! / lis ! | Uzia | arrêter | -> ZIA ! | arrête ! | NA+ | NI- | = je | +RADICAL /E | A- | = il, elle | RI- | = nous | MU- | = vous | WA- | = ils / elles | ZI- | = ils / elles (classe 10) | 1. UFANYA | NA-NI-FANYE | nanifanye ! | que je fasse ! | (faire) | NA-A-FANYE | nafanye ! | qu'il / elle fasse ! |  | NA-RI-FANYE | narifanye ! | faisons ! |  | NA-MU-FANYE | namufanye ! | faites ! |  | NA-WA-FANYE | nawafanye ! | qu'ils / elles fassent ! | 2. UHIMA | NA-NI-HIME | nanihime ! | que je me lève ! | (se lever) | NA-A-HIME | nahime ! | qu'il / elle se lève ! |  | NA-RI-HIME | narihime ! | levons-nous ! |  | NA-MU-HIME | namuhime ! | levez-vous ! |  | NA-WA-HIME | nawahime ! | qu'ils / elles se lèvent ! | 3. UƁAKI | NA-NI-ƁAKI | naniɓaki ! | que je reste ! | (rester) | NA-A-ƁAKI | naɓaki ! | qu'il / elle reste ! |  | NA-RI-ƁAKI | nariɓaki ! | restons ! |  | NA-MU-ƁAKI | namuɓaki ! | restez ! |  | NA-WA-ƁAKI | nawaɓaki ! | qu'ils / elles restent ! |  | NA-ZI-ƁAKI | naziɓaki ! | qu'ils / elles restent ! (Cl 10) | Uja | (venir) | -> KO ! | viens ! | Ulaa | (venir de, partir) | -> LAA V̄AV̄O ! | va-t-en ! | Uv̄a | (donner) | -> NIV̄E ! | donne-moi ! | NI- | = je | +SI | +RADICAL /E | U- | = tu | A- | = il, elle | RI- | = nous | MU- | = vous | WA- | = ils / elles | ZI- | = ils / elles (classe 10) | 1. ULISHA | U-SI-LISHE | usilishe ! | ne laisse pas ! | (laisser) | RI-SI-LISHE | risilishe ! | ne laissons pas ! |  | MU-SI-LISHE | musilishe ! | ne laissez pas ! | 2. UJA | U-SI-JE | usije ! | ne viens pas ! | (venir) | RI-SI-JE | risije ! | ne venons pas ! |  | MU-SI-JE | musije ! | ne venez pas ! | 3. UREMA | U-SI-REME | usireme ! | ne frappe pas ! | (frapper) | RI-SI-REME | risireme ! | ne frappons pas ! |  | MU-SI-REME | musireme ! | ne frappez pas ! | USOMA | KA-NI-SOMO | kanisomo ! | que j'apprenne donc ! | (apprendre) | KA-U-SOMO | kusomo ! | apprends donc ! |  | KA-A-SOMO | kasomo ! | qu'il / elle apprenne donc ! |  | KA-RI-SOMO | karisomo ! | apprenons donc ! |  | KA-MU-SOMO | kamusomo ! | apprenez donc ! |  | KA-WA-SOMO | kawasomo ! | qu'ils / elles apprennent donc ! | Uãngadza | jouer | Ulagua | parler, bavarder | Uɓala | fermer | Uloa | pêcher | Uɓua | ouvrir | Uregeya | revenir | Uela | nager | Uruka | sauter | Uengedza | augmenter | Uvungudza | diminuer, réduire | Ukariɓisa | accueillir | Uzina | danser | Chapitre précédent | Chapitre suivant | Table des matières
RADICAL VERBAL !
Ufanya | faire | -> FANYA ! | fais !
Uhima | se lever | -> HIMA ! | lève-toi !
Urenga | prendre | -> RENGA ! | prends !
Usoma | apprendre, lire | -> SOMA ! | apprends ! / lis !
Uzia | arrêter | -> ZIA ! | arrête !
NA+ | NI- | = je | +RADICAL /E
A- | = il, elle
RI- | = nous
MU- | = vous
WA- | = ils / elles
ZI- | = ils / elles (classe 10)
1. UFANYA | NA-NI-FANYE | nanifanye ! | que je fasse !
(faire) | NA-A-FANYE | nafanye ! | qu'il / elle fasse !
 | NA-RI-FANYE | narifanye ! | faisons !
 | NA-MU-FANYE | namufanye ! | faites !
 | NA-WA-FANYE | nawafanye ! | qu'ils / elles fassent !
2. UHIMA | NA-NI-HIME | nanihime ! | que je me lève !
(se lever) | NA-A-HIME | nahime ! | qu'il / elle se lève !
 | NA-RI-HIME | narihime ! | levons-nous !
 | NA-MU-HIME | namuhime ! | levez-vous !
 | NA-WA-HIME | nawahime ! | qu'ils / elles se lèvent !
3. UƁAKI | NA-NI-ƁAKI | naniɓaki ! | que je reste !
(rester) | NA-A-ƁAKI | naɓaki ! | qu'il / elle reste !
 | NA-RI-ƁAKI | nariɓaki ! | restons !
 | NA-MU-ƁAKI | namuɓaki ! | restez !
 | NA-WA-ƁAKI | nawaɓaki ! | qu'ils / elles restent !
 | NA-ZI-ƁAKI | naziɓaki ! | qu'ils / elles restent ! (Cl 10)
Uja | (venir) | -> KO ! | viens !
Ulaa | (venir de, partir) | -> LAA V̄AV̄O ! | va-t-en !
Uv̄a | (donner) | -> NIV̄E ! | donne-moi !
NI- | = je | +SI | +RADICAL /E
U- | = tu
A- | = il, elle
RI- | = nous
MU- | = vous
WA- | = ils / elles
ZI- | = ils / elles (classe 10)
1. ULISHA | U-SI-LISHE | usilishe ! | ne laisse pas !
(laisser) | RI-SI-LISHE | risilishe ! | ne laissons pas !
 | MU-SI-LISHE | musilishe ! | ne laissez pas !
2. UJA | U-SI-JE | usije ! | ne viens pas !
(venir) | RI-SI-JE | risije ! | ne venons pas !
 | MU-SI-JE | musije ! | ne venez pas !
3. UREMA | U-SI-REME | usireme ! | ne frappe pas !
(frapper) | RI-SI-REME | risireme ! | ne frappons pas !
 | MU-SI-REME | musireme ! | ne frappez pas !
USOMA | KA-NI-SOMO | kanisomo ! | que j'apprenne donc !
(apprendre) | KA-U-SOMO | kusomo ! | apprends donc !
 | KA-A-SOMO | kasomo ! | qu'il / elle apprenne donc !
 | KA-RI-SOMO | karisomo ! | apprenons donc !
 | KA-MU-SOMO | kamusomo ! | apprenez donc !
 | KA-WA-SOMO | kawasomo ! | qu'ils / elles apprennent donc !
Uãngadza | jouer | Ulagua | parler, bavarder
Uɓala | fermer | Uloa | pêcher
Uɓua | ouvrir | Uregeya | revenir
Uela | nager | Uruka | sauter
Uengedza | augmenter | Uvungudza | diminuer, réduire
Ukariɓisa | accueillir | Uzina | danser
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 4,
    title: "Leçon 4",
    description: "Contenu du chapitre 4.",
    content: `

Chapitre 5 - Les classes Nominales

En shimaore, comme dans les autres langues bantoues, les substantifs se répartissent, non pas en genres grammaticaux du type "masculin / féminin / neutre", mais en classes nominales. Le shimaore comprend 13 classes nominales, plus trois classes particulières appelées classes locatives.
Les 13 classes nominales peuvent être regroupées en 7 "genres" (ou catégories) comprenant chacun 2 classes : une classe pour le singulier et une pour le pluriel. Le 6ème "genre" emprunte ses pluriels aux autres classes. Le 7ème "genre" constitué de verbes substantivés ne possède pas de pluriel. Ces 7 "genres" correspondent de façon assez lâche à des catégories sémantiques plus ou moins étendues.
Les différentes classes nominales se reconnaissent et se définissent par leur préfixe, c'est-à-dire la première syllabe du nom, qui déterminera à
son tour une série d'accords par préfixes (et infixes) sur les adjectifs, pronoms, démonstratifs, possessifs, verbes, etc... dans la phrase.
Le nom est d'ordinaire indéfini. La distinction entre défini (le / la / l' / les) et indéfini (un / une / des) s'obtient, non pas à l'aide d'articles comme en français, mais en ajoutant un pré-préfixe défini, c'est-à-dire une syllabe supplémentaire, devant le préfixe de classe du nom. Ce
pré-préfixe varie lui aussi en fonction de la classe à laquelle appartient le nom.

Tableau synthétique des 13 classes du shimaore, regroupées en 7 genres : 

 GENRES /CLASSES
PRÉ-PRÉFIXESDÉFINIS
 PRÉFIXESNOMINAUX
 EXEMPLES 
 CATÉGORIES SÉMANTIQUES 

MU-/WA-Cl 1 SingulierCl 2 Pluriel
 U-U-
 M(U), MW-WA-, W-
(personne)MUTRUWATRU
Noms d'êtres humains uniquement.

MU-/MI-Cl 3 SingulierCl 4 Pluriel
 U-I-
 M(U), MW-MI-, M-
(main)MUHONOMIHONO
 Noms d'arbres, d'objets, de parties du corps humain, éléments de la nature.

MA-Cl 5 SingulierCl 6 Pluriel
 LI-YA-
 Ø- ou DZI-MA-
(voiture)GARIMAGARI
 Noms d'objets, d'animaux, de fruits, de parties du corps humain, termes de parenté, noms abstraits, etc.

SHI-/ZI-Cl 7 SingulierCl 8 Pluriel
 I-I-
 SHI-, SH-ZI-, Z-
(chaise)SHIRIZIRI
Noms de langues, de parties du corps humain,
objets usuels.

N-Cl 9 SingulierCl 10 Pluriel
 I-ZI-
 Ø- ou N-Ø- ou N-
(vêtement)NGUONGUO
Noms de personnes, de
choses abstraites ou concrètes,
éléments naturels, emprunts au français, etc.

U-Cl. 11, 14pluriels divers
 
 U-
(nuit)UKU
 Quelques noms d'objets (Cl. 11), Noms abstraits singuliers
(Cl. 14).

Cl. 15pas de pluriel
 
 U-
(cuisiner)UPIHA
Verbes substantivés (Cl. 15).

Cl. LocativesCl. 16, 17, 18 
 
 V̄-, H-, M-
(endroit)V̄AHANU 
 Les classes locatives ne comprennent qu'un seul nom. Elles sont présentes dans les accords de classes.


REMARQUES : 
Les numéros attribués aux différentes classes nominales dans ce tableau sont des numéros d'ordre conventionnel, valables pour toutes les langues bantoues.
Les classes 12 et 13 ne sont pas attestées en shimaore.
Le genre U- réunit en réalité 2 classes distinctes de noms au singulier : les classes 11 et 14. Les noms de classe 11 forment généralement leur pluriel en classe 6 ou 10. Ceux de la classe 14 n'ont pas de pluriel.
La classe 15 est constituée de verbes substantivés, c'est-à-dire des verbes à l'infinitif employés comme noms. Ils commencent aussi par U- en shimaore (quelquefois transcrit par WU-), ou par HU- en shindzuani. Cette classe ne possède pas de pluriel.
Quant aux classes locatives, elles comprennent 3 classes : la classe 16 (préfixe V̄-), la classe 17 (préfixe H-) et la classe 18 (préfixe M-), mais
elles ne possèdent qu'un seul nom. Comme elles ne correspondent pas aux catégories traditionnelles du singulier et du pluriel, il est difficile de les considérer comme un "genre" nominal à part entière.
C'est pourquoi elles ne seront pas incluses dans les différents tableaux de variations nominales de cet ouvrage, mais traitées comme un cas à
part.

EMPRUNTS AU FRANÇAIS : 

Pour s'adapter aux réalités du monde moderne, le shimaore doit se fabriquer tous les jours des mots nouveaux. Après avoir beaucoup
emprunté à l'arabe, il emprunte maintenant ses mots au français. Malgré tout, le système des classes nominales est préservé, car les mots
nouveaux sont assimilés aux genres MA- (Classes 5 / 6) et N- (Classes 9 / 10).
Voici quelques exemples pour illustrer ce phénomène :


Genre
Singulier
Pluriel

Genre MA- :
un chauffeur
un docteur
un policier
un gâteau
shofera
dukutera
polisi
gato
des chauffeurs
des docteurs
des policiers
des gâteaux
mazofera
madukutera
mav̄olisi
magato

Genre N- :
un taxi
l'hôpital
l'école
la barge
un avion
un jardin
taksi
lapitali
likoli
barji
aeroplani / ãvio
zarde
des taxis
des hôpitaux
des écoles
des barges
des avions
des jardins
taksi
lapitali
likoli
barji
aeroplani / ãvio
zarde


DÉFINITIONS

Tout le long de cet ouvrage, nous utiliserons la terminologie suivante pour décrire certaines parties de mots :



Radical / Racine : 
C'est la partie du mot qui reste inchangée au cours des différentes dérivations de mots, que ce soit des noms, des adjectifs ou des verbes.

Exemple : muSAFIRI (= un
voyageur), waSAFIRI (= des voyageurs),
uSAFIRI (= voyager), uSAFIRIdza (=
faire partir en voyage). Cependant on trouve : muSAFARA,
miSAFARA (= un voyage, des voyages).
 

Préfixe : 
C'est une lettre, ou une syllabe placée
devant un nom. Le préfixe sert souvent
d'accord (classe, personne, nombre, etc...)

Exemple : MUzungu (= un Européen),
WAzungu (= des Européens).
 

Pré-Préfixe : 
C'est une syllabe supplémentaire, placée devant le préfixe du nom. Présent dans de nombreuses langues bantoues, mais pas en swahili, le pré-préfixe joue en shimaore un rôle de déterminant défini.  

Exemple : MUzungu (= un Européen),
Umuzungu (= l'Européen).
WAzungu (= des Européens),
Uwazungu (= les Européens).
 

Infixe : 
C'est une lettre ou une syllabe, placée au milieu d'un mot, généralement dans un verbe, entre un préfixe et le radical verbal.

Exemple : tsaelewa (= je n'ai pas compris)
 tsaHUelewa (= je ne t'ai pas compris).
 
Suffixe : 
C'est une lettre ou une syllabe, ajoutée à la fin d'un mot. Quelquefois, c'est simplement la voyelle finale du mot qui change.

Exemple : anunuA (= il a acheté)
anunuE (= qu'il achète).



Chapitre précédentChapitre suivantTable des matières | GENRES /CLASSES | PRÉ-PRÉFIXESDÉFINIS | PRÉFIXESNOMINAUX | EXEMPLES | CATÉGORIES SÉMANTIQUES | MU-/WA-Cl 1 SingulierCl 2 Pluriel | U-U- | M(U), MW-WA-, W- | (personne)MUTRUWATRU | Noms d'êtres humains uniquement. | MU-/MI-Cl 3 SingulierCl 4 Pluriel | U-I- | M(U), MW-MI-, M- | (main)MUHONOMIHONO | Noms d'arbres, d'objets, de parties du corps humain, éléments de la nature. | MA-Cl 5 SingulierCl 6 Pluriel | LI-YA- | Ø- ou DZI-MA- | (voiture)GARIMAGARI | Noms d'objets, d'animaux, de fruits, de parties du corps humain, termes de parenté, noms abstraits, etc. | SHI-/ZI-Cl 7 SingulierCl 8 Pluriel | I-I- | SHI-, SH-ZI-, Z- | (chaise)SHIRIZIRI | Noms de langues, de parties du corps humain,
objets usuels. | N-Cl 9 SingulierCl 10 Pluriel | I-ZI- | Ø- ou N-Ø- ou N- | (vêtement)NGUONGUO | Noms de personnes, de
choses abstraites ou concrètes,
éléments naturels, emprunts au français, etc. | U-Cl. 11, 14pluriels divers |  | U- | (nuit)UKU | Quelques noms d'objets (Cl. 11), Noms abstraits singuliers
(Cl. 14). | Cl. 15pas de pluriel |  | U- | (cuisiner)UPIHA | Verbes substantivés (Cl. 15). | Cl. LocativesCl. 16, 17, 18 |  | V̄-, H-, M- | (endroit)V̄AHANU | Les classes locatives ne comprennent qu'un seul nom. Elles sont présentes dans les accords de classes. | Genre | Singulier | Pluriel | Genre MA- : | un chauffeur
un docteur
un policier
un gâteau | shofera
dukutera
polisi
gato | des chauffeurs
des docteurs
des policiers
des gâteaux | mazofera
madukutera
mav̄olisi
magato | Genre N- : | un taxi
l'hôpital
l'école
la barge
un avion
un jardin | taksi
lapitali
likoli
barji
aeroplani / ãvio
zarde | des taxis
des hôpitaux
des écoles
des barges
des avions
des jardins | taksi
lapitali
likoli
barji
aeroplani / ãvio
zarde | Radical / Racine : | C'est la partie du mot qui reste inchangée au cours des différentes dérivations de mots, que ce soit des noms, des adjectifs ou des verbes.

Exemple : muSAFIRI (= un
voyageur), waSAFIRI (= des voyageurs),
uSAFIRI (= voyager), uSAFIRIdza (=
faire partir en voyage). Cependant on trouve : muSAFARA,
miSAFARA (= un voyage, des voyages). |  | Préfixe : | C'est une lettre, ou une syllabe placée
devant un nom. Le préfixe sert souvent
d'accord (classe, personne, nombre, etc...)

Exemple : MUzungu (= un Européen),
WAzungu (= des Européens). |  | Pré-Préfixe : | C'est une syllabe supplémentaire, placée devant le préfixe du nom. Présent dans de nombreuses langues bantoues, mais pas en swahili, le pré-préfixe joue en shimaore un rôle de déterminant défini.  

Exemple : MUzungu (= un Européen),
Umuzungu (= l'Européen).
WAzungu (= des Européens),
Uwazungu (= les Européens). |  | Infixe : | C'est une lettre ou une syllabe, placée au milieu d'un mot, généralement dans un verbe, entre un préfixe et le radical verbal.

Exemple : tsaelewa (= je n'ai pas compris)
 tsaHUelewa (= je ne t'ai pas compris). |  | Suffixe : | C'est une lettre ou une syllabe, ajoutée à la fin d'un mot. Quelquefois, c'est simplement la voyelle finale du mot qui change.

Exemple : anunuA (= il a acheté)
anunuE (= qu'il achète). | Chapitre précédent | Chapitre suivant | Table des matières
GENRES /CLASSES | PRÉ-PRÉFIXESDÉFINIS | PRÉFIXESNOMINAUX | EXEMPLES | CATÉGORIES SÉMANTIQUES
MU-/WA-Cl 1 SingulierCl 2 Pluriel | U-U- | M(U), MW-WA-, W- | (personne)MUTRUWATRU | Noms d'êtres humains uniquement.
MU-/MI-Cl 3 SingulierCl 4 Pluriel | U-I- | M(U), MW-MI-, M- | (main)MUHONOMIHONO | Noms d'arbres, d'objets, de parties du corps humain, éléments de la nature.
MA-Cl 5 SingulierCl 6 Pluriel | LI-YA- | Ø- ou DZI-MA- | (voiture)GARIMAGARI | Noms d'objets, d'animaux, de fruits, de parties du corps humain, termes de parenté, noms abstraits, etc.
SHI-/ZI-Cl 7 SingulierCl 8 Pluriel | I-I- | SHI-, SH-ZI-, Z- | (chaise)SHIRIZIRI | Noms de langues, de parties du corps humain,
objets usuels.
N-Cl 9 SingulierCl 10 Pluriel | I-ZI- | Ø- ou N-Ø- ou N- | (vêtement)NGUONGUO | Noms de personnes, de
choses abstraites ou concrètes,
éléments naturels, emprunts au français, etc.
U-Cl. 11, 14pluriels divers |  | U- | (nuit)UKU | Quelques noms d'objets (Cl. 11), Noms abstraits singuliers
(Cl. 14).
Cl. 15pas de pluriel |  | U- | (cuisiner)UPIHA | Verbes substantivés (Cl. 15).
Cl. LocativesCl. 16, 17, 18 |  | V̄-, H-, M- | (endroit)V̄AHANU | Les classes locatives ne comprennent qu'un seul nom. Elles sont présentes dans les accords de classes.
Genre | Singulier | Pluriel
Genre MA- : | un chauffeur
un docteur
un policier
un gâteau | shofera
dukutera
polisi
gato | des chauffeurs
des docteurs
des policiers
des gâteaux | mazofera
madukutera
mav̄olisi
magato
Genre N- : | un taxi
l'hôpital
l'école
la barge
un avion
un jardin | taksi
lapitali
likoli
barji
aeroplani / ãvio
zarde | des taxis
des hôpitaux
des écoles
des barges
des avions
des jardins | taksi
lapitali
likoli
barji
aeroplani / ãvio
zarde
Radical / Racine : | C'est la partie du mot qui reste inchangée au cours des différentes dérivations de mots, que ce soit des noms, des adjectifs ou des verbes.

Exemple : muSAFIRI (= un
voyageur), waSAFIRI (= des voyageurs),
uSAFIRI (= voyager), uSAFIRIdza (=
faire partir en voyage). Cependant on trouve : muSAFARA,
miSAFARA (= un voyage, des voyages).

Préfixe : | C'est une lettre, ou une syllabe placée
devant un nom. Le préfixe sert souvent
d'accord (classe, personne, nombre, etc...)

Exemple : MUzungu (= un Européen),
WAzungu (= des Européens).

Pré-Préfixe : | C'est une syllabe supplémentaire, placée devant le préfixe du nom. Présent dans de nombreuses langues bantoues, mais pas en swahili, le pré-préfixe joue en shimaore un rôle de déterminant défini.  

Exemple : MUzungu (= un Européen),
Umuzungu (= l'Européen).
WAzungu (= des Européens),
Uwazungu (= les Européens).

Infixe : | C'est une lettre ou une syllabe, placée au milieu d'un mot, généralement dans un verbe, entre un préfixe et le radical verbal.

Exemple : tsaelewa (= je n'ai pas compris)
 tsaHUelewa (= je ne t'ai pas compris).

Suffixe : | C'est une lettre ou une syllabe, ajoutée à la fin d'un mot. Quelquefois, c'est simplement la voyelle finale du mot qui change.

Exemple : anunuA (= il a acheté)
anunuE (= qu'il achète).
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 5,
    title: "Leçon 5",
    description: "Contenu du chapitre 5.",
    content: `

Chapitre 6 - Les Noms : Le Genre MU-/WA-



Le genre MU-/WA- (Classes 1 / 2) contient exclusivement des noms de personnes.



Cl 1 (Singulier) :
préfixe MU-
MUTRU
= un homme

La voyelle U du préfixe de classe singulier MU- est très faiblement prononcée, ou même pas du tout. Nous avons cependant gardé cette voyelle en conformité avec les règles orthographiques de l'Association SHIME.
Cl 2 (Pluriel) :
préfixe WA-
WATRU
= des hommes
A NOTER : 
Devant une voyelle,
le préfixe singulier MU- devient MW- :
MWANA
= un enfant
 
Le préfixe pluriel  WA- devient W- :
WANA
= des enfants


 1. QUELQUES NOMS DU GENRE  MU-/WA- : 


Singulier
Pluriel
Traduction
Mudjeni
Wadjeni
un invité, des --
Mudjeremani
Wadjeremani
un allemand, des --
Mudzade
Wadzade
un parent, des --
Mufalme / Mufaume
Wafalme / Wafaume
un roi, des --
Mufanyizi hazi
Wafanyisi hazi
un travailleur, des --
Mufarantsa
Wafarantsa
un français, des --
Muhindi
Wahindi
un indien, des --
Mujuhu
Wajuhu
un petit-fils, des --
Mukazi
Wakazi
un résident, un citoyen, des --
Mulimizi
Walimizi
un cultivateur, des --
Mulozi
Walozi
un pêcheur, des --
Mume
Wame
un époux, un mari, des --
Mumrima
Wamrima
un africain, des --
Mungereza
Wangereza
un anglais, des --
Mungu
(pas de pluriel)
Dieu
Mununuzi
Wanunuzi
un acheteur, des --
Munyawe
Wanyawe
un camarade, un ami, des --
Musafiri
Wasafiri
un voyageur, des --
Mushe
Washe
une épouse, une femme, des --
Musindzi
Wasindzi
un coureur de jupon, des --
Mutangifu
Watangifu
un flâneur, des --
Mutru
Watru
une personne, des --, des gens
Mutru ɓaɓa
Watru ɓaɓa
un homme, des --
Mutru-mama
Watru-mama
une femme, des --
Mutsumba
Watsumba
un célibataire, des --
Muzee
Wazee
un vieux, des --
Muzungu
Wazungu
un homme blanc, des --
 
Mwadini
Wadini
un muezzin, des --
Mwamu
Wamu
une belle-sœur, des --
Mwana
Wana
un enfant, des --
Mwanadamu
Wanadamu
un être humain, des -- (enfant d'Adam)
Mwanamtsa
Wanatsa
un jeune, un enfant, un gamin, des --
Mwananya
Wananya
un frère, une sœur, des --
Mwana shioni
Wana zioni
un élève, des --
Mwana zaza
Wana zaza
un bébé, des --
Mwandzani
Wandzani
un ami, des --
Mwaraɓu
Waraɓu
un arabe, des --
Mwenyeji
Wenyeji
un villageois, des --
Mwenyewe
Wenyewe
un propriétaire, des --
Mwidzi
Waidzi
un voleur, des --



Singulier
Pluriel
Traduction
Mwananya mutru-ɓaɓa
Wananya watru-ɓaɓa
un frère, des --
Mwananya mutru-mama
Wananya watru-mama
une sœur, des --
Mwanamtsa mutru-ɓaɓa
Wanatsa watru-ɓaɓa
un fils, des --
Mwanamtsa mutru-mama
Wanatsa watru-mama
une fille, des --




MZUNGU ! MZUNGU ! Le mot mzungu, qui signifie 'homme blanc' - crié par tous les gamins des rues en Afrique de l'Est - fut créé à l'époque des premiers explorateurs européens à partir du verbe swahili 'kuzunguka' = 'tourner en rond sans but précis'.Depuis, on a forgé les néologismes 'mzounguette' en parlant d'une jeune femme blanche et 'mzoungouland' pour désigner les groupements de logements SIM réservés aux expatriés à Mayotte...


 2. AUTRES NOMS DE PERSONNES : 

Quelques noms de personnes de genre N- au singulier (Classe 9),  prennent le préfixe WA- de classe 2 au pluriel.
Il y a aussi un certain nombre de noms de personnes du genre MA- . Ces noms qui n'ont pas de préfixe au singulier (classe 5, préfixe "Ø-"), forment leur pluriel avec le préfixe MA- (classe 6).
Tous ces noms de personnes commandent cependant des accords de classes 1 / 2 avec les verbes, les adjectifs, etc.. (Voir : Chapitre 13 et Chapitre 20.)

Noms de GENRE N- avec pluriel en WA- (Cl 9 / Cl 2) :  


Singulier
Pluriel
Traduction
Ɓaɓa
Waɓaɓa
père, papa
Mama
Wamama
mère, maman
Ɓaɓaɓole
Waɓaɓaɓole
frère aîné du père, oncle
Mamaɓole
Wamamaɓole
sœur aînée de la mère, tante
Ɓaɓatiti
Waɓaɓatiti
frère cadet du père, oncle
Mamatiti
Wamamatiti
sœur cadette de la mère, tante


Noms de GENRE MA- (Classes 5 / 6) :


Singulier
Pluriel
Traduction
Ɓakoko
Maɓakoko
grand-père
Ɓwana
Maɓwana
monsieur
Ɓweni
Maɓweni
madame
Duktera
Maduktera
docteur
Fundi
Mafundi
maître, artisan
Fundi likoli
Mafundi likoli
maître d'école
Koko
Mahoko / Makoko
grand-mère
Monye
Mamonye
monsieur
Ngivavi
Mangivavi
tante (paternelle)
Raisi
Maraisi
président
Shaɓaɓi
Mashaɓaɓi
jeune, adolescent
Shofera
Mazofera
chauffeur
Twaɓiɓu
Matwaɓiɓu
médecin, docteur
Zama
Mazama
oncle (maternel)
Zena
Mazena
tante (épouse de Zama)
Zuki
Mazuki
grand frère


 3. LE PRÉ-PRÉFIXE DÉFINI : 

Le pré-préfixe défini se place devant le préfixe de classe, et fonctionne comme un article défini. D'un usage moins fréquent que l'article défini en français, il est surtout employé pour désigner une personne (ou une chose, dans le cas des autres classes nominales) dont on a déjà parlé avant.
Il s'emploie aussi en conjonction avec un adjectif démonstratif ou un possessif (ce qui n'est pas le cas de l'article défini en français).


Cl 1 (Singulier) :
U-   
MUTRU
= une personne
UMUTRU
= la personne
 
MWANA
= un enfant
UMWANA
= l'enfant
 
Cl 2 (Pluriel) :
U-   
WATRU
= des personnes 
UWATRU
= les personnes
 
WANA
= des enfants 
UWANA
= les enfants


 4. ACCORDS DE CLASSE : 



Adjectif :  L'adjectif prend des préfixes d'accord de classe identiques à ceux du nom : (Voir : Chapitre 11.)


Classe 1 :
Mwana
muɓole / muzuri / muɗu / mutiti / mwema / ...
un
grand  /  beau  /  noir  / petit  /  joli  / ...
enfant
 
Classe 2 :
Wanawaɓole / wazuri / waɗu / watiti / wema / ...
des
grands  /  beaux  /  noirs  / petits  /  jolis  /  ...
enfants



Adjectifs possessifs :


Classe 1 :
Mwana
wangu / waho / wahe / watru / wanyu / wawo
 
=
mon  /  ton  /  son  / notre  /  votre  /  leur
enfant
 
Classe 2 :
Wana
wangu / waho / wahe / watru / wanyu / wawo
 
=
mes   /   tes   /  ses    /   nos    /   vos     /  leurs
enfants



Démonstratif :


Classe 1 (Singulier) :Classe 2 (Pluriel) :

Mwanamtsa
unu
= cet enfant-ci
Wanatsa
wanu
= ces enfants-ci

ule
= cet enfant là-bas
wale
= ces enfants là-bas


uwo
= cet enfant-là
wao
= ces enfants-là





EXERCICES

EXERCICE 1 : Traduisez en Shimaore :


Saute !   Ferme !  Reviens !  Augmente !  Diminue ! Parle ! Joue !  Danse !  Jouons !  Revenez !   Ouvrez !   Qu'il accueille !   Qu'il parle !    Qu'il diminue !   Ne jouez pas !   Ne ferme pas !   N'ouvre pas !   Ne bavarde pas !    Ne saute pas !   Ne revenez pas !
Des blancs,   un enfant,   un arabe,   un homme,   un oncle maternel,    des pêcheurs,   un invité, des anglais,   des amis,   une grand-mère,    un grand-père,    Madame,   des français,   une tante paternelle,    des êtres humains,    Monsieur,   un voleur,   un frère,  une sœur,   un mari.
Le blanc,   les enfants,    les invités,   les amis,   les gens,   le pêcheur,   le français,   le voleur,   le bébé,   les êtres humains,   le mari,   l'épouse,   les femmes,   l'arabe,   l'élève, le muezzin, les anglais, la personne, le fils, la fille.


EXERCICE 2 : Traduisez en français :


Fundi,  ɓaɓatiti, mamaɓole, shofera, ɓaɓa, mwandzani, mudjeni, mwana, mutru, mungereza, walozi, wana, wazungu, waraɓu, zama, ngivavi, wandzani, wafarantsa, wanadamu, mwananya mutru-mama.
Umutru, umwana, umwidzi, umulozi, uwana, uwanatsa, umufarantsa,   umudjeni, uwandzani, umuzungu, umutru-ɓaɓa, umutru-mama, umwana shioni, umwanamtsa, umwaraɓu.


EXERCICE 3 : Mettez les noms suivants au pluriel :


Mutru, mutru-ɓaɓa, mutru-mushe, mutru-mama, mutru-mume, muzungu, mwananya, mwanamtsa, mwana shioni, fundi likoli, mwidzi, mwanamtsa mutru-ɓaɓa, ɓaɓa, mama, ɓaɓaɓole, mamatiti, koko, ɓakoko, zama, shofera, ɓweni,  duktera, ngivavi, monye, mwana zaza.



Chapitre précédentChapitre suivantTable des matières |  | Le genre MU-/WA- (Classes 1 / 2) contient exclusivement des noms de personnes. | Cl 1 (Singulier) : | préfixe MU- | MUTRU | = un homme | La voyelle U du préfixe de classe singulier MU- est très faiblement prononcée, ou même pas du tout. Nous avons cependant gardé cette voyelle en conformité avec les règles orthographiques de l'Association SHIME. | Cl 2 (Pluriel) : | préfixe WA- | WATRU | = des hommes | A NOTER : | Devant une voyelle, | le préfixe singulier MU- devient MW- : | MWANA | = un enfant |  | Le préfixe pluriel  WA- devient W- : | WANA | = des enfants | Singulier | Pluriel | Traduction | Mudjeni | Wadjeni | un invité, des -- | Mudjeremani | Wadjeremani | un allemand, des -- | Mudzade | Wadzade | un parent, des -- | Mufalme / Mufaume | Wafalme / Wafaume | un roi, des -- | Mufanyizi hazi | Wafanyisi hazi | un travailleur, des -- | Mufarantsa | Wafarantsa | un français, des -- | Muhindi | Wahindi | un indien, des -- | Mujuhu | Wajuhu | un petit-fils, des -- | Mukazi | Wakazi | un résident, un citoyen, des -- | Mulimizi | Walimizi | un cultivateur, des -- | Mulozi | Walozi | un pêcheur, des -- | Mume | Wame | un époux, un mari, des -- | Mumrima | Wamrima | un africain, des -- | Mungereza | Wangereza | un anglais, des -- | Mungu | (pas de pluriel) | Dieu | Mununuzi | Wanunuzi | un acheteur, des -- | Munyawe | Wanyawe | un camarade, un ami, des -- | Musafiri | Wasafiri | un voyageur, des -- | Mushe | Washe | une épouse, une femme, des -- | Musindzi | Wasindzi | un coureur de jupon, des -- | Mutangifu | Watangifu | un flâneur, des -- | Mutru | Watru | une personne, des --, des gens | Mutru ɓaɓa | Watru ɓaɓa | un homme, des -- | Mutru-mama | Watru-mama | une femme, des -- | Mutsumba | Watsumba | un célibataire, des -- | Muzee | Wazee | un vieux, des -- | Muzungu | Wazungu | un homme blanc, des -- |  | Mwadini | Wadini | un muezzin, des -- | Mwamu | Wamu | une belle-sœur, des -- | Mwana | Wana | un enfant, des -- | Mwanadamu | Wanadamu | un être humain, des -- (enfant d'Adam) | Mwanamtsa | Wanatsa | un jeune, un enfant, un gamin, des -- | Mwananya | Wananya | un frère, une sœur, des -- | Mwana shioni | Wana zioni | un élève, des -- | Mwana zaza | Wana zaza | un bébé, des -- | Mwandzani | Wandzani | un ami, des -- | Mwaraɓu | Waraɓu | un arabe, des -- | Mwenyeji | Wenyeji | un villageois, des -- | Mwenyewe | Wenyewe | un propriétaire, des -- | Mwidzi | Waidzi | un voleur, des -- | Singulier | Pluriel | Traduction | Mwananya mutru-ɓaɓa | Wananya watru-ɓaɓa | un frère, des -- | Mwananya mutru-mama | Wananya watru-mama | une sœur, des -- | Mwanamtsa mutru-ɓaɓa | Wanatsa watru-ɓaɓa | un fils, des -- | Mwanamtsa mutru-mama | Wanatsa watru-mama | une fille, des -- | MZUNGU ! MZUNGU ! Le mot mzungu, qui signifie 'homme blanc' - crié par tous les gamins des rues en Afrique de l'Est - fut créé à l'époque des premiers explorateurs européens à partir du verbe swahili 'kuzunguka' = 'tourner en rond sans but précis'.Depuis, on a forgé les néologismes 'mzounguette' en parlant d'une jeune femme blanche et 'mzoungouland' pour désigner les groupements de logements SIM réservés aux expatriés à Mayotte... | Singulier | Pluriel | Traduction | Ɓaɓa | Waɓaɓa | père, papa | Mama | Wamama | mère, maman | Ɓaɓaɓole | Waɓaɓaɓole | frère aîné du père, oncle | Mamaɓole | Wamamaɓole | sœur aînée de la mère, tante | Ɓaɓatiti | Waɓaɓatiti | frère cadet du père, oncle | Mamatiti | Wamamatiti | sœur cadette de la mère, tante | Singulier | Pluriel | Traduction | Ɓakoko | Maɓakoko | grand-père | Ɓwana | Maɓwana | monsieur | Ɓweni | Maɓweni | madame | Duktera | Maduktera | docteur | Fundi | Mafundi | maître, artisan | Fundi likoli | Mafundi likoli | maître d'école | Koko | Mahoko / Makoko | grand-mère | Monye | Mamonye | monsieur | Ngivavi | Mangivavi | tante (paternelle) | Raisi | Maraisi | président | Shaɓaɓi | Mashaɓaɓi | jeune, adolescent | Shofera | Mazofera | chauffeur | Twaɓiɓu | Matwaɓiɓu | médecin, docteur | Zama | Mazama | oncle (maternel) | Zena | Mazena | tante (épouse de Zama) | Zuki | Mazuki | grand frère | Cl 1 (Singulier) : | U- | MUTRU | = une personne | UMUTRU | = la personne |  | MWANA | = un enfant | UMWANA | = l'enfant |  | Cl 2 (Pluriel) : | U- | WATRU | = des personnes | UWATRU | = les personnes |  | WANA | = des enfants | UWANA | = les enfants | Classe 1 : | Mwana | muɓole / muzuri / muɗu / mutiti / mwema / ... | un | grand  /  beau  /  noir  / petit  /  joli  / ... | enfant |  | Classe 2 : | Wana | waɓole / wazuri / waɗu / watiti / wema / ... | des | grands  /  beaux  /  noirs  / petits  /  jolis  /  ... | enfants | Classe 1 : | Mwana | wangu / waho / wahe / watru / wanyu / wawo |  | = | mon  /  ton  /  son  / notre  /  votre  /  leur | enfant |  | Classe 2 : | Wana | wangu / waho / wahe / watru / wanyu / wawo |  | = | mes   /   tes   /  ses    /   nos    /   vos     /  leurs | enfants | Classe 1 (Singulier) : | Classe 2 (Pluriel) : | Mwanamtsa | unu | = cet enfant-ci | Wanatsa | wanu | = ces enfants-ci | ule | = cet enfant là-bas | wale | = ces enfants là-bas | uwo | = cet enfant-là | wao | = ces enfants-là | Chapitre précédent | Chapitre suivant | Table des matières
| Le genre MU-/WA- (Classes 1 / 2) contient exclusivement des noms de personnes.
Cl 1 (Singulier) : | préfixe MU- | MUTRU | = un homme
La voyelle U du préfixe de classe singulier MU- est très faiblement prononcée, ou même pas du tout. Nous avons cependant gardé cette voyelle en conformité avec les règles orthographiques de l'Association SHIME.
Cl 2 (Pluriel) : | préfixe WA- | WATRU | = des hommes
A NOTER :
Devant une voyelle, | le préfixe singulier MU- devient MW- : | MWANA | = un enfant
| Le préfixe pluriel  WA- devient W- : | WANA | = des enfants
Singulier | Pluriel | Traduction
Mudjeni | Wadjeni | un invité, des --
Mudjeremani | Wadjeremani | un allemand, des --
Mudzade | Wadzade | un parent, des --
Mufalme / Mufaume | Wafalme / Wafaume | un roi, des --
Mufanyizi hazi | Wafanyisi hazi | un travailleur, des --
Mufarantsa | Wafarantsa | un français, des --
Muhindi | Wahindi | un indien, des --
Mujuhu | Wajuhu | un petit-fils, des --
Mukazi | Wakazi | un résident, un citoyen, des --
Mulimizi | Walimizi | un cultivateur, des --
Mulozi | Walozi | un pêcheur, des --
Mume | Wame | un époux, un mari, des --
Mumrima | Wamrima | un africain, des --
Mungereza | Wangereza | un anglais, des --
Mungu | (pas de pluriel) | Dieu
Mununuzi | Wanunuzi | un acheteur, des --
Munyawe | Wanyawe | un camarade, un ami, des --
Musafiri | Wasafiri | un voyageur, des --
Mushe | Washe | une épouse, une femme, des --
Musindzi | Wasindzi | un coureur de jupon, des --
Mutangifu | Watangifu | un flâneur, des --
Mutru | Watru | une personne, des --, des gens
Mutru ɓaɓa | Watru ɓaɓa | un homme, des --
Mutru-mama | Watru-mama | une femme, des --
Mutsumba | Watsumba | un célibataire, des --
Muzee | Wazee | un vieux, des --
Muzungu | Wazungu | un homme blanc, des --

Mwadini | Wadini | un muezzin, des --
Mwamu | Wamu | une belle-sœur, des --
Mwana | Wana | un enfant, des --
Mwanadamu | Wanadamu | un être humain, des -- (enfant d'Adam)
Mwanamtsa | Wanatsa | un jeune, un enfant, un gamin, des --
Mwananya | Wananya | un frère, une sœur, des --
Mwana shioni | Wana zioni | un élève, des --
Mwana zaza | Wana zaza | un bébé, des --
Mwandzani | Wandzani | un ami, des --
Mwaraɓu | Waraɓu | un arabe, des --
Mwenyeji | Wenyeji | un villageois, des --
Mwenyewe | Wenyewe | un propriétaire, des --
Mwidzi | Waidzi | un voleur, des --
Singulier | Pluriel | Traduction
Mwananya mutru-ɓaɓa | Wananya watru-ɓaɓa | un frère, des --
Mwananya mutru-mama | Wananya watru-mama | une sœur, des --
Mwanamtsa mutru-ɓaɓa | Wanatsa watru-ɓaɓa | un fils, des --
Mwanamtsa mutru-mama | Wanatsa watru-mama | une fille, des --
MZUNGU ! MZUNGU !Le mot mzungu, qui signifie 'homme blanc' - crié par tous les gamins des rues en Afrique de l'Est - fut créé à l'époque des premiers explorateurs européens à partir du verbe swahili 'kuzunguka' = 'tourner en rond sans but précis'.Depuis, on a forgé les néologismes 'mzounguette' en parlant d'une jeune femme blanche et 'mzoungouland' pour désigner les groupements de logements SIM réservés aux expatriés à Mayotte...
Singulier | Pluriel | Traduction
Ɓaɓa | Waɓaɓa | père, papa
Mama | Wamama | mère, maman
Ɓaɓaɓole | Waɓaɓaɓole | frère aîné du père, oncle
Mamaɓole | Wamamaɓole | sœur aînée de la mère, tante
Ɓaɓatiti | Waɓaɓatiti | frère cadet du père, oncle
Mamatiti | Wamamatiti | sœur cadette de la mère, tante
Singulier | Pluriel | Traduction
Ɓakoko | Maɓakoko | grand-père
Ɓwana | Maɓwana | monsieur
Ɓweni | Maɓweni | madame
Duktera | Maduktera | docteur
Fundi | Mafundi | maître, artisan
Fundi likoli | Mafundi likoli | maître d'école
Koko | Mahoko / Makoko | grand-mère
Monye | Mamonye | monsieur
Ngivavi | Mangivavi | tante (paternelle)
Raisi | Maraisi | président
Shaɓaɓi | Mashaɓaɓi | jeune, adolescent
Shofera | Mazofera | chauffeur
Twaɓiɓu | Matwaɓiɓu | médecin, docteur
Zama | Mazama | oncle (maternel)
Zena | Mazena | tante (épouse de Zama)
Zuki | Mazuki | grand frère
Cl 1 (Singulier) :
U- | MUTRU | = une personne | UMUTRU | = la personne
| MWANA | = un enfant | UMWANA | = l'enfant

Cl 2 (Pluriel) :
U- | WATRU | = des personnes | UWATRU | = les personnes
| WANA | = des enfants | UWANA | = les enfants
Classe 1 : | Mwana | muɓole / muzuri / muɗu / mutiti / mwema / ...
un | grand  /  beau  /  noir  / petit  /  joli  / ... | enfant

Classe 2 : | Wana | waɓole / wazuri / waɗu / watiti / wema / ...
des | grands  /  beaux  /  noirs  / petits  /  jolis  /  ... | enfants
Classe 1 : | Mwana | wangu / waho / wahe / watru / wanyu / wawo | 
= | mon  /  ton  /  son  / notre  /  votre  /  leur | enfant

Classe 2 : | Wana | wangu / waho / wahe / watru / wanyu / wawo | 
= | mes   /   tes   /  ses    /   nos    /   vos     /  leurs | enfants
Classe 1 (Singulier) : | Classe 2 (Pluriel) :
Mwanamtsa | unu | = cet enfant-ci | Wanatsa | wanu | = ces enfants-ci
ule | = cet enfant là-bas | wale | = ces enfants là-bas
uwo | = cet enfant-là | wao | = ces enfants-là
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 6,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 6.",
    content: `

Chapitre 7 - Les Pronoms Sujets

Il existe en shimaore deux catégories de pronoms sujets :

Les PRONOMS PERSONNELS AUTONOMES (P.P.A.) :
Ceux-ci sont surtout utilisés avec le PRÉSENT HABITUEL.
Ils peuvent aussi être utilisés aux autres temps, pour renforcer le sujet.
Les PRÉFIXES SUJETS :
On peut distinguer deux sortes de péfixes sujets :

Les indices pronoms sujets
Les indices d'accord de classe

Ils sont utilisés à tous les temps, excepté le présent habituel, et sont accrochés au verbe.
A la 3ème personne du singulier et du pluriel, il n'y a pas substitution entre le nom sujet et le préfixe
sujet, mais complémentarité : le préfixe sujet est là, même lorsque le nom sujet est déjà exprimé dans la phrase.


 1. LES PRONOMS PERSONNEL AUTONOMES : 


   WAMI
= je, moi
   WAWE
= tu, toi
   WAYE
= il, elle, lui, elle
   WASI
= nous
   WANYU
= vous
   WAWO
= ils, elles, eux, elles


 2. LES INDICES PRONOMS SUJETS AFFIRMATIFS : 



Personne
Singulier
Equivalent
Pluriel
Equivalent

1ère personne
Ni- ou TSI-
= je
RI-
= nous

2ème personne
U-
= tu
MU-
= vous

3ème personne
A-
= il / elle
WA-
= ils / elles


 3. LES INDICES D'ACCORDS DE CLASSE AFFIRMATIFS : 



GENRES / Classes
Singulier
Equivalent
Pluriel
Equivalent

Genre MU-/WA- (Cl 1 / 2)
A-
= il, elle
WA-
= ils / elles

Genre MU-/MI- (Cl 3 / 4)
U-
= il / elle
I-
= ils / elles

Genre MA- Cl 5 / 6)
LI-
= il / elle
YA-
= ils / elles

Genre SHI-/ZI- (Cl 7 / 8)
I-
= il / elle
ZI-
= ils / elles

Genre N- (Cl 9 / 10)
I-
= il / elle
ZI-
= ils / elles

Genre U- (Cl 11,14)
U-
= il / elle
 

CLASSES LOCATIVES
V̄U-
= il / elle


Du point de vue de la forme, les préfixes sujets des verbes sont identiques aux pré-préfixes définis des noms de classe correspondante, sauf pour le genre MU-/WA-.
Les indices d'accords de classe 1 et classe 2 (genre MU-/WA-) se confondent avec les indices pronoms sujets de la 3ème personne du singulier et du pluriel.
Le choix de l'indice d'accord de classe dépend de la classe nominale à laquelle appartient le nom sujet correspondant.
Cependant, avec un nom sujet qui représente une personne, même lorsqu'il n'appartient pas au genre MU-/WA-, on utilisera des indices d'accord de classes 1 et 2. L'accord sémantique a priorité sur le stricte accord de classe.

EXEMPLES : 







Asuloa fi
Il / elle pêche des poissons
(Classe 1)
Mulozi asuloa fi
Le pêcheur (il) prend des
poissons
 
Wasuasili
Ils / elles arrivent
(Classe 2)
Wanatsa wasuasili
Les enfants (ils) arrivent
 
Afu
Il / elle est morte
(Classe 1)
Ɓaɓa afu
Papa (il) est mort
 
Ifu
Il / elle est morte
(Classe 9)
Imbuzi ifu
La chèvre (elle) est morte
 
Zifu
Ils / elles sont mortes
(Classe 10)
Zimbuzi zifu
Les chèvres sont mortes
 
Isulawa
Il / elle part
(Classe 9)
Barji isulawa
La barge (elle) part
 
Yasulawa
Ils / elles démarrent
(Classe 6)
Magari yasulawa
Les voitures (elles) démarrent
 


 4. LES INDICES PRONOMS SUJETS NEGATIFS : 

Ceux-ci résultent de la combinaison du pré-préfixe négatif KA- et de l'indice pronom sujet, à l'exception de la 1ère personne du singulier, qui utilise un indice pronom spécifique (probablement emprunté au malgache).



Personne
Singulier
Equivalent
Pluriel
Equivalent

1ère personne
TSI-
= je ne
KARI-
= nous ne

2ème personne
KU-
= tu ne
KAMU-
= vous ne

3ème personne
KA-
= il / elle ne
KAWA-
= ils / elles ne


 5. LES INDICES D'ACCORDS DE CLASSE NEGATIFS : 

Ceux-ci résultent de la combinaison du pré-préfixe négatif KA- et de l'indice d'accord de classe :



GENRES / Classes
Singulier
Equivalent
Pluriel
Equivalent

Genre MU-/WA- (Cl 1 /2 )
KA-
= il / elle ne
KAWA-
= ils / elles ne

Genre MU-/MI- (Cl 3 / 4)
KAU-
= il / elle ne
KAI-
= ils / elles ne

Genre MA- (Cl 5 / 6)
KALI-
= il / elle ne
KAYA-
= ils / elles ne

Genre SHI-/ZI- (Cl 7 / 8)
KAI-
= il / elle ne
KAZI-
= ils / elles ne

Genre N- (Cl 9 / 10)
KAI-
= il / elle ne
KAZI-
= ils / elles ne

Genre U- (Cl 11 / 14)
KAU-
= il / elle ne
 

CLASSES LOCATIVES
KAV̄U-
= il / elle ne


EXEMPLES : 







Tsiji
Je ne sais pas
 
Kaji
Il / elle ne sait pas
(Classe 1)
Kaja
Il / elle n'est pas venu
(Classe 1)
Kawaja
Ils / elles ne sont pas venu(e)s
(Classe 2)
Kamulala
Vous n'êtes pas couchés
 
Kasufanya hazi
Il / elle ne travaille pas
(Classe 1)
Hamadi kasufanya hazi
Ahmed (il) ne travaille pas
 
Shofera kasufanya hazi
Le chauffeur (il) ne travaille pas
(Classe 5 : Cl 1)
Kayasufanya hazi
Ils / elles ne travaillent pas
(Classe 6)
Mafundi kayasufanya hazi
Les artisans (ils) ne travaillent pas
(Classe 6)
Hazi kav̄u
Il n'y a pas de travail
(Classes Locatives)



VOCABULAIRE








Uazima
prêter
Ulola
épouser (une femme)
Uɗala
oublier
Upasi
repasser
Ufua (nguo)
laver le linge
Upiha
faire la cuisine
Uhosa (zia)
laver la vaisselle
Upindra
s'habiller
Uhundza
balayer
Upua
enlever, arracher
Ulindra
attendre
Uv̄angua
essuyer (les assiettes)



Chapitre précédentChapitre suivantTable des matières | WAMI | = je, moi | WAWE | = tu, toi | WAYE | = il, elle, lui, elle | WASI | = nous | WANYU | = vous | WAWO | = ils, elles, eux, elles | Personne | Singulier | Equivalent | Pluriel | Equivalent | 1ère personne | Ni- ou TSI- | = je | RI- | = nous | 2ème personne | U- | = tu | MU- | = vous | 3ème personne | A- | = il / elle | WA- | = ils / elles | GENRES / Classes | Singulier | Equivalent | Pluriel | Equivalent | Genre MU-/WA- (Cl 1 / 2) | A- | = il, elle | WA- | = ils / elles | Genre MU-/MI- (Cl 3 / 4) | U- | = il / elle | I- | = ils / elles | Genre MA- Cl 5 / 6) | LI- | = il / elle | YA- | = ils / elles | Genre SHI-/ZI- (Cl 7 / 8) | I- | = il / elle | ZI- | = ils / elles | Genre N- (Cl 9 / 10) | I- | = il / elle | ZI- | = ils / elles | Genre U- (Cl 11,14) | U- | = il / elle |  | CLASSES LOCATIVES | V̄U- | = il / elle | Asuloa fi | Il / elle pêche des poissons | (Classe 1) | Mulozi asuloa fi | Le pêcheur (il) prend des
poissons |  | Wasuasili | Ils / elles arrivent | (Classe 2) | Wanatsa wasuasili | Les enfants (ils) arrivent |  | Afu | Il / elle est morte | (Classe 1) | Ɓaɓa afu | Papa (il) est mort |  | Ifu | Il / elle est morte | (Classe 9) | Imbuzi ifu | La chèvre (elle) est morte |  | Zifu | Ils / elles sont mortes | (Classe 10) | Zimbuzi zifu | Les chèvres sont mortes |  | Isulawa | Il / elle part | (Classe 9) | Barji isulawa | La barge (elle) part |  | Yasulawa | Ils / elles démarrent | (Classe 6) | Magari yasulawa | Les voitures (elles) démarrent |  | Personne | Singulier | Equivalent | Pluriel | Equivalent | 1ère personne | TSI- | = je ne | KARI- | = nous ne | 2ème personne | KU- | = tu ne | KAMU- | = vous ne | 3ème personne | KA- | = il / elle ne | KAWA- | = ils / elles ne | GENRES / Classes | Singulier | Equivalent | Pluriel | Equivalent | Genre MU-/WA- (Cl 1 /2 ) | KA- | = il / elle ne | KAWA- | = ils / elles ne | Genre MU-/MI- (Cl 3 / 4) | KAU- | = il / elle ne | KAI- | = ils / elles ne | Genre MA- (Cl 5 / 6) | KALI- | = il / elle ne | KAYA- | = ils / elles ne | Genre SHI-/ZI- (Cl 7 / 8) | KAI- | = il / elle ne | KAZI- | = ils / elles ne | Genre N- (Cl 9 / 10) | KAI- | = il / elle ne | KAZI- | = ils / elles ne | Genre U- (Cl 11 / 14) | KAU- | = il / elle ne |  | CLASSES LOCATIVES | KAV̄U- | = il / elle ne | Tsiji | Je ne sais pas |  | Kaji | Il / elle ne sait pas | (Classe 1) | Kaja | Il / elle n'est pas venu | (Classe 1) | Kawaja | Ils / elles ne sont pas venu(e)s | (Classe 2) | Kamulala | Vous n'êtes pas couchés |  | Kasufanya hazi | Il / elle ne travaille pas | (Classe 1) | Hamadi kasufanya hazi | Ahmed (il) ne travaille pas |  | Shofera kasufanya hazi | Le chauffeur (il) ne travaille pas | (Classe 5 : Cl 1) | Kayasufanya hazi | Ils / elles ne travaillent pas | (Classe 6) | Mafundi kayasufanya hazi | Les artisans (ils) ne travaillent pas | (Classe 6) | Hazi kav̄u | Il n'y a pas de travail | (Classes Locatives) | Uazima | prêter | Ulola | épouser (une femme) | Uɗala | oublier | Upasi | repasser | Ufua (nguo) | laver le linge | Upiha | faire la cuisine | Uhosa (zia) | laver la vaisselle | Upindra | s'habiller | Uhundza | balayer | Upua | enlever, arracher | Ulindra | attendre | Uv̄angua | essuyer (les assiettes) | Chapitre précédent | Chapitre suivant | Table des matières
WAMI | = je, moi
WAWE | = tu, toi
WAYE | = il, elle, lui, elle
WASI | = nous
WANYU | = vous
WAWO | = ils, elles, eux, elles
Personne | Singulier | Equivalent | Pluriel | Equivalent
1ère personne | Ni- ou TSI- | = je | RI- | = nous
2ème personne | U- | = tu | MU- | = vous
3ème personne | A- | = il / elle | WA- | = ils / elles
GENRES / Classes | Singulier | Equivalent | Pluriel | Equivalent
Genre MU-/WA- (Cl 1 / 2) | A- | = il, elle | WA- | = ils / elles
Genre MU-/MI- (Cl 3 / 4) | U- | = il / elle | I- | = ils / elles
Genre MA- Cl 5 / 6) | LI- | = il / elle | YA- | = ils / elles
Genre SHI-/ZI- (Cl 7 / 8) | I- | = il / elle | ZI- | = ils / elles
Genre N- (Cl 9 / 10) | I- | = il / elle | ZI- | = ils / elles
Genre U- (Cl 11,14) | U- | = il / elle | 
CLASSES LOCATIVES | V̄U- | = il / elle
Asuloa fi | Il / elle pêche des poissons | (Classe 1)
Mulozi asuloa fi | Le pêcheur (il) prend des
poissons | 
Wasuasili | Ils / elles arrivent | (Classe 2)
Wanatsa wasuasili | Les enfants (ils) arrivent | 
Afu | Il / elle est morte | (Classe 1)
Ɓaɓa afu | Papa (il) est mort | 
Ifu | Il / elle est morte | (Classe 9)
Imbuzi ifu | La chèvre (elle) est morte | 
Zifu | Ils / elles sont mortes | (Classe 10)
Zimbuzi zifu | Les chèvres sont mortes | 
Isulawa | Il / elle part | (Classe 9)
Barji isulawa | La barge (elle) part | 
Yasulawa | Ils / elles démarrent | (Classe 6)
Magari yasulawa | Les voitures (elles) démarrent | 
Personne | Singulier | Equivalent | Pluriel | Equivalent
1ère personne | TSI- | = je ne | KARI- | = nous ne
2ème personne | KU- | = tu ne | KAMU- | = vous ne
3ème personne | KA- | = il / elle ne | KAWA- | = ils / elles ne
GENRES / Classes | Singulier | Equivalent | Pluriel | Equivalent
Genre MU-/WA- (Cl 1 /2 ) | KA- | = il / elle ne | KAWA- | = ils / elles ne
Genre MU-/MI- (Cl 3 / 4) | KAU- | = il / elle ne | KAI- | = ils / elles ne
Genre MA- (Cl 5 / 6) | KALI- | = il / elle ne | KAYA- | = ils / elles ne
Genre SHI-/ZI- (Cl 7 / 8) | KAI- | = il / elle ne | KAZI- | = ils / elles ne
Genre N- (Cl 9 / 10) | KAI- | = il / elle ne | KAZI- | = ils / elles ne
Genre U- (Cl 11 / 14) | KAU- | = il / elle ne | 
CLASSES LOCATIVES | KAV̄U- | = il / elle ne
Tsiji | Je ne sais pas | 
Kaji | Il / elle ne sait pas | (Classe 1)
Kaja | Il / elle n'est pas venu | (Classe 1)
Kawaja | Ils / elles ne sont pas venu(e)s | (Classe 2)
Kamulala | Vous n'êtes pas couchés | 
Kasufanya hazi | Il / elle ne travaille pas | (Classe 1)
Hamadi kasufanya hazi | Ahmed (il) ne travaille pas | 
Shofera kasufanya hazi | Le chauffeur (il) ne travaille pas | (Classe 5 : Cl 1)
Kayasufanya hazi | Ils / elles ne travaillent pas | (Classe 6)
Mafundi kayasufanya hazi | Les artisans (ils) ne travaillent pas | (Classe 6)
Hazi kav̄u | Il n'y a pas de travail | (Classes Locatives)
Uazima | prêter | Ulola | épouser (une femme)
Uɗala | oublier | Upasi | repasser
Ufua (nguo) | laver le linge | Upiha | faire la cuisine
Uhosa (zia) | laver la vaisselle | Upindra | s'habiller
Uhundza | balayer | Upua | enlever, arracher
Ulindra | attendre | Uv̄angua | essuyer (les assiettes)
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 7,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 7.",
    content: `

Chapitre 8 - Les Verbes : Le Présent Actuel

Le présent actuel en  -SI- (ou  -SU-) sert essentiellement à décrire des actions qui ont lieu au moment où l'on parle. Il est ancré dans l'instant présent et a la même valeur que le PRESENT CONTINUOUS en anglais. Il se traduit par le présent en français.

 1.  LA FORME AFFIRMATIVE : 

Le verbe se construit de la façon suivante au présent actuel :

  PRÉFIXE SUJET + SI / SU + RACINE VERBALE  

On retire la marque de l'infinitif (le préfixe U-) pour conjuguer le verbe. La marque du présent est l'infixe
-SI- (ou  -SU-) qui se place entre le préfixe sujet et le radical verbal.


Il ne faut pas confondre l'infixe SI- ou SU- marque du présent avec le SI- de l'impératif négatif !

MODÈLE :    UFANYA = faire








 
NI-SI-FANYA
-> nisifanya
je fais
 
U-SI-FANYA
-> usifanya
tu fais
(Classe 1, Singulier)
A-SI-FANYA
-> asifanya
il / elle fait
 
RI-SI-FANYA
-> risifanya
nous faisons
 
MU-SI-FANYA
-> musifanya
vous faites
(Classe 2, Pluriel)
WA-SI-FANYA
-> wasifanya
ils / elles font


REMARQUE : 
Lorsque le radical verbal commence par une voyelle, il est fréquent que la voyelle de l'infixe de temps -SI- (ou  -SU-) ne s'entende pas.
MODÈLE :    UENDRA = aller








 
NI-S(I)-ENDRA
-> nisendra
je vais
 
U-S(I)-ENDRA
-> usendra
tu vas
(Classe 1, Singulier)
A-S(I)-ENDRA
-> asendra
il / elle va
 
RI-S(I)-ENDRA
-> risendra
nous allons
 
MU-S(I)-ENDRA
-> musendra
vous allez
(Classe 2, Pluriel)
WA-S(I)-ENDRA
-> wasendra
ils / elles vont


 2. LA FORME NÉGATIVE : 

La négation se forme en ajoutant le pré-préfixe négatif KA- devant le préfixe sujet, sauf à la première personne du singulier où l'on utilise le préfixe sujet négatif TSI-.

PRÉFIXE SUJET NÉGATIF + SI / SU + RACINE VERBALE  

MODÈLE :    UKIA = entendre








 
TSI-SI-KIA
-> tsisikia
je n'entends pas
(KA+U) :
KU-SI-KIA
-> kusikia
tu n'entends pas
(KA+A) :
KA-SI-KIA
-> kasikia
il / elle n'entend pas
 
KA-RI-SI-KIA
-> karisikia
nous n'entendons pas
 
KA-MU-SI-KIA
-> kamusikia
vous n'entendez pas
 
KA-WA-SI-KIA
-> kawasikia
ils / elles n'entendent pas


 3. QUELQUES PHRASES AU PRÉSENT ACTUEL : 


Mama asiketsi
Maman s'asseoit
Uwandzani wasija
Les amis arrivent
Risikariɓisa uwadjeni
Nous accueillons les invités
Wana wasufurahi
Les enfants se réjouissent
Usitsaha fi ?
Veux-tu du poisson ?
Nisuona dza / nyora
J'ai faim / soif (Je vois la faim / la soif)
Barji isija
La barge arrive
Vua isinya
La pluie tombe
Kawasija
Ils / elles ne viennent pas
Kaswona walozi
Il ne voit pas les pêcheurs
Kamusifanya hazi mwa ?
Vous ne travaillez pas ?
Karisifanya hazi
Nous ne travaillons pas


 4. COMMENT POSER UNE QUESTION SIMPLE : 

Lorsqu'on pose une question qui appelle une réponse par OUI ou par NON, on peut utiliser les mots AFA
ou MWA ou SAV̄U pour renforcer l'intonation interrogative de la phrase.
AFA et SAV̄U se placent en début de phrase, tandis que MWA se place à la fin.

EXEMPLES : 

Usija ?
Est-ce que tu viens ?
Afa usija ?
Alors, tu viens ?
Sav̄u usija ?
Et bien, tu viens ?
Usija mwa ?
Viens-tu donc ?



VOCABULAIRE


Na
et, avec
au
ou
Lakini, ɓe
mais
Leo
aujourd'hui
Av̄asa
maintenant
Tsena
encore, à nouveau
Kula / kila
chaque
Swafi
très, vivement


EXERCICES

EXERCICE 1 : Traduisez en shimaore :


Je fais, il fait, il demande, il paye, j'essaye, nous échangeons, je veux, ils achètent, elle sait, nous lisons, elle dort, nous commençons, ils jouent, il mange, ils arrivent, il voit, vous revenez,  nous coupons, tu augmentes, je vends.
Il se réjouit vraiment, maman part, elle revient aujourd'hui,   l'invité arrive, je paie maintenant, les enfants dorment, les jeunes répondent, le père voyage encore, les invités mangent,   l'oncle part aujourd'hui, le bébé boit maintenant.
Il ne vend pas mais il achète, je ne pars pas aujourd'hui, les élèves ne jouent pas, l'enfant ne mange mais il dort, nous n'essayons pas, le père ne paye pas, les jeunes n'apprennent pas mais ils jouent,  le blanc ne vient pas maintenant,  ils n'obtiennent pas,  elle n'aime pas.


EXERCICE 2 : Traduisez en français :


Nisendra, nisusoma, usutsaha, usifanya, asizia, asivira, risiɓadili, usidjereɓu, risiliv̄a, musifanya, musifurahi, wasiɓaki, wasiketsi, asisafiri, nisilagua, risuwaswili, asufaulu, nisifikiri, asimalidza, asijua.
Tsisikia, tsisijua, tsisipara, tsisitsaha, kasirenga, kasifikiri,   kasiliv̄a, kasidjereɓu, kusilala, kusidzisa, kusuvungudza,   kusiɓadili, karisuja, karisutria, kamusunwa, kamusilawa, kawasiv̄endza, kawasikatra, kawasirongoa, kawasilisha.
Muzungu asija av̄asa, wadjeni wasija leo, wana wasisoma fetre,   mwana kasija leo, mutru ɓaɓa asisaidia, wananya watru ɓaɓa wasiregeya leo, mulozi asipara fi tsena, umufarantsa asisoma shimaore, wadjeni wasiketsi av̄asa, wananya kawasilawa leo.



Chapitre précédentChapitre suivantTable des matières |  | Il ne faut pas confondre l'infixe SI- ou SU- marque du présent avec le SI- de l'impératif négatif ! |  | NI-SI-FANYA | -> nisifanya | je fais |  | U-SI-FANYA | -> usifanya | tu fais | (Classe 1, Singulier) | A-SI-FANYA | -> asifanya | il / elle fait |  | RI-SI-FANYA | -> risifanya | nous faisons |  | MU-SI-FANYA | -> musifanya | vous faites | (Classe 2, Pluriel) | WA-SI-FANYA | -> wasifanya | ils / elles font |  | NI-S(I)-ENDRA | -> nisendra | je vais |  | U-S(I)-ENDRA | -> usendra | tu vas | (Classe 1, Singulier) | A-S(I)-ENDRA | -> asendra | il / elle va |  | RI-S(I)-ENDRA | -> risendra | nous allons |  | MU-S(I)-ENDRA | -> musendra | vous allez | (Classe 2, Pluriel) | WA-S(I)-ENDRA | -> wasendra | ils / elles vont |  | TSI-SI-KIA | -> tsisikia | je n'entends pas | (KA+U) : | KU-SI-KIA | -> kusikia | tu n'entends pas | (KA+A) : | KA-SI-KIA | -> kasikia | il / elle n'entend pas |  | KA-RI-SI-KIA | -> karisikia | nous n'entendons pas |  | KA-MU-SI-KIA | -> kamusikia | vous n'entendez pas |  | KA-WA-SI-KIA | -> kawasikia | ils / elles n'entendent pas | Mama asiketsi | Maman s'asseoit | Uwandzani wasija | Les amis arrivent | Risikariɓisa uwadjeni | Nous accueillons les invités | Wana wasufurahi | Les enfants se réjouissent | Usitsaha fi ? | Veux-tu du poisson ? | Nisuona dza / nyora | J'ai faim / soif (Je vois la faim / la soif) | Barji isija | La barge arrive | Vua isinya | La pluie tombe | Kawasija | Ils / elles ne viennent pas | Kaswona walozi | Il ne voit pas les pêcheurs | Kamusifanya hazi mwa ? | Vous ne travaillez pas ? | Karisifanya hazi | Nous ne travaillons pas | Usija ? | Est-ce que tu viens ? | Afa usija ? | Alors, tu viens ? | Sav̄u usija ? | Et bien, tu viens ? | Usija mwa ? | Viens-tu donc ? | Na | et, avec | au | ou | Lakini, ɓe | mais | Leo | aujourd'hui | Av̄asa | maintenant | Tsena | encore, à nouveau | Kula / kila | chaque | Swafi | très, vivement | Chapitre précédent | Chapitre suivant | Table des matières
 | Il ne faut pas confondre l'infixe SI- ou SU- marque du présent avec le SI- de l'impératif négatif !
 | NI-SI-FANYA | -> nisifanya | je fais
 | U-SI-FANYA | -> usifanya | tu fais
(Classe 1, Singulier) | A-SI-FANYA | -> asifanya | il / elle fait
 | RI-SI-FANYA | -> risifanya | nous faisons
 | MU-SI-FANYA | -> musifanya | vous faites
(Classe 2, Pluriel) | WA-SI-FANYA | -> wasifanya | ils / elles font
 | NI-S(I)-ENDRA | -> nisendra | je vais
 | U-S(I)-ENDRA | -> usendra | tu vas
(Classe 1, Singulier) | A-S(I)-ENDRA | -> asendra | il / elle va
 | RI-S(I)-ENDRA | -> risendra | nous allons
 | MU-S(I)-ENDRA | -> musendra | vous allez
(Classe 2, Pluriel) | WA-S(I)-ENDRA | -> wasendra | ils / elles vont
 | TSI-SI-KIA | -> tsisikia | je n'entends pas
(KA+U) : | KU-SI-KIA | -> kusikia | tu n'entends pas
(KA+A) : | KA-SI-KIA | -> kasikia | il / elle n'entend pas
 | KA-RI-SI-KIA | -> karisikia | nous n'entendons pas
 | KA-MU-SI-KIA | -> kamusikia | vous n'entendez pas
 | KA-WA-SI-KIA | -> kawasikia | ils / elles n'entendent pas
Mama asiketsi | Maman s'asseoit
Uwandzani wasija | Les amis arrivent
Risikariɓisa uwadjeni | Nous accueillons les invités
Wana wasufurahi | Les enfants se réjouissent
Usitsaha fi ? | Veux-tu du poisson ?
Nisuona dza / nyora | J'ai faim / soif (Je vois la faim / la soif)
Barji isija | La barge arrive
Vua isinya | La pluie tombe
Kawasija | Ils / elles ne viennent pas
Kaswona walozi | Il ne voit pas les pêcheurs
Kamusifanya hazi mwa ? | Vous ne travaillez pas ?
Karisifanya hazi | Nous ne travaillons pas
Usija ? | Est-ce que tu viens ?
Afa usija ? | Alors, tu viens ?
Sav̄u usija ? | Et bien, tu viens ?
Usija mwa ? | Viens-tu donc ?
Na | et, avec | au | ou
Lakini, ɓe | mais | Leo | aujourd'hui
Av̄asa | maintenant | Tsena | encore, à nouveau
Kula / kila | chaque | Swafi | très, vivement
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 8,
    title: "Leçon 8",
    description: "Contenu du chapitre 8.",
    content: `

Chapitre 9 - Les Noms : Le Genre MU-/MI-

Le genre MU-/MI- (Classes 3 / 4) n'est pas aussi spécifique que le genre MU-/WA- (Classes 1 / 2).


Le genre MU-/MI- contient tous les noms d'arbres mais ne contient aucun nom d'êtres humains.

Outre les noms d'arbres, il contient aussi des noms d'objets usuels, d'aliments cuisinés, de parties du corps humain, de lieux construits, d'éléments de la nature, de repères temporels, etc..



Cl 3 (Singulier) :
préfixe MU-
MUHONO
= une main



Comme pour le genre MU-/WA-, la voyelle U du préfixe de classe singulier MU- est très faiblement prononcée, ou même pas du tout. Nous avons cependant gardé cette voyelle en conformité avec les règles orthographiques de l'Association SHIME.
Cl 4 (Pluriel) :
préfixe MI-
MIHONO
= des mains
 A NOTER : 
Devant une voyelle,
le préfixe singulier MU- devient MW- :
MWIRI
= un arbre
 
Le préfixe pluriel   MI- devient M- :
MIRI
= des arbres


 1. QUELQUES NOMS DU GENRE MU-/MI- (Classes 3 / 4 ) : 

  1. ARBRES, PLANTES :  


Singulier
Pluriel
Traduction
Muɓuyu
Miɓuyu
un baobab, des --
Mufenesi
Mifenesi
un jaquier, des --
Muframpe
Miframpe
un arbre à pain, des --
Muhogo
Mihogo
le manioc, des --
Mulimu
Milimu
un citronier, des --
Mumanga
Mimanga
un manguier, des --
Munadzi
Minadzi
un cocotier, des --
Mupapaya
Mipapaya
un papayer, des --
Murundra
Mirundra
un oranger, des --
Muwa
Miwa / Miha
une canne à sucre, des --
Mwiri
Miri
un arbre, des --


  2. PARTIES DU CORPS :  


Singulier
Pluriel
Traduction
Muɓwa
Miɓwa
un os, des --
Muhono
Mihono
une main, des --
Mundru
Mindru
un pied, une jambe, des --
Mushia
Mishia
une queue, des --
Muvumo
Mivumo
une fesse, des --
Mwili
Mili
un corps, des --


  3. OBJETS USUELS :  


Singulier
Pluriel
Traduction
Muhare
Mihare
un gâteau, une galette, des --
Muho
Miho
une rape à coco, des --
Mukandra
Mikandra
une ceinture, des --
Mukoɓa
Mikoɓa
un sac, des --
Mulango
Milango
une porte, des --
Mulingo
Milingo
une échelle, des --
Mulizima
Milizima
un boubou, des --
Mupira
Mipira
un tuyau, un plastique, des --
Muswaki
Miswaki
une brosse à dent, des --
Mutsuzi
Mitsuzi
une sauce, des --
Mwitsi
Mitsi
un pilon, des --


  4. LIEUX CONSTRUITS OU ELEMENTS NATURELS :  


Singulier
Pluriel
Traduction
Mukiri
Mikiri
une mosquée, des --
Mulima
Milima
une colline, une montagne, des --
Munara
Minara
un minaret, des --
Mupaka
Mipaka
une frontière, une limite, des --
Mura
Mira
un quartier, des --
Muro
Miro
une rivière, des --


  5. DIVERS :  


Singulier
Pluriel
Traduction
Moro
Mero
un feu, des --
Mufumo
Mifumo
une semaine, des --
Mukataba
Mikataba
un contrat, une promesse, des --
Mupango
Mipango
un projet, des --
Muraha
Miraha
un jeu de bao, des --
Musafara
Misafara
un voyage, des --
Mwaha
Maha
une année, des  --
Mwenge
Menge
l'électricité, une lumière, des --
Mwesi
Mesi
une fumée, des  --
Mwezi
Mezi
un mois, la lune, des  --
Mwiso
(pas de pluriel)
la fin

Voir aussi les listes de vocabulaire complémentaires :

Chapitre 15 (Objets, etc..)
Chapitre 30 (Arbres)
Chapitre 38 (Objets, Eléments naturels, etc..)


Cependant, de nombreux noms d'éléments naturels, de parties du corps humain, et de plantes, ne sont pas contenus dans ce genre.

 2. LE PRÉ-PRÉFIXE DÉFINI : 

Il se place devant le préfixe de classe du nom et fonctionne comme un article défini.


Cl 1 (Singulier) :
U-   
MWAHA
= une année 
UMWAHA
= l'année
 
MUHONO
= une main
UMUHONO
= la main
 
Cl 2 (Pluriel) :
I-   
MAHA
= des années
IMAHA
= les années
 
MIHONO
= des mains
IMIHONO
= les mains


 3. ACCORDS DE CLASSE : 


Adjectif :  L'adjectif prend des préfixes d'accord de classe identiques à ceux du nom : (Voir :
Chapitre 11.)


Classe 3 :
Muhono
muɓole / muzuri / muɗu / mule / mwema / ...
 
une
grande  /  belle  /  noire  /  large  /  jolie  / ...
main
 
Classe 4 :
Mihono
miɓole / mizuri / miɗu / mile / mema / ...
 
des
grandes  /  belles  /  noires  / larges  /  jolies  / ...
mains


Adjectifs possessifs :


Classe 3 :
Muhono
wangu / waho / wahe / watru / wanyu / wawo
 
=
ma  /  ta  /  sa  / notre  /  votre  /  leur
main
 
Classe 4 :
Mihono
yangu / yaho / yahe / yatru / yanyu / yawo
 
=
mes   /   tes   /  ses    /   nos    /   vos     /  leurs
mains



Démonstratif :


Classe 3 (Singulier) :Classe 4 (Pluriel) :

Munadzi
unu
= ce cocotier-ci
Minadzi
ini
= ces cocotiers-ci


ule
= ce cocotier là-bas
ile= ces cocotiers là-bas

uwo
= ce cocotier-là
iyo
= ces cocotiers-là




EXERCICES

EXERCICE 1 : Traduisez en shimaore :


Une rivière,   une montagne,   un cocotier,   du manioc,    un arbre,    une limite,   un os,  le corps,   les pieds,   la lune,   des frontières,   des projets,   des contrats,   la queue,   une brosse à dent,   des mois, des années,   un minaret,   des portes,   des arbres,   des tuyaux,  des sacs,   un manguier,   un voyage, le jeu de bao.
Je commence le voyage,     il termine le voyage,     ferme la porte !    Ne ferme pas la porte !   Achète un tuyau !    Lis le contrat !    Prends une brosse à dents !    Prenons des brosses à dent !    Il achète du manioc,     vous regardez le minaret,    coupe les arbres !  Ne coupons pas les arbres !   Regarde la porte !   N'oublions pas les sacs !   Ils jouent au bao,   elles lavent la vaisselle,   il raconte le voyage,   nous nous habillons,    elle fait la cuisine,   il épouse une femme aujourd'hui.


EXERCICE 2 : Traduisez en français :

Mihono,   mindru,   musafara,   mwesi,   mwiso,   mwezi,   mura,    muraha,   mumanga,  munadzi, milima,   miro,   miri,   mwenge,    mipango,    muwa,   mupira,   mipaka,   minara,  muɓwa.

EXERCICE 3 : Traduisez en français :



Wanatsa wasiãngadza muraha
Mwanamtsa asirema miri
Mwana asingalia muro
Mama asununua mukoɓa
Musiɗale musafara
Nisifanya mupango
Waidzi wasirenga mipira
Mutru ɓaɓa asusoma mukataɓa
ɓaɓa asikatra mimanga
Wanatsa wasiɓala mulango
Mama asifua nguo
Namuhime av̄asa !
Naripasi leo !
Wana watru washe wasihosa zia
Musilindre av̄asa




Chapitre précédentChapitre suivantTable des matières |  | Le genre MU-/MI- contient tous les noms d'arbres mais ne contient aucun nom d'êtres humains. | Cl 3 (Singulier) : | préfixe MU- | MUHONO | = une main | Comme pour le genre MU-/WA-, la voyelle U du préfixe de classe singulier MU- est très faiblement prononcée, ou même pas du tout. Nous avons cependant gardé cette voyelle en conformité avec les règles orthographiques de l'Association SHIME. | Cl 4 (Pluriel) : | préfixe MI- | MIHONO | = des mains | A NOTER : | Devant une voyelle, | le préfixe singulier MU- devient MW- : | MWIRI | = un arbre |  | Le préfixe pluriel   MI- devient M- : | MIRI | = des arbres | Singulier | Pluriel | Traduction | Muɓuyu | Miɓuyu | un baobab, des -- | Mufenesi | Mifenesi | un jaquier, des -- | Muframpe | Miframpe | un arbre à pain, des -- | Muhogo | Mihogo | le manioc, des -- | Mulimu | Milimu | un citronier, des -- | Mumanga | Mimanga | un manguier, des -- | Munadzi | Minadzi | un cocotier, des -- | Mupapaya | Mipapaya | un papayer, des -- | Murundra | Mirundra | un oranger, des -- | Muwa | Miwa / Miha | une canne à sucre, des -- | Mwiri | Miri | un arbre, des -- | Singulier | Pluriel | Traduction | Muɓwa | Miɓwa | un os, des -- | Muhono | Mihono | une main, des -- | Mundru | Mindru | un pied, une jambe, des -- | Mushia | Mishia | une queue, des -- | Muvumo | Mivumo | une fesse, des -- | Mwili | Mili | un corps, des -- | Singulier | Pluriel | Traduction | Muhare | Mihare | un gâteau, une galette, des -- | Muho | Miho | une rape à coco, des -- | Mukandra | Mikandra | une ceinture, des -- | Mukoɓa | Mikoɓa | un sac, des -- | Mulango | Milango | une porte, des -- | Mulingo | Milingo | une échelle, des -- | Mulizima | Milizima | un boubou, des -- | Mupira | Mipira | un tuyau, un plastique, des -- | Muswaki | Miswaki | une brosse à dent, des -- | Mutsuzi | Mitsuzi | une sauce, des -- | Mwitsi | Mitsi | un pilon, des -- | Singulier | Pluriel | Traduction | Mukiri | Mikiri | une mosquée, des -- | Mulima | Milima | une colline, une montagne, des -- | Munara | Minara | un minaret, des -- | Mupaka | Mipaka | une frontière, une limite, des -- | Mura | Mira | un quartier, des -- | Muro | Miro | une rivière, des -- | Singulier | Pluriel | Traduction | Moro | Mero | un feu, des -- | Mufumo | Mifumo | une semaine, des -- | Mukataba | Mikataba | un contrat, une promesse, des -- | Mupango | Mipango | un projet, des -- | Muraha | Miraha | un jeu de bao, des -- | Musafara | Misafara | un voyage, des -- | Mwaha | Maha | une année, des  -- | Mwenge | Menge | l'électricité, une lumière, des -- | Mwesi | Mesi | une fumée, des  -- | Mwezi | Mezi | un mois, la lune, des  -- | Mwiso | (pas de pluriel) | la fin | Cl 1 (Singulier) : | U- | MWAHA | = une année | UMWAHA | = l'année |  | MUHONO | = une main | UMUHONO | = la main |  | Cl 2 (Pluriel) : | I- | MAHA | = des années | IMAHA | = les années |  | MIHONO | = des mains | IMIHONO | = les mains | Classe 3 : | Muhono | muɓole / muzuri / muɗu / mule / mwema / ... |  | une | grande  /  belle  /  noire  /  large  /  jolie  / ... | main |  | Classe 4 : | Mihono | miɓole / mizuri / miɗu / mile / mema / ... |  | des | grandes  /  belles  /  noires  / larges  /  jolies  / ... | mains | Classe 3 : | Muhono | wangu / waho / wahe / watru / wanyu / wawo |  | = | ma  /  ta  /  sa  / notre  /  votre  /  leur | main |  | Classe 4 : | Mihono | yangu / yaho / yahe / yatru / yanyu / yawo |  | = | mes   /   tes   /  ses    /   nos    /   vos     /  leurs | mains | Classe 3 (Singulier) : | Classe 4 (Pluriel) : | Munadzi | unu | = ce cocotier-ci | Minadzi | ini | = ces cocotiers-ci | ule | = ce cocotier là-bas | ile | = ces cocotiers là-bas | uwo | = ce cocotier-là | iyo | = ces cocotiers-là | Chapitre précédent | Chapitre suivant | Table des matières
 | Le genre MU-/MI- contient tous les noms d'arbres mais ne contient aucun nom d'êtres humains.
Cl 3 (Singulier) : | préfixe MU- | MUHONO | = une main
Comme pour le genre MU-/WA-, la voyelle U du préfixe de classe singulier MU- est très faiblement prononcée, ou même pas du tout. Nous avons cependant gardé cette voyelle en conformité avec les règles orthographiques de l'Association SHIME.
Cl 4 (Pluriel) : | préfixe MI- | MIHONO | = des mains
A NOTER :
Devant une voyelle, | le préfixe singulier MU- devient MW- : | MWIRI | = un arbre
 | Le préfixe pluriel   MI- devient M- : | MIRI | = des arbres
Singulier | Pluriel | Traduction
Muɓuyu | Miɓuyu | un baobab, des --
Mufenesi | Mifenesi | un jaquier, des --
Muframpe | Miframpe | un arbre à pain, des --
Muhogo | Mihogo | le manioc, des --
Mulimu | Milimu | un citronier, des --
Mumanga | Mimanga | un manguier, des --
Munadzi | Minadzi | un cocotier, des --
Mupapaya | Mipapaya | un papayer, des --
Murundra | Mirundra | un oranger, des --
Muwa | Miwa / Miha | une canne à sucre, des --
Mwiri | Miri | un arbre, des --
Singulier | Pluriel | Traduction
Muɓwa | Miɓwa | un os, des --
Muhono | Mihono | une main, des --
Mundru | Mindru | un pied, une jambe, des --
Mushia | Mishia | une queue, des --
Muvumo | Mivumo | une fesse, des --
Mwili | Mili | un corps, des --
Singulier | Pluriel | Traduction
Muhare | Mihare | un gâteau, une galette, des --
Muho | Miho | une rape à coco, des --
Mukandra | Mikandra | une ceinture, des --
Mukoɓa | Mikoɓa | un sac, des --
Mulango | Milango | une porte, des --
Mulingo | Milingo | une échelle, des --
Mulizima | Milizima | un boubou, des --
Mupira | Mipira | un tuyau, un plastique, des --
Muswaki | Miswaki | une brosse à dent, des --
Mutsuzi | Mitsuzi | une sauce, des --
Mwitsi | Mitsi | un pilon, des --
Singulier | Pluriel | Traduction
Mukiri | Mikiri | une mosquée, des --
Mulima | Milima | une colline, une montagne, des --
Munara | Minara | un minaret, des --
Mupaka | Mipaka | une frontière, une limite, des --
Mura | Mira | un quartier, des --
Muro | Miro | une rivière, des --
Singulier | Pluriel | Traduction
Moro | Mero | un feu, des --
Mufumo | Mifumo | une semaine, des --
Mukataba | Mikataba | un contrat, une promesse, des --
Mupango | Mipango | un projet, des --
Muraha | Miraha | un jeu de bao, des --
Musafara | Misafara | un voyage, des --
Mwaha | Maha | une année, des  --
Mwenge | Menge | l'électricité, une lumière, des --
Mwesi | Mesi | une fumée, des  --
Mwezi | Mezi | un mois, la lune, des  --
Mwiso | (pas de pluriel) | la fin
Cl 1 (Singulier) :
U- | MWAHA | = une année | UMWAHA | = l'année
 | MUHONO | = une main | UMUHONO | = la main

Cl 2 (Pluriel) :
I- | MAHA | = des années | IMAHA | = les années
 | MIHONO | = des mains | IMIHONO | = les mains
Classe 3 : | Muhono | muɓole / muzuri / muɗu / mule / mwema / ... | 
une | grande  /  belle  /  noire  /  large  /  jolie  / ... | main

Classe 4 : | Mihono | miɓole / mizuri / miɗu / mile / mema / ... | 
des | grandes  /  belles  /  noires  / larges  /  jolies  / ... | mains
Classe 3 : | Muhono | wangu / waho / wahe / watru / wanyu / wawo | 
= | ma  /  ta  /  sa  / notre  /  votre  /  leur | main

Classe 4 : | Mihono | yangu / yaho / yahe / yatru / yanyu / yawo | 
= | mes   /   tes   /  ses    /   nos    /   vos     /  leurs | mains
Classe 3 (Singulier) : | Classe 4 (Pluriel) :
Munadzi | unu | = ce cocotier-ci | Minadzi | ini | = ces cocotiers-ci
ule | = ce cocotier là-bas | ile | = ces cocotiers là-bas
uwo | = ce cocotier-là | iyo | = ces cocotiers-là
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 9,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 9.",
    content: `

Chapitre 10 - Les Verbes : Le Présent Habituel

Ce temps sert à décrire des actions habituelles ou permanentes, ou à énoncer des vérités "scientifiques", qui ne se déroulent pas nécessairement au moment où l'on parle.
L'emploi de ce temps correspond à celui du SIMPLE PRESENT en anglais. On le traduira en français par un présent.

 1. FORME AFFIRMATIVE : 

Le présent habituel se conjugue en utilisant les PRONOMS PERSONNELS AUTONOMES ou P.P.A., suivis du radical verbal préfixé par U- (forme identique à celle de l'infinitif du verbe).A la 3ème personne du singulier et du pluriel, un nom sujet peut se substituer au P.P.A.

 PRONOM PERSONNEL AUTONOME   U + RACINE VERBALE 

MODÈLE :   USOMA = lire


WAMI    
USOMA
je lis
WAWE    
USOMA
tu lis
WAYE    
USOMA
il /elle lit
WASI    
USOMA
nous lisons
WANYU    
USOMA
vous lisez
WAWO    
USOMA
ils / elles lisent


 2. FORME NÉGATIVE : 

Le présent habituel négatif se conjugue en utilisant les P.P.A. suivis des préfixes sujets négatifs du présent actuel liés à la racine verbale. La voyelle finale -A se change en -E, -I, -0, -U par harmonie vocalique avec la voyelle précédente. (Voir : Chapitre 14.)

 P.P.A.   PRÉF. SUJET NÉGATIF + RACINE VERBALE - VOYELLE 

MODÈLE :    USOMA = lire


WAMI    
TSISOMO
je ne lis pas
WAWE    
KUSOMO
tu ne lis pas
WAYE    
KASOMO
il /elle ne lit pas
WASI    
KARISOMO
nous ne lisons pas
WANYU    
KAMUSOMO
vous ne lisez pas
WAWO    
KAWASOMO
ils / elles ne lisent pas


ATTENTION : 
Il existe un risque de confusion entre la 1ère personne du singulier du présent habituel et la 1ère personne du singulier de l'accompli affirmatif, qui ont une forme identique :

Wami tsisomo = Je ne lis pas / J'ai lu.
Wami tsiketsi Mtsamboro = Je n'habite pas à Mtsamboro.
Wami tsiketsi Mtsamboro mezi mili = J'habite à Mtsamboro (depuis) deux mois.


 3. QUELQUES PHRASES AU PRÉSENT HABITUEL : 


1. Wawe ufanya hazi trini ?Quel travail fais-tu ?
2. Wami usomedzaJ'enseigne
3. Wami uhimbaJe chante
4. Waye upihaElle fait la cuisine
5. Wasi ununua tsohole kula sukuNous achetons du riz tous les jours
6. Waye uhiriwa AliIl s'appelle Ali
7. Watru ulala ukuLes gens dorment la nuit
8. Nyombe ula ɗavuLe bœuf mange de l'herbe
9. Nyoha uriya moroLe serpent craint le feu
10. Wawo uriya ukuIls / elles ont peur de la nuit
11. Watru mama uv̄endza ulaguaLes femmes aiment bavarder
12. Wawe kuonoTu ne vois pas
13. Mama kapihiMaman ne fait pas la cuisine
14. Kali, kano, kalalaIl ne mange pas, il ne boit pas, il ne dort pas
15. TsijiJe ne sais pas
16. Wasi kariv̄endza ulimaNous n'aimons pas cultiver
      (Wasi kariv̄endzolima) 



VOCABULAIRE


Uheya
monter
Uriya
craindre, avoir peur de
Uhimba
chanter
Usomedza
enseigner
Uhiriwa
s'appeler
Utoa
retirer, enlever
Uhoa
se laver
Utosha
suffire, être suffisant
Ukuɓali
être d'accord
Utsahua
choisir
Ulima
cultiver
Uv̄ulikia
écouter, obéir


EXERCICES

EXERCICE 1 : Traduisez en shimaore, au présent habituel :

J'apprends,   vous apprenez,   elle balaye,   elle fait la cuisine,   elles lavent le linge, j'essuie la vaisselle,   ils cultivent,   il enlève,   je choisis,   vous écoutez,   ils sont d'accord, je m'appelle,   tu cultives,     tu parles,    il paye,     ils vendent,     ils jouent,   elle dort,  nous échangeons,   nous craignons.
Je ne lis pas,   je ne prends pas,   il ne fait pas,   il ne s'arrête pas,   il ne laisse pas,   je ne bavarde pas,  ils ne jouent pas,   elles ne demandent pas,   tu ne balayes pas,   je ne repasse pas,    ils n'écoutent pas,   nous ne choisissons pas,   il ne suffit pas,   tu ne chantes pas,  il n'est pas d'accord,   il ne se lave pas,   tu ne t'appelles pas,   ils ne craignent pas,    ils ne montent pas,    vous ne cultivez pas.
L'homme ne travaille pas,   les pêcheurs ne cultivent pas,   il ne cultive pas de manioc,  les jeunes ne sont pas d'accord,   je mange du poisson tous les jours,   le bœuf mange de l'herbe,   il s'appelle Mohamed,   les élèves aiment bavarder,   les femmes lavent le linge à la rivière,    vous craignez le feu, les hommes coupent les arbres,   vous cultivez du manioc, l'enfant n'aime pas laver la vaisselle,   les filles aiment chanter,    elle ne s'appelle pas Fatima.


EXERCICE 2 : Traduisez en français :


Wawe ufanya hazi trini ?
Wami ufanya hazi malavuni.
Wasi ukuɓali.
Nyombe uv̄endzonwa (uv̄endza unwa).
Mwanamtsa uvangua zisahani.
Wanatsa uãngadza muraha.
Watru ɓaɓa ukariɓisa wadjeni.
Waye uv̄endza uhimba.
Wami ununua tsohole kula suku.
Fundi usomedza likoli.




Chapitre précédentChapitre suivantTable des matières | WAMI | USOMA | je lis | WAWE | USOMA | tu lis | WAYE | USOMA | il /elle lit | WASI | USOMA | nous lisons | WANYU | USOMA | vous lisez | WAWO | USOMA | ils / elles lisent | WAMI | TSISOMO | je ne lis pas | WAWE | KUSOMO | tu ne lis pas | WAYE | KASOMO | il /elle ne lit pas | WASI | KARISOMO | nous ne lisons pas | WANYU | KAMUSOMO | vous ne lisez pas | WAWO | KAWASOMO | ils / elles ne lisent pas | 1. Wawe ufanya hazi trini ? | Quel travail fais-tu ? | 2. Wami usomedza | J'enseigne | 3. Wami uhimba | Je chante | 4. Waye upiha | Elle fait la cuisine | 5. Wasi ununua tsohole kula suku | Nous achetons du riz tous les jours | 6. Waye uhiriwa Ali | Il s'appelle Ali | 7. Watru ulala uku | Les gens dorment la nuit | 8. Nyombe ula ɗavu | Le bœuf mange de l'herbe | 9. Nyoha uriya moro | Le serpent craint le feu | 10. Wawo uriya uku | Ils / elles ont peur de la nuit | 11. Watru mama uv̄endza ulagua | Les femmes aiment bavarder | 12. Wawe kuono | Tu ne vois pas | 13. Mama kapihi | Maman ne fait pas la cuisine | 14. Kali, kano, kalala | Il ne mange pas, il ne boit pas, il ne dort pas | 15. Tsiji | Je ne sais pas | 16. Wasi kariv̄endza ulima | Nous n'aimons pas cultiver | (Wasi kariv̄endzolima) |  | Uheya | monter | Uriya | craindre, avoir peur de | Uhimba | chanter | Usomedza | enseigner | Uhiriwa | s'appeler | Utoa | retirer, enlever | Uhoa | se laver | Utosha | suffire, être suffisant | Ukuɓali | être d'accord | Utsahua | choisir | Ulima | cultiver | Uv̄ulikia | écouter, obéir | Chapitre précédent | Chapitre suivant | Table des matières
WAMI | USOMA | je lis
WAWE | USOMA | tu lis
WAYE | USOMA | il /elle lit
WASI | USOMA | nous lisons
WANYU | USOMA | vous lisez
WAWO | USOMA | ils / elles lisent
WAMI | TSISOMO | je ne lis pas
WAWE | KUSOMO | tu ne lis pas
WAYE | KASOMO | il /elle ne lit pas
WASI | KARISOMO | nous ne lisons pas
WANYU | KAMUSOMO | vous ne lisez pas
WAWO | KAWASOMO | ils / elles ne lisent pas
1. Wawe ufanya hazi trini ? | Quel travail fais-tu ?
2. Wami usomedza | J'enseigne
3. Wami uhimba | Je chante
4. Waye upiha | Elle fait la cuisine
5. Wasi ununua tsohole kula suku | Nous achetons du riz tous les jours
6. Waye uhiriwa Ali | Il s'appelle Ali
7. Watru ulala uku | Les gens dorment la nuit
8. Nyombe ula ɗavu | Le bœuf mange de l'herbe
9. Nyoha uriya moro | Le serpent craint le feu
10. Wawo uriya uku | Ils / elles ont peur de la nuit
11. Watru mama uv̄endza ulagua | Les femmes aiment bavarder
12. Wawe kuono | Tu ne vois pas
13. Mama kapihi | Maman ne fait pas la cuisine
14. Kali, kano, kalala | Il ne mange pas, il ne boit pas, il ne dort pas
15. Tsiji | Je ne sais pas
16. Wasi kariv̄endza ulima | Nous n'aimons pas cultiver
(Wasi kariv̄endzolima) | 
Uheya | monter | Uriya | craindre, avoir peur de
Uhimba | chanter | Usomedza | enseigner
Uhiriwa | s'appeler | Utoa | retirer, enlever
Uhoa | se laver | Utosha | suffire, être suffisant
Ukuɓali | être d'accord | Utsahua | choisir
Ulima | cultiver | Uv̄ulikia | écouter, obéir
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 10,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 10.",
    content: `

Chapitre 11 - Les Adjectifs Accordables



En shimaore, l'adjectif se place toujours APRÈS le nom qu'il qualifie.



On distingue deux grandes catégories d'adjectifs :

Ceux qui prennent un préfixe de classe pour s'accorder avec le nom qu'ils qualifient.
Ceux qui restent invariables : ce sont pour la plupart des mots d'emprunt à l'arabe.



Nous commencerons par l'étude des adjectifs qui s'accordent.
Les préfixes d'accord des adjectifs sont identiques aux préfixes nominaux pour les classes 1/2, les classes
3/4 et la classe 6. Ils présentent des différences importantes aux autres classes.
Afin de faciliter leur mémorisation, nous avons choisi de diviser les adjectifs en 8 grands types, selon
leurs préfixes en classe 5 (genre MA-) et aux classes 7 + 9 / 8 + 10  (genres SHI-/ZI- et N-).
Nous présentons en même temps les formes d'usage les plus courants pour chaque adjectif.

 1. ADJECTIFS ACCORDABLES REGROUPÉS PAR TYPES : 








  Type 1
MU-/WA-     MU-/MI-     Ø-/MA-     Ø-/Ø-
 -ɓole
grand
muɓole, waɓole, miɓole, maɓole, ɓole
 
 -hodari
fort, intelligent
muhodari, wahodari
 
 -kutri
court
mukutri, wakutri, kutri
 
 -nono
sain
munono, wanono
 
 -shashi
peu, rare
washashi, shashi
 
 -titi
petit
mutiti, watiti, mititi, matiti, titi
 
 -tronga
gros, gras
mutronga, watronga, tronga
 
 -tsala
mince
mutsala, watsala, tsala
 
 
 -kali
fort, sévère
muhali, wahali, kali
K -> voy -H
 -kavu
sec
mahavu, kavu
K -> voy -H
 -kuu
grand, âgé
muhuu, wahuu, kuu
K -> voy -H
 
 -trahafu
propre
murahafu, warahafu, mirahafu, trahafu
Tr -> voy -R
 -trembwavu
mou, tendre
murembwavu, trembwavu
Tr -> voy -R
 -trupu
vide, pur
marupu, trupu
Tr -> voy -R









  Type 2
MU-/WA-     MU-/MI-     Ø-/MA-     M-/M-
 -pana
large
muv̄ana, pana, mav̄ana, mpana
P -> voy -v̄
 -pia
neuf, nouveau
muv̄ia, miv̄ia, pia, mav̄ia, mpia
P -> voy -v̄









  Type 3
MU-/WA-     MU-/MI-     DZI-/MA-     NDZ-/NDZ-
(a) NDZA-
 -ambamba
mince, étroit
mwambamba, wambamba, ndzambamba
 
 -angavu
dur
mwangavu, dzangavu, mangavu, ndzangavu
 -angu
léger, facile
mwangu, dzangu, ndzangu/nyangu
 
(b) NDZI-
 -djeni
étranger
mudjeni, wadjeni, dzidjeni, ndzidjeni
 
 -ɗu
noir
muɗu, waɗu, miɗu, dziɗu, ndziɗu
 
 -she
femelle
mushe, washe, dzishe, ndzishe
 
 -waɗe
malade
mwaɗe, dziwaɗe, ndziwaɗe
 
(c) NDZU-
 -kundru
rouge
mukundru, dzukundru, ndzukundru
 
 -zuri
beau, joli, bon
muzuri, wazuri, dzuzuri, ndzuzuri
 









  Type 4
MU-/WA-     MU-/MI-      (ɗ)-/MA-     N-/N-
 -dzima
entier
mudzima, dzima, ndzima
 
 -dziro
lourd, difficile
mudziro, dziro, ndziro
 
 -undra
long, profond
mundra, ɗundra, nundra
 









  Type 5
MU-/WA-     MU-/MI-     ɗ-/MA-     NDR-/NDR-
 -le
long
mule, ɗile, male, ndrile
 
 -ume
mâle
mume, wame, ɗume, ndrume
 









  Type 6
MU-/WA-     MU-/MI-     DJI-/MA-     NDJ-/NDJ-
 -ema
bon, gentil
mwema, wema, djema, mema, ndjema
 
 -eu
blanc
mweu, weu, djeu, meu, ndjeu
 









  Type 7
MU-/WA-      MU-/MI-     ɓ-/MA-     MB-/MB-
 -i
mauvais
mui, wai, mii, ɓi, mai, mbi
 
 -itsi
vert, non mûr
muitsi, ɓitsi, maitsi, mbitsi
 
 -ovu
mal, mauvais
muovu, ɓovu, maovu, mbovu
 









  Type 8
 /WA-     MW-/M-         /MA-         /NY-
 -engi
nombreux
wengi, mwengi, mengi, nyengi
 


 2. QUELQUES EXEMPLES D'EMPLOI : 








Mwana mutiti
un petit enfant
Wana watiti
des petits enfants
Mutru muzuri
une belle personne
Watru wazuri
des belles personnes
Mutru mwaɗe
une personne malade
Watru wa(w)aɗe
des personnes malades
Mwaha mwema
une bonne année
Maha mema
des bonnes années
Mwiri muɓole
un grand arbre
Miri miɓole
des grands arbres
Gari pia
une nouvelle voiture
Magari mav̄ia
des nouvelles voitures
Shiri ndzukundru
une chaise rouge
Ziri ndzukundru
des chaises rouges
Inguo ndjeu
le vêtement blanc
Zinguo njeu
les vêtements blancs
Manga kali
une mangue acide
Zimanga kali
les mangues acides


 3. UN ADJECTIF / PRONOM PARTICULIER : 

 ANGINA = un autre, une autre, d'autres 

Ce mot, à la fois adjectif et pronom, utilise les mêmes préfixes d'accord de classe que les adjectifs possessifs et que le connectif  -A. (Voir : Chapitre 29.)








Mutru wangina
une autre personne
Watru wangina
d'autres personnes
Muhono wangina
une autre main
Mihono yangina
d'autres mains
Gari langina
une autre voiture
Magari yangina
d'autres voitures
Shiri yangina
une autre chaise
Ziri zangina
d'autres chaises
Nguo yangina
un autre vêtement
Nguo zangina
d'autres vêtements


EXEMPLES : 






1. Mama asununua mukoɓa wangina.
Maman achète un autre sac.
2. Fanya hazi ha namna yangina !
Travaille d'une autre façon.
3. Ritsowonana suku yangina tsena.
Nous nous reverrons un autre jour.
4. Waye apara gari langina.
Il a une autre voiture.
5. Risutsaha mihare, muhogo,
Nous voulons des gâteaux, du manioc, etc..
    na zangina na zangina...
 


VOCABULAIRE


Mubushi, wa-
un Malgache
Mulamo, wa-
un gourmand
Mudjanja, wa-
un malin
Mulevi, wa-
un ivrogne
Mudzade, wa
une parturiente
Mutoro, wa-
un fuyard, sauvage
Muhimbizi, wa-
un chanteur
Mutrazi, wa-
enfant qui fait l'école
buissonnière
Mukaidi, wa-
un têtu
Mutrume, wa-
un envoyé de Dieu
Mulaguzi, wa-
un bavard
Muzinzi, wa-
un dragueur


EXERCICES

EXERCICE 1 : Traduisez en shimaore :


Grand,   gros,   petit,   fort,   mince,   lourd,   léger,   beau,   nouveau,   noir,   bon,   blanc,  profond,  étranger,   mauvais,   sévère,   tendre,   large,   court,   malade.
Un petit enfant, des petits enfants, une grande personne, des mains larges, des petites jambes, une rivière propre, une grosse femme,   un homme étranger, une belle fille, une nouvelle année, un
arbre malade, une grande montagne, des rivières larges, un gros sac, des nouveaux projets, une lumière blanche, des sacs lourds, un long voyage, quelques arbres, de nombreux amis.


EXERCICE 2 : Traduisez en français :


Muɓole, mutiti, mutsala, mutronga, murahafu, mudziro, ndrume,   ndziro, ndzima, ndzidjeni, muwaɗe, mushe, ndzambamba, mwema,   ndjema, mbovu, mbitsi, mpia, mui, ndrile, ndzuzuri, muɗu, munono,   mwangavu, muhali.
Mutru mushe mutiti, muro murahafu, miro miv̄ana, mwili mutronga, mwana muhodari, muhono muɓole, mukoɓa mudziro, mushia mule, ziri ndzukundru, mwesi mweu, mupango muv̄ia, minara miɓole, wana wai, mushe mwema, watru wema, mwanamtsa mwambamba, mumrima muɗu, mukoɓa mukundru, magari mengi, mihare mengi.


EXERCICE 3 : Mettez les énoncés suivants au pluriel :


Mwana mutiti, mutru muɓole, mwiri mukundru, inguo ndjeu,   gari pia, mukoɓa mudziro, shiri titi, mwaraɓu mweu, fundi mbovu, mwana munono, mulango muɗu, mulango mukundru, mutru mushe muhali, mufalme muɓole, mnyawe muv̄ia, mwesi muɗu,  musafara mundra, mwana muovu, mwananya muzuri, gari titi, mulima muɗu, mumrima muɓole, mwaha mwema, mutru-ɓaɓa muhali, muwa muzuri.



Chapitre précédentChapitre suivantTable des matières |  | En shimaore, l'adjectif se place toujours APRÈS le nom qu'il qualifie. |  | On distingue deux grandes catégories d'adjectifs :

Ceux qui prennent un préfixe de classe pour s'accorder avec le nom qu'ils qualifient.
Ceux qui restent invariables : ce sont pour la plupart des mots d'emprunt à l'arabe. | Type 1 | MU-/WA-     MU-/MI-     Ø-/MA-     Ø-/Ø- | -ɓole | grand | muɓole, waɓole, miɓole, maɓole, ɓole |  | -hodari | fort, intelligent | muhodari, wahodari |  | -kutri | court | mukutri, wakutri, kutri |  | -nono | sain | munono, wanono |  | -shashi | peu, rare | washashi, shashi |  | -titi | petit | mutiti, watiti, mititi, matiti, titi |  | -tronga | gros, gras | mutronga, watronga, tronga |  | -tsala | mince | mutsala, watsala, tsala |  |  | -kali | fort, sévère | muhali, wahali, kali | K -> voy -H | -kavu | sec | mahavu, kavu | K -> voy -H | -kuu | grand, âgé | muhuu, wahuu, kuu | K -> voy -H |  | -trahafu | propre | murahafu, warahafu, mirahafu, trahafu | Tr -> voy -R | -trembwavu | mou, tendre | murembwavu, trembwavu | Tr -> voy -R | -trupu | vide, pur | marupu, trupu | Tr -> voy -R | Type 2 | MU-/WA-     MU-/MI-     Ø-/MA-     M-/M- | -pana | large | muv̄ana, pana, mav̄ana, mpana | P -> voy -v̄ | -pia | neuf, nouveau | muv̄ia, miv̄ia, pia, mav̄ia, mpia | P -> voy -v̄ | Type 3 | MU-/WA-     MU-/MI-     DZI-/MA-     NDZ-/NDZ- | (a) NDZA- | -ambamba | mince, étroit | mwambamba, wambamba, ndzambamba |  | -angavu | dur | mwangavu, dzangavu, mangavu, ndzangavu | -angu | léger, facile | mwangu, dzangu, ndzangu/nyangu |  | (b) NDZI- | -djeni | étranger | mudjeni, wadjeni, dzidjeni, ndzidjeni |  | -ɗu | noir | muɗu, waɗu, miɗu, dziɗu, ndziɗu |  | -she | femelle | mushe, washe, dzishe, ndzishe |  | -waɗe | malade | mwaɗe, dziwaɗe, ndziwaɗe |  | (c) NDZU- | -kundru | rouge | mukundru, dzukundru, ndzukundru |  | -zuri | beau, joli, bon | muzuri, wazuri, dzuzuri, ndzuzuri |  | Type 4 | MU-/WA-     MU-/MI-      (ɗ)-/MA-     N-/N- | -dzima | entier | mudzima, dzima, ndzima |  | -dziro | lourd, difficile | mudziro, dziro, ndziro |  | -undra | long, profond | mundra, ɗundra, nundra |  | Type 5 | MU-/WA-     MU-/MI-     ɗ-/MA-     NDR-/NDR- | -le | long | mule, ɗile, male, ndrile |  | -ume | mâle | mume, wame, ɗume, ndrume |  | Type 6 | MU-/WA-     MU-/MI-     DJI-/MA-     NDJ-/NDJ- | -ema | bon, gentil | mwema, wema, djema, mema, ndjema |  | -eu | blanc | mweu, weu, djeu, meu, ndjeu |  | Type 7 | MU-/WA-      MU-/MI-     ɓ-/MA-     MB-/MB- | -i | mauvais | mui, wai, mii, ɓi, mai, mbi |  | -itsi | vert, non mûr | muitsi, ɓitsi, maitsi, mbitsi |  | -ovu | mal, mauvais | muovu, ɓovu, maovu, mbovu |  | Type 8 | /WA-     MW-/M-         /MA-         /NY- | -engi | nombreux | wengi, mwengi, mengi, nyengi |  | Mwana mutiti | un petit enfant | Wana watiti | des petits enfants | Mutru muzuri | une belle personne | Watru wazuri | des belles personnes | Mutru mwaɗe | une personne malade | Watru wa(w)aɗe | des personnes malades | Mwaha mwema | une bonne année | Maha mema | des bonnes années | Mwiri muɓole | un grand arbre | Miri miɓole | des grands arbres | Gari pia | une nouvelle voiture | Magari mav̄ia | des nouvelles voitures | Shiri ndzukundru | une chaise rouge | Ziri ndzukundru | des chaises rouges | Inguo ndjeu | le vêtement blanc | Zinguo njeu | les vêtements blancs | Manga kali | une mangue acide | Zimanga kali | les mangues acides | Mutru wangina | une autre personne | Watru wangina | d'autres personnes | Muhono wangina | une autre main | Mihono yangina | d'autres mains | Gari langina | une autre voiture | Magari yangina | d'autres voitures | Shiri yangina | une autre chaise | Ziri zangina | d'autres chaises | Nguo yangina | un autre vêtement | Nguo zangina | d'autres vêtements | 1. Mama asununua mukoɓa wangina. | Maman achète un autre sac. | 2. Fanya hazi ha namna yangina ! | Travaille d'une autre façon. | 3. Ritsowonana suku yangina tsena. | Nous nous reverrons un autre jour. | 4. Waye apara gari langina. | Il a une autre voiture. | 5. Risutsaha mihare, muhogo, | Nous voulons des gâteaux, du manioc, etc.. | na zangina na zangina... |  | Mubushi, wa- | un Malgache | Mulamo, wa- | un gourmand | Mudjanja, wa- | un malin | Mulevi, wa- | un ivrogne | Mudzade, wa | une parturiente | Mutoro, wa- | un fuyard, sauvage | Muhimbizi, wa- | un chanteur | Mutrazi, wa- | enfant qui fait l'école
buissonnière | Mukaidi, wa- | un têtu | Mutrume, wa- | un envoyé de Dieu | Mulaguzi, wa- | un bavard | Muzinzi, wa- | un dragueur | Chapitre précédent | Chapitre suivant | Table des matières
 | En shimaore, l'adjectif se place toujours APRÈS le nom qu'il qualifie.
 | On distingue deux grandes catégories d'adjectifs :

Ceux qui prennent un préfixe de classe pour s'accorder avec le nom qu'ils qualifient.
Ceux qui restent invariables : ce sont pour la plupart des mots d'emprunt à l'arabe.
Type 1 | MU-/WA-     MU-/MI-     Ø-/MA-     Ø-/Ø-
-ɓole | grand | muɓole, waɓole, miɓole, maɓole, ɓole | 
-hodari | fort, intelligent | muhodari, wahodari | 
-kutri | court | mukutri, wakutri, kutri | 
-nono | sain | munono, wanono | 
-shashi | peu, rare | washashi, shashi | 
-titi | petit | mutiti, watiti, mititi, matiti, titi | 
-tronga | gros, gras | mutronga, watronga, tronga | 
-tsala | mince | mutsala, watsala, tsala | 

-kali | fort, sévère | muhali, wahali, kali | K -> voy -H
-kavu | sec | mahavu, kavu | K -> voy -H
-kuu | grand, âgé | muhuu, wahuu, kuu | K -> voy -H

-trahafu | propre | murahafu, warahafu, mirahafu, trahafu | Tr -> voy -R
-trembwavu | mou, tendre | murembwavu, trembwavu | Tr -> voy -R
-trupu | vide, pur | marupu, trupu | Tr -> voy -R
Type 2 | MU-/WA-     MU-/MI-     Ø-/MA-     M-/M-
-pana | large | muv̄ana, pana, mav̄ana, mpana | P -> voy -v̄
-pia | neuf, nouveau | muv̄ia, miv̄ia, pia, mav̄ia, mpia | P -> voy -v̄
Type 3 | MU-/WA-     MU-/MI-     DZI-/MA-     NDZ-/NDZ-
(a) NDZA-
-ambamba | mince, étroit | mwambamba, wambamba, ndzambamba | 
-angavu | dur | mwangavu, dzangavu, mangavu, ndzangavu
-angu | léger, facile | mwangu, dzangu, ndzangu/nyangu | 
(b) NDZI-
-djeni | étranger | mudjeni, wadjeni, dzidjeni, ndzidjeni | 
-ɗu | noir | muɗu, waɗu, miɗu, dziɗu, ndziɗu | 
-she | femelle | mushe, washe, dzishe, ndzishe | 
-waɗe | malade | mwaɗe, dziwaɗe, ndziwaɗe | 
(c) NDZU-
-kundru | rouge | mukundru, dzukundru, ndzukundru | 
-zuri | beau, joli, bon | muzuri, wazuri, dzuzuri, ndzuzuri | 
Type 4 | MU-/WA-     MU-/MI-      (ɗ)-/MA-     N-/N-
-dzima | entier | mudzima, dzima, ndzima | 
-dziro | lourd, difficile | mudziro, dziro, ndziro | 
-undra | long, profond | mundra, ɗundra, nundra | 
Type 5 | MU-/WA-     MU-/MI-     ɗ-/MA-     NDR-/NDR-
-le | long | mule, ɗile, male, ndrile | 
-ume | mâle | mume, wame, ɗume, ndrume | 
Type 6 | MU-/WA-     MU-/MI-     DJI-/MA-     NDJ-/NDJ-
-ema | bon, gentil | mwema, wema, djema, mema, ndjema | 
-eu | blanc | mweu, weu, djeu, meu, ndjeu | 
Type 7 | MU-/WA-      MU-/MI-     ɓ-/MA-     MB-/MB-
-i | mauvais | mui, wai, mii, ɓi, mai, mbi | 
-itsi | vert, non mûr | muitsi, ɓitsi, maitsi, mbitsi | 
-ovu | mal, mauvais | muovu, ɓovu, maovu, mbovu | 
Type 8 | /WA-     MW-/M-         /MA-         /NY-
-engi | nombreux | wengi, mwengi, mengi, nyengi | 
Mwana mutiti | un petit enfant | Wana watiti | des petits enfants
Mutru muzuri | une belle personne | Watru wazuri | des belles personnes
Mutru mwaɗe | une personne malade | Watru wa(w)aɗe | des personnes malades
Mwaha mwema | une bonne année | Maha mema | des bonnes années
Mwiri muɓole | un grand arbre | Miri miɓole | des grands arbres
Gari pia | une nouvelle voiture | Magari mav̄ia | des nouvelles voitures
Shiri ndzukundru | une chaise rouge | Ziri ndzukundru | des chaises rouges
Inguo ndjeu | le vêtement blanc | Zinguo njeu | les vêtements blancs
Manga kali | une mangue acide | Zimanga kali | les mangues acides
Mutru wangina | une autre personne | Watru wangina | d'autres personnes
Muhono wangina | une autre main | Mihono yangina | d'autres mains
Gari langina | une autre voiture | Magari yangina | d'autres voitures
Shiri yangina | une autre chaise | Ziri zangina | d'autres chaises
Nguo yangina | un autre vêtement | Nguo zangina | d'autres vêtements
1. Mama asununua mukoɓa wangina. | Maman achète un autre sac.
2. Fanya hazi ha namna yangina ! | Travaille d'une autre façon.
3. Ritsowonana suku yangina tsena. | Nous nous reverrons un autre jour.
4. Waye apara gari langina. | Il a une autre voiture.
5. Risutsaha mihare, muhogo, | Nous voulons des gâteaux, du manioc, etc..
na zangina na zangina... | 
Mubushi, wa- | un Malgache | Mulamo, wa- | un gourmand
Mudjanja, wa- | un malin | Mulevi, wa- | un ivrogne
Mudzade, wa | une parturiente | Mutoro, wa- | un fuyard, sauvage
Muhimbizi, wa- | un chanteur | Mutrazi, wa- | enfant qui fait l'école
buissonnière
Mukaidi, wa- | un têtu | Mutrume, wa- | un envoyé de Dieu
Mulaguzi, wa- | un bavard | Muzinzi, wa- | un dragueur
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 11,
    title: "Leçon 11",
    description: "Contenu du chapitre 11.",
    content: `

Chapitre 12 - Les Adjectifs Invariables

Les adjectifs invariables sont pour la plupart empruntés à l'arabe, ou plus rarement au français. Comme les adjectifs qui s'accordent, ils se placent toujours APRÈS le nom. Certains peuvent être à la fois nom et adjectif. C'est le cas de maskini = pauvre et de tadjiri (ma-) = riche(s).

 1.  ADJECTIFS INVARIABLES LES PLUS COURANTS : 








ADJECTIF
TRADUCTION
ADJECTIF
TRADUCTION
Bile
bleu
Laini
lisse, doux
Ɓombo
délabré, usé
Maskini
pauvre
Ɓora / Ɓorwa
meilleur
Muhimu
important
Ɓure
gratuit
Piya
tous, toutes
Dzindzano
jaune (safran)
Rahisi
bon marché, pas cher
Fenyã
fainéant
Rasmi
officiel
Halali
permis, légitime, pur
Sawa
pareil, égal, identique
Hali
cher
Shinamna
mal, bizarre
Haramu
interdit, illicite, illégitime
Shwari
calme
Hashiri
vigilant
Tadjiri (ma-)
riche
Hayi
vivant
Tayari
prêt
Kadha
quelconque
Veri
vert
Kamili
complet, entier
Wadzi
nu, ouvert
Kweli
vrai
Weke
seul


 2.  QUELQUES EXEMPLES D'EMPLOI : 


Mutru tadjiri
une riche personne
Watru matadjiri
des riches personnes
Mwana maskini
un enfant pauvre
Wana maskini
des enfants pauvres
Mukoɓa rahisi
un sac bon marché
Mikoɓa rahisi
des sacs bon marché
Gari ɓombo
une voiture usée
Magari ɓombo
des voitures usées
Shitru muhimu
une chose importante
Zitru muhimu
des choses importantes


EXERCICES

EXERCICE 1 : Traduisez en shimaore :


Un riche résident,   un enfant pauvre,   des riches voyageurs,   une voiture chère,   un arbre vert,  un voyage important,   une porte ouverte,   un gamin bizarre,    des enfants illégitimes,   un voyage officiel,  des enfants bizarres,   une voiture en mauvais état, un enfant seul, tous les gens, des gâteaux bon marché, un plan important,    une voiture gratuite,    un bébé vivant,  des choses importantes,   une chose quelconque.


EXERCICE 2 : Traduisez en français :


Hali, tadjiri, maskini, sawa, ɓombo, dzindzano, bile, shinamna,  haramu, tayari, wadzi, halali, shwari, weke, ɓure, kweli, muhimu,  laini, veri, rahisi.
Muro bile, mwiri veri, mulango wadzi, shitru mbovu, mwaha mwema, magari mema, magari mengi, mihare mengi, wana maskini, wenyeji matadjiri, mwana haramu, mupira muv̄ia,  mwana shinamna, muhare ɓure,  wenyeji piya,  shitru muhimu,  mikoɓa rahisi, moro mukundru, mutsanga murahafu, shitru laini.



Chapitre précédentChapitre suivantTable des matières | ADJECTIF | TRADUCTION | ADJECTIF | TRADUCTION | Bile | bleu | Laini | lisse, doux | Ɓombo | délabré, usé | Maskini | pauvre | Ɓora / Ɓorwa | meilleur | Muhimu | important | Ɓure | gratuit | Piya | tous, toutes | Dzindzano | jaune (safran) | Rahisi | bon marché, pas cher | Fenyã | fainéant | Rasmi | officiel | Halali | permis, légitime, pur | Sawa | pareil, égal, identique | Hali | cher | Shinamna | mal, bizarre | Haramu | interdit, illicite, illégitime | Shwari | calme | Hashiri | vigilant | Tadjiri (ma-) | riche | Hayi | vivant | Tayari | prêt | Kadha | quelconque | Veri | vert | Kamili | complet, entier | Wadzi | nu, ouvert | Kweli | vrai | Weke | seul | Mutru tadjiri | une riche personne | Watru matadjiri | des riches personnes | Mwana maskini | un enfant pauvre | Wana maskini | des enfants pauvres | Mukoɓa rahisi | un sac bon marché | Mikoɓa rahisi | des sacs bon marché | Gari ɓombo | une voiture usée | Magari ɓombo | des voitures usées | Shitru muhimu | une chose importante | Zitru muhimu | des choses importantes | Chapitre précédent | Chapitre suivant | Table des matières
ADJECTIF | TRADUCTION | ADJECTIF | TRADUCTION
Bile | bleu | Laini | lisse, doux
Ɓombo | délabré, usé | Maskini | pauvre
Ɓora / Ɓorwa | meilleur | Muhimu | important
Ɓure | gratuit | Piya | tous, toutes
Dzindzano | jaune (safran) | Rahisi | bon marché, pas cher
Fenyã | fainéant | Rasmi | officiel
Halali | permis, légitime, pur | Sawa | pareil, égal, identique
Hali | cher | Shinamna | mal, bizarre
Haramu | interdit, illicite, illégitime | Shwari | calme
Hashiri | vigilant | Tadjiri (ma-) | riche
Hayi | vivant | Tayari | prêt
Kadha | quelconque | Veri | vert
Kamili | complet, entier | Wadzi | nu, ouvert
Kweli | vrai | Weke | seul
Mutru tadjiri | une riche personne | Watru matadjiri | des riches personnes
Mwana maskini | un enfant pauvre | Wana maskini | des enfants pauvres
Mukoɓa rahisi | un sac bon marché | Mikoɓa rahisi | des sacs bon marché
Gari ɓombo | une voiture usée | Magari ɓombo | des voitures usées
Shitru muhimu | une chose importante | Zitru muhimu | des choses importantes
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 12,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 12.",
    content: `

Chapitre 13 - Les Noms : Le Genre MA-

Le genre MA- (Classes 5 / 6) regroupe des termes de parenté, des noms d'objets, d'animaux, de parties du corps humain, de fruits, etc..
Ce sont souvent des noms d'emprunt, particulièrement d'origine arabe.
Nous avons préféré nommer ce genre "MA-", plutôt que de le nommer DZI-/MA-, car seul un très petit nombre de noms de la classe 5 prennent le préfixe singulier DZI-.
La majorité des noms de la classe 5 n'ont pas de préfixe, aussi les avons-nous regroupés sous le label
préfixe "Ø-".


Cl 5 (Singulier) :
préfixe Ø-
GARI
= une voiture, la voiture
 préfixe DZI-
DZINYO
= une dent, la dent
Cl 6 (Pluriel) :
préfixe MA-
MAGARI
= des voitures, les voitures
 
MANYO
= des dents, les dents


 1. QUELQUES NOMS DU GENRE MA- (Classes 5 / 6) : 


Nom
Traduction
Nom
Traduction
Ɓarua, (ma-)
une lettre, des --
Gari, (ma-)
une voiture, des --
Ɓawa, (ma-)
une aile, des --
Godoro, (ma-)
un matelas, des --
Ɓega, (ma-)
une épaule, des --
Goshi, (ma-)
une chaussure, des --
Ɓele, (ma-)
un sein, des --
Guni, (ma-)
un sac de jute, des --
Ɓuledi, (ma-)
une petite amie, des --
Jwayi, (ma-)
un œuf, des --
Djini, (ma-)
un djinn, des --
Karatasi, (ma-)
un papier, une carte, des --
Djirani, (ma-)
un voisin, des --
Kio, (ma-)
une oreille, des --
Duka, (ma-)
une boutique, des --
Shauri, (ma-)
un avis, des --
Fuko, (ma-)
une chambre, des --
Surwali, (ma-)
un pantalon, des --
Fulera, (ma-)
une fleur, des --
Tadjiri, (ma-)
un riche, des --


 2. NOMS A PRÉFIXE DZI- AU SINGULIER (Classes 5 / 6) : 


Nom
Traduction
Nom
Traduction
Dzia (CL 5)
le lait / un lac
Dzinyo, manyo
une dent, des --
Dziani Dzaha
le lac du volcan
Dzitso, matso
un œil, des yeux


 3. NOMS QUI N'EXISTENT QU'AU PLURIEL (Classe 6) : 


Nom
Traduction
Nom
Traduction
Madzi
les excréments
Marashi
un parfum
Maesha
la vie
Mashaka
les soucis, les malheurs
Maji
l'eau
Masiwa
un archipel
Maradhi
la maladie
Matra
l'huile


 4. NOMS À ALTERNANCE CONSONANTIQUE AU PLURIEL : 

  1. D -> L       Type :      Dago / Malago  


Singulier
Pluriel
Traduction
ɗaɓa
malaɓa
un sot, un idiot, des --
ɗago
malago
une ville, un village, une maison, des --
ɗalao
malalao
un remède, un médicament, des --
ɗandzi
malandzi
une mandarine, des --
ɗangadzo
malangadzo
un jeu, un match, des --
ɗavu
malavu
une herbe, des --
ɗomo
malomo
une lèvre, des --
ɗundri
manundri
un moustique, des --


  2. K -> H       Type :      Kaɓuri / Mahaɓuri  


Singulier
Pluriel
Traduction
kaa
mahaa
une braise, des --
kaɓuri
mahaɓuri
une tombe, des --
kafiri
mahafiri
un incroyant, des --
kara
mahara
un nid, des --
kofu
mahofu
une griffe, un ongle, des --
koko
mahoko ou makoko
une grand-mère, une veuve, des --
kosa
mahosa 
une faute, des --


  3. P -> V       Type :      Pare / Mav̄are  


Singulier
Pluriel
Traduction
paja
mav̄aja
une cuisse, des --
pare
mav̄are
une route, des --
peo
mav̄eo
un balai, des --
polisi
mav̄olisi
un policier, des --
puhu
mav̄uhu
une souris, un rat, des --
puruku
mav̄uruku
un porc, des --
puzi
mav̄uzi
un poil, une plume, des --
pwapwaya
mav̄wav̄waya
une papaye, des --
pwera
mav̄wera
une goyave, des --


  4. Tr -> R       Type :      Trundra / Marundra  


Singulier
Pluriel
Traduction
trango
marango
une citrouille, des --
trindri
marindri
un bananier, des --
trumbo
marumbo
un estomac, un intestin, des --
trundra
marundra
un fruit, une orange, des --


  5. Sh -> Z       Type :      Shefu / Mazefu  


Singulier
Pluriel
Traduction
Shahidi
mazahidi
un témoin, des --
Shefu
mazefu
un chef, des --
Shemedji
mazemedji
un beau-frère, une belle-sœur, des --
Shofera
mazofera
un chauffeur, des --


Voir aussi les listes de vocabulaire complémentaires :

Chapitre 17 (Animaux, fruits, légumes, etc..)
Chapitre 27 (Objets de la vie courante)
Chapitre 42 (Mots pluriels et divers)
Chapitre 50 (Mots pluriels et divers)
Chapitre 51 (Objets de la vie courante et divers)


 5. LE PRÉ-PRÉFIXE DÉFINI : 

Il se place devant le préfixe de classe du nom et fonctionne comme un article défini.

Cl 5 (Singulier) :

LI-   
GARI= une voiture
LIGARI
= la voiture
 
DZINYO
 = une dent
LIDZINYO
= la dent


Cl 6 (Pluriel) :

YA-   
MAGARI
= des voitures 
YAMAGARI
= les voitures
 
MANYO
= des dents
YAMANYO
= les dents


 6. ACCORDS DE CLASSE : 


Adjectif : (Voir : Chapitre 11.)


Classe 5 :
Gariɓole / titi / ɗile / pia / dzuzuri / djeu / ...
une
grande  /  petite  /  longue  /  neuve  /  bonne / blanche  / ...
voiture
 
Classe 6 :
Magarimaɓole / matiti / male / mav̄ia / mazuri / meu / ...
des
grandes  /  petites  /  longues  /  neuves  /  bonnes / blanches  / ...
voitures


Adjectifs possessifs :


Classe 5 :
Gari
langu / laho / lahe / latru / lanyu / lao
 
=
ma  /  ta  /  sa  / notre  /  votre  /  leur
voiture
 
Classe 6 :
Magari
yangu / yaho / yahe / yatru / yanyu / yao
 
=
mes   /   tes   /  ses    /   nos    /   vos     /  leurs
voitures



Démonstratif :


Classe 5 (Singulier) :Classe 6 (Pluriel) :
Gari
linu
= cette voiture-ci
Magari
yanu
= ces voitures-ci
lile
= cette voiture là-bas
yale
= ces voitures là-bas
lilo
= cette voiture-là
yayo
= ces voitures-là





VOCABULAIRE


Uangiha
écrire
Ushia
traverser
Uhasiɓu
compter
Usona
coudre
Uhoma
être en retard
Usuɓutu
oser
Ulemewa
être fatigué
Utayarisha
préparer
Ungia
entrer, pénétrer
Uvumua
se reposer
Ushanga
être étonné, inquiet
Uwaha
construire


EXERCICES

EXERCICE 1 : Traduisez en shimaore :


Une voiture, une lettre, un œuf, un avis, une petite amie, un papier,  une faute, un djinn, une fleur, un sein, un bananier, une route, une tombe, un remède, un balai, un porc, un lac, un œil, le lait, une dent.
Je veux des chaussures propres, je vois beaucoup d'autos en ville, il achète une nouvelle voiture, elle vend de l'huile à la boutique,  donne-moi un remède ! Lis les lettres ! Cuisine les ailes de poulet ! Regarde les jolis bananiers ! N'écoute pas les incroyants ! J'attends ma petite amie.


EXERCICE 2 : Traduisez en français :


Dzia, ɗago, kaɓuri, pare, guni, godoro, karatasi,   fuko, jwayi, kio, malalao, masurwali, mav̄eo, mav̄uhu,   marumbo, maji, marashi, mahafiri, madjirani, mahosa.
Magoshi yangu, madjirani yangu, ɓuledi wahe, shauri laho,   marindri maɗu, maji mazuri, makio maɓole, duka la wasafiri,   gari la ɓaɓa, Dziani Dzaha, malomo maɓole, gari langu,  malalao yahe, majwayi ya kuhu, maɓele ya mama, mwana mutiti asurema matso, renga makaratasi yaho ! Usifanye mahosa tsena !  Duktera asupua dzinyo langu dziwaɗe, mwanamtsa asudza majwayi mashashi.



Chapitre précédentChapitre suivantTable des matières | Cl 5 (Singulier) : | préfixe Ø- | GARI | = une voiture, la voiture |  | préfixe DZI- | DZINYO | = une dent, la dent | Cl 6 (Pluriel) : | préfixe MA- | MAGARI | = des voitures, les voitures |  | MANYO | = des dents, les dents | Nom | Traduction | Nom | Traduction | Ɓarua, (ma-) | une lettre, des -- | Gari, (ma-) | une voiture, des -- | Ɓawa, (ma-) | une aile, des -- | Godoro, (ma-) | un matelas, des -- | Ɓega, (ma-) | une épaule, des -- | Goshi, (ma-) | une chaussure, des -- | Ɓele, (ma-) | un sein, des -- | Guni, (ma-) | un sac de jute, des -- | Ɓuledi, (ma-) | une petite amie, des -- | Jwayi, (ma-) | un œuf, des -- | Djini, (ma-) | un djinn, des -- | Karatasi, (ma-) | un papier, une carte, des -- | Djirani, (ma-) | un voisin, des -- | Kio, (ma-) | une oreille, des -- | Duka, (ma-) | une boutique, des -- | Shauri, (ma-) | un avis, des -- | Fuko, (ma-) | une chambre, des -- | Surwali, (ma-) | un pantalon, des -- | Fulera, (ma-) | une fleur, des -- | Tadjiri, (ma-) | un riche, des -- | Nom | Traduction | Nom | Traduction | Dzia (CL 5) | le lait / un lac | Dzinyo, manyo | une dent, des -- | Dziani Dzaha | le lac du volcan | Dzitso, matso | un œil, des yeux | Nom | Traduction | Nom | Traduction | Madzi | les excréments | Marashi | un parfum | Maesha | la vie | Mashaka | les soucis, les malheurs | Maji | l'eau | Masiwa | un archipel | Maradhi | la maladie | Matra | l'huile | Singulier | Pluriel | Traduction | ɗaɓa | malaɓa | un sot, un idiot, des -- | ɗago | malago | une ville, un village, une maison, des -- | ɗalao | malalao | un remède, un médicament, des -- | ɗandzi | malandzi | une mandarine, des -- | ɗangadzo | malangadzo | un jeu, un match, des -- | ɗavu | malavu | une herbe, des -- | ɗomo | malomo | une lèvre, des -- | ɗundri | manundri | un moustique, des -- | Singulier | Pluriel | Traduction | kaa | mahaa | une braise, des -- | kaɓuri | mahaɓuri | une tombe, des -- | kafiri | mahafiri | un incroyant, des -- | kara | mahara | un nid, des -- | kofu | mahofu | une griffe, un ongle, des -- | koko | mahoko ou makoko | une grand-mère, une veuve, des -- | kosa | mahosa | une faute, des -- | Singulier | Pluriel | Traduction | paja | mav̄aja | une cuisse, des -- | pare | mav̄are | une route, des -- | peo | mav̄eo | un balai, des -- | polisi | mav̄olisi | un policier, des -- | puhu | mav̄uhu | une souris, un rat, des -- | puruku | mav̄uruku | un porc, des -- | puzi | mav̄uzi | un poil, une plume, des -- | pwapwaya | mav̄wav̄waya | une papaye, des -- | pwera | mav̄wera | une goyave, des -- | Singulier | Pluriel | Traduction | trango | marango | une citrouille, des -- | trindri | marindri | un bananier, des -- | trumbo | marumbo | un estomac, un intestin, des -- | trundra | marundra | un fruit, une orange, des -- | Singulier | Pluriel | Traduction | Shahidi | mazahidi | un témoin, des -- | Shefu | mazefu | un chef, des -- | Shemedji | mazemedji | un beau-frère, une belle-sœur, des -- | Shofera | mazofera | un chauffeur, des -- | LI- | GARI | = une voiture | LIGARI | = la voiture |  | DZINYO | = une dent | LIDZINYO | = la dent | YA- | MAGARI | = des voitures | YAMAGARI | = les voitures |  | MANYO | = des dents | YAMANYO | = les dents | Classe 5 : | Gari | ɓole / titi / ɗile / pia / dzuzuri / djeu / ... | une | grande  /  petite  /  longue  /  neuve  /  bonne / blanche  / ... | voiture |  | Classe 6 : | Magari | maɓole / matiti / male / mav̄ia / mazuri / meu / ... | des | grandes  /  petites  /  longues  /  neuves  /  bonnes / blanches  / ... | voitures | Classe 5 : | Gari | langu / laho / lahe / latru / lanyu / lao |  | = | ma  /  ta  /  sa  / notre  /  votre  /  leur | voiture |  | Classe 6 : | Magari | yangu / yaho / yahe / yatru / yanyu / yao |  | = | mes   /   tes   /  ses    /   nos    /   vos     /  leurs | voitures | Classe 5 (Singulier) : | Classe 6 (Pluriel) : | Gari | linu | = cette voiture-ci | Magari | yanu | = ces voitures-ci | lile | = cette voiture là-bas | yale | = ces voitures là-bas | lilo | = cette voiture-là | yayo | = ces voitures-là | Uangiha | écrire | Ushia | traverser | Uhasiɓu | compter | Usona | coudre | Uhoma | être en retard | Usuɓutu | oser | Ulemewa | être fatigué | Utayarisha | préparer | Ungia | entrer, pénétrer | Uvumua | se reposer | Ushanga | être étonné, inquiet | Uwaha | construire | Chapitre précédent | Chapitre suivant | Table des matières
Cl 5 (Singulier) : | préfixe Ø- | GARI | = une voiture, la voiture
 | préfixe DZI- | DZINYO | = une dent, la dent
Cl 6 (Pluriel) : | préfixe MA- | MAGARI | = des voitures, les voitures
 | MANYO | = des dents, les dents
Nom | Traduction | Nom | Traduction
Ɓarua, (ma-) | une lettre, des -- | Gari, (ma-) | une voiture, des --
Ɓawa, (ma-) | une aile, des -- | Godoro, (ma-) | un matelas, des --
Ɓega, (ma-) | une épaule, des -- | Goshi, (ma-) | une chaussure, des --
Ɓele, (ma-) | un sein, des -- | Guni, (ma-) | un sac de jute, des --
Ɓuledi, (ma-) | une petite amie, des -- | Jwayi, (ma-) | un œuf, des --
Djini, (ma-) | un djinn, des -- | Karatasi, (ma-) | un papier, une carte, des --
Djirani, (ma-) | un voisin, des -- | Kio, (ma-) | une oreille, des --
Duka, (ma-) | une boutique, des -- | Shauri, (ma-) | un avis, des --
Fuko, (ma-) | une chambre, des -- | Surwali, (ma-) | un pantalon, des --
Fulera, (ma-) | une fleur, des -- | Tadjiri, (ma-) | un riche, des --
Nom | Traduction | Nom | Traduction
Dzia (CL 5) | le lait / un lac | Dzinyo, manyo | une dent, des --
Dziani Dzaha | le lac du volcan | Dzitso, matso | un œil, des yeux
Nom | Traduction | Nom | Traduction
Madzi | les excréments | Marashi | un parfum
Maesha | la vie | Mashaka | les soucis, les malheurs
Maji | l'eau | Masiwa | un archipel
Maradhi | la maladie | Matra | l'huile
Singulier | Pluriel | Traduction
ɗaɓa | malaɓa | un sot, un idiot, des --
ɗago | malago | une ville, un village, une maison, des --
ɗalao | malalao | un remède, un médicament, des --
ɗandzi | malandzi | une mandarine, des --
ɗangadzo | malangadzo | un jeu, un match, des --
ɗavu | malavu | une herbe, des --
ɗomo | malomo | une lèvre, des --
ɗundri | manundri | un moustique, des --
Singulier | Pluriel | Traduction
kaa | mahaa | une braise, des --
kaɓuri | mahaɓuri | une tombe, des --
kafiri | mahafiri | un incroyant, des --
kara | mahara | un nid, des --
kofu | mahofu | une griffe, un ongle, des --
koko | mahoko ou makoko | une grand-mère, une veuve, des --
kosa | mahosa | une faute, des --
Singulier | Pluriel | Traduction
paja | mav̄aja | une cuisse, des --
pare | mav̄are | une route, des --
peo | mav̄eo | un balai, des --
polisi | mav̄olisi | un policier, des --
puhu | mav̄uhu | une souris, un rat, des --
puruku | mav̄uruku | un porc, des --
puzi | mav̄uzi | un poil, une plume, des --
pwapwaya | mav̄wav̄waya | une papaye, des --
pwera | mav̄wera | une goyave, des --
Singulier | Pluriel | Traduction
trango | marango | une citrouille, des --
trindri | marindri | un bananier, des --
trumbo | marumbo | un estomac, un intestin, des --
trundra | marundra | un fruit, une orange, des --
Singulier | Pluriel | Traduction
Shahidi | mazahidi | un témoin, des --
Shefu | mazefu | un chef, des --
Shemedji | mazemedji | un beau-frère, une belle-sœur, des --
Shofera | mazofera | un chauffeur, des --
LI- | GARI | = une voiture | LIGARI | = la voiture
 | DZINYO | = une dent | LIDZINYO | = la dent
YA- | MAGARI | = des voitures | YAMAGARI | = les voitures
 | MANYO | = des dents | YAMANYO | = les dents
Classe 5 : | Gari | ɓole / titi / ɗile / pia / dzuzuri / djeu / ...
une | grande  /  petite  /  longue  /  neuve  /  bonne / blanche  / ... | voiture

Classe 6 : | Magari | maɓole / matiti / male / mav̄ia / mazuri / meu / ...
des | grandes  /  petites  /  longues  /  neuves  /  bonnes / blanches  / ... | voitures
Classe 5 : | Gari | langu / laho / lahe / latru / lanyu / lao | 
= | ma  /  ta  /  sa  / notre  /  votre  /  leur | voiture

Classe 6 : | Magari | yangu / yaho / yahe / yatru / yanyu / yao | 
= | mes   /   tes   /  ses    /   nos    /   vos     /  leurs | voitures
Classe 5 (Singulier) : | Classe 6 (Pluriel) :
Gari | linu | = cette voiture-ci | Magari | yanu | = ces voitures-ci
lile | = cette voiture là-bas | yale | = ces voitures là-bas
lilo | = cette voiture-là | yayo | = ces voitures-là
Uangiha | écrire | Ushia | traverser
Uhasiɓu | compter | Usona | coudre
Uhoma | être en retard | Usuɓutu | oser
Ulemewa | être fatigué | Utayarisha | préparer
Ungia | entrer, pénétrer | Uvumua | se reposer
Ushanga | être étonné, inquiet | Uwaha | construire
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 13,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 13.",
    content: `

Chapitre 14 - Les Verbes : L'Accompli

Quelques exemples : 

Kamali afungu mbuzi yahe
Kamal a attaché sa chèvre
Bakoko afu lavioni
Grand-père est mort en avion
Ali ali manga
Ali a mangé une mangue
Hafez kaketsi shirini
Hafez n'est pas assis sur la chaise
Fatima kaɓala mulango
Fatima n'a pas fermé la porte
Shamu kaja hatru
Chamou n'est pas venu chez moi


On utilise l'ACCOMPLI  pour parler des actions ponctuelles qui ont déjà eu lieu, ou pour décrire un état
(par exemple : il est assis, il est mort, etc..). C'est l'un des temps les plus employés en shimaore.

 1.  L'ACCOMPLI - FORME AFFIRMATIVE : 

Sa conjugaison est des plus simples car il n'y a pas d'infixe marqueur de temps : le préfixe sujet est directement suivi de la racine verbale :


 PRÉFIXE SUJET + RACINE VERBALE - VOYELLE 

MODÈLE :    UREMA = frapper







TSI-REME   
= tsireme
j'ai frappé
U-REME   

= ureme
tu as frappé
A-REME   
= areme
il / elle a frappé
RI-REME   
= rireme
nous avons frappé
MU-REME   
= mureme
vous avez frappé
WA-REME   
= wareme
ils / elles ont frappé


REMARQUE : 
A l'accompli, la voyelle finale de la racine verbale change, c'est-à-dire que la terminaison -A du verbe devient -E, -I, -O, -U, par harmonie vocalique avec la voyelle précédente.

Autres verbes : 


Uendra
aller
tsiendre
= je suis allé
aendre
= il est allé
Urenga
prendre
 tsirenge
= j'ai pris
arenge
= il a pris
Uliv̄a
payer
tsiliv̄i
= j'ai payé
aliv̄i
= il a payé
Upiha
cuisiner
tsipihi
= j'ai cuisiné
apihi
= il a cuisiné
Uola
pourrir
iolo
= il est pourri
ziolo
= ils sont pourris
Usoma
apprendre
tsisomo
= j'ai appris
asomo
= il a appris
Uɗunga
suivre
tsiɗungu
= j'ai suivi
aɗungu
= il a suivi
Uwula
tuer
tsiwulu
= j'ai tué
awulu
= il a tué


Cependant, les verbes de 3 syllabes et les verbes dont l'avant-dernière voyelle est -A- restent inchangés !

Ufanya
faire
tsifanya
= j'ai fait
afanya
= il a fait
Utsaha
vouloir
tsitsaha
= j'ai voulu
atsaha
= il a voulu
Urav̄iha
vomir
tsirav̄iha
= j'ai vomi
arav̄iha
= il a vomi
Urongoa
parler
tsirongoa
= j'ai parlé
arongoa
= il a parlé


EXCEPTIONS :    LES VERBES MONOSYLLABIQUES :


Ufa
mourir
tsifu
= je suis mort
afu
= il / elle est mort(e)
Uja
venir
tsija
= je suis venu
aja
= il / elle est venu(e)
Ulaa
venir de
tsila
= je viens de
ala
= il / elle vient de
Ula / Uɗya
manger
tsili
= j'ai mangé
ali
= il / elle a mangé
Unwa
boire
tsino
= j'ai bu
ano
= il / elle a bu
Uwa
tomber
tsiwu
= je suis tombé
awu
= il / elle est tombé(e)

Voir aussi : Liste des verbes à l'Accompli.

 2.  L'ACCOMPLI - FORME NÉGATIVE : 

 PRÉFIXE NÉGATIF + PRÉFIXE SUJET + A + RACINE VERBALE 

MODÈLE :    UREMA = frapper








TSI-A-REMA   
= tsarema
je n'ai pas frappé
KA-U-A-REMA   
= kwarema
tu n'as pas frappé
KA-A-A-REMA   
= karema
il / elle n'a pas frappé
KA-RI-A-REMA   
= kararema
nous n'avons pas frappé
KA-MU-A-REMA   
= kamwarema
vous n'avez pas frappé
KA-WA-A-REMA   
= kawarema
ils / elles n'ont pas frappé




A la forme négative, la voyelle finale du verbe reste inchangée.


Autres verbes : 


Uendra
aller
tsaendra
= je ne suis pas allé
Urenga
prendre
tsarenga
= je n'ai pas pris
Uliv̄a
payer
tsaliv̄a
= je n'ai pas payé
Upiha
cuisiner
tsapiha
= je n'ai pas cuisiné
Ula
manger
tsala
= je n'ai pas mangé
Unwa
boire
tsanwa
= je n'ai pas bu



VOCABULAIRE


Uɗunga
suivre
Usukuma
pousser (qq chose ou qq'un)
Ujadza
remplir
Utembeya
se promener
Ukiri
accepter, être possible
Utruliya
se calmer, être tranquille
Upashia
monter, s'embarquer
Uv̄idza
aider
Ushuka
descendre
Uv̄ima
mesurer, peser
Usimamia
se dépêcher, se hâter
Uvinga
apporter, emmener, porter


 POUR TRADUIRE "CHEZ" : 


Ha ɓaɓangu
chez mon père
Ha ɓaɓatru
chez notre père
Ha ɓaɓaho
chez ton père
Ha ɓaɓanyu
chez votre père
Ha ɓaɓahe
chez son père
Ha ɓaɓawo
chez leur père


EXERCICES

EXERCICE 1 : Traduisez en shimaore :


J'ai fait, il a fait, je suis monté, ils sont montés, il a rempli, tu es descendu, j'ai aidé, il a
poussé, nous avons emmené,   elle a pesé, il s'est calmé,   nous nous sommes promenés, tu t'es lavé, vous avez obéi, ils ont cultivé, ils ont été d'accord, j'ai enseigné, nous avons eu peur, j'ai choisi, vous avez chanté, je suis allé, tu es arrivé, tu as réussi, il est mort, il a bu, ils sont revenus, vous avez oublié, vous êtes venus, ils ont trouvé, j'ai mangé.
Je n'ai pas pris, je n'ai pas vu, je n'ai pas appris, tu n'as pas répondu, tu n'as pas voyagé, tu n'as pas apporté, tu n'as pas écouté, il n'est pas monté, elle n'a pas rempli, il n'a pas suivi, nous ne nous sommes pas dépêchés, nous n'avons pas choisi, nous n'avons pas bu, vous n'êtes pas venus, vous n'êtes pas restés, vous n'avez pas accepté, ils n'ont pas cultivé, ils n'ont pas apporté, ils n'ont pas mangé, ils n'ont pas fait.


EXERCICE 2 : Traduisez en français :



Watru ɓaɓa wafanya hazi malavuni.
Mamaɓole apihi shahula asuɓuhi.
Mwana mutiti avingi dzia ha mayahe.
Wanatsa kawaregeya ɗagoni.
Tsiendre Pamandze leo.
Muhamadi alola mutru-mushe muzuri.
Tsiono mahaɓuri malavuni.
Tsili majwayi mashashi.
Mwana zaza atruliya av̄asa.
Waɗungu pare la Momoju.
Zinyombe zili malavu mengi.
Mwana mutiti aheya mwirini.
Anunua tsohole dukani.
ɓaɓa muhali areme mwana mui.
Tsino dzia dzuzuri ɗagoni.




Chapitre précédentChapitre suivantTable des matières | Kamali afungu mbuzi yahe | Kamal a attaché sa chèvre | Bakoko afu lavioni | Grand-père est mort en avion | Ali ali manga | Ali a mangé une mangue | Hafez kaketsi shirini | Hafez n'est pas assis sur la chaise | Fatima kaɓala mulango | Fatima n'a pas fermé la porte | Shamu kaja hatru | Chamou n'est pas venu chez moi | TSI-REME | = tsireme | j'ai frappé | U-REME | = ureme | tu as frappé | A-REME | = areme | il / elle a frappé | RI-REME | = rireme | nous avons frappé | MU-REME | = mureme | vous avez frappé | WA-REME | = wareme | ils / elles ont frappé | Uendra | aller | tsiendre | = je suis allé | aendre | = il est allé | Urenga | prendre | tsirenge | = j'ai pris | arenge | = il a pris | Uliv̄a | payer | tsiliv̄i | = j'ai payé | aliv̄i | = il a payé | Upiha | cuisiner | tsipihi | = j'ai cuisiné | apihi | = il a cuisiné | Uola | pourrir | iolo | = il est pourri | ziolo | = ils sont pourris | Usoma | apprendre | tsisomo | = j'ai appris | asomo | = il a appris | Uɗunga | suivre | tsiɗungu | = j'ai suivi | aɗungu | = il a suivi | Uwula | tuer | tsiwulu | = j'ai tué | awulu | = il a tué | Ufanya | faire | tsifanya | = j'ai fait | afanya | = il a fait | Utsaha | vouloir | tsitsaha | = j'ai voulu | atsaha | = il a voulu | Urav̄iha | vomir | tsirav̄iha | = j'ai vomi | arav̄iha | = il a vomi | Urongoa | parler | tsirongoa | = j'ai parlé | arongoa | = il a parlé | Ufa | mourir | tsifu | = je suis mort | afu | = il / elle est mort(e) | Uja | venir | tsija | = je suis venu | aja | = il / elle est venu(e) | Ulaa | venir de | tsila | = je viens de | ala | = il / elle vient de | Ula / Uɗya | manger | tsili | = j'ai mangé | ali | = il / elle a mangé | Unwa | boire | tsino | = j'ai bu | ano | = il / elle a bu | Uwa | tomber | tsiwu | = je suis tombé | awu | = il / elle est tombé(e) | TSI-A-REMA | = tsarema | je n'ai pas frappé | KA-U-A-REMA | = kwarema | tu n'as pas frappé | KA-A-A-REMA | = karema | il / elle n'a pas frappé | KA-RI-A-REMA | = kararema | nous n'avons pas frappé | KA-MU-A-REMA | = kamwarema | vous n'avez pas frappé | KA-WA-A-REMA | = kawarema | ils / elles n'ont pas frappé |  | A la forme négative, la voyelle finale du verbe reste inchangée. | Uendra | aller | tsaendra | = je ne suis pas allé | Urenga | prendre | tsarenga | = je n'ai pas pris | Uliv̄a | payer | tsaliv̄a | = je n'ai pas payé | Upiha | cuisiner | tsapiha | = je n'ai pas cuisiné | Ula | manger | tsala | = je n'ai pas mangé | Unwa | boire | tsanwa | = je n'ai pas bu | Uɗunga | suivre | Usukuma | pousser (qq chose ou qq'un) | Ujadza | remplir | Utembeya | se promener | Ukiri | accepter, être possible | Utruliya | se calmer, être tranquille | Upashia | monter, s'embarquer | Uv̄idza | aider | Ushuka | descendre | Uv̄ima | mesurer, peser | Usimamia | se dépêcher, se hâter | Uvinga | apporter, emmener, porter | Ha ɓaɓangu | chez mon père | Ha ɓaɓatru | chez notre père | Ha ɓaɓaho | chez ton père | Ha ɓaɓanyu | chez votre père | Ha ɓaɓahe | chez son père | Ha ɓaɓawo | chez leur père | Chapitre précédent | Chapitre suivant | Table des matières
Kamali afungu mbuzi yahe | Kamal a attaché sa chèvre
Bakoko afu lavioni | Grand-père est mort en avion
Ali ali manga | Ali a mangé une mangue
Hafez kaketsi shirini | Hafez n'est pas assis sur la chaise
Fatima kaɓala mulango | Fatima n'a pas fermé la porte
Shamu kaja hatru | Chamou n'est pas venu chez moi
TSI-REME | = tsireme | j'ai frappé
U-REME | = ureme | tu as frappé
A-REME | = areme | il / elle a frappé
RI-REME | = rireme | nous avons frappé
MU-REME | = mureme | vous avez frappé
WA-REME | = wareme | ils / elles ont frappé
Uendra | aller | tsiendre | = je suis allé | aendre | = il est allé
Urenga | prendre | tsirenge | = j'ai pris | arenge | = il a pris
Uliv̄a | payer | tsiliv̄i | = j'ai payé | aliv̄i | = il a payé
Upiha | cuisiner | tsipihi | = j'ai cuisiné | apihi | = il a cuisiné
Uola | pourrir | iolo | = il est pourri | ziolo | = ils sont pourris
Usoma | apprendre | tsisomo | = j'ai appris | asomo | = il a appris
Uɗunga | suivre | tsiɗungu | = j'ai suivi | aɗungu | = il a suivi
Uwula | tuer | tsiwulu | = j'ai tué | awulu | = il a tué
Ufanya | faire | tsifanya | = j'ai fait | afanya | = il a fait
Utsaha | vouloir | tsitsaha | = j'ai voulu | atsaha | = il a voulu
Urav̄iha | vomir | tsirav̄iha | = j'ai vomi | arav̄iha | = il a vomi
Urongoa | parler | tsirongoa | = j'ai parlé | arongoa | = il a parlé
Ufa | mourir | tsifu | = je suis mort | afu | = il / elle est mort(e)
Uja | venir | tsija | = je suis venu | aja | = il / elle est venu(e)
Ulaa | venir de | tsila | = je viens de | ala | = il / elle vient de
Ula / Uɗya | manger | tsili | = j'ai mangé | ali | = il / elle a mangé
Unwa | boire | tsino | = j'ai bu | ano | = il / elle a bu
Uwa | tomber | tsiwu | = je suis tombé | awu | = il / elle est tombé(e)
TSI-A-REMA | = tsarema | je n'ai pas frappé
KA-U-A-REMA | = kwarema | tu n'as pas frappé
KA-A-A-REMA | = karema | il / elle n'a pas frappé
KA-RI-A-REMA | = kararema | nous n'avons pas frappé
KA-MU-A-REMA | = kamwarema | vous n'avez pas frappé
KA-WA-A-REMA | = kawarema | ils / elles n'ont pas frappé
 | A la forme négative, la voyelle finale du verbe reste inchangée.
Uendra | aller | tsaendra | = je ne suis pas allé
Urenga | prendre | tsarenga | = je n'ai pas pris
Uliv̄a | payer | tsaliv̄a | = je n'ai pas payé
Upiha | cuisiner | tsapiha | = je n'ai pas cuisiné
Ula | manger | tsala | = je n'ai pas mangé
Unwa | boire | tsanwa | = je n'ai pas bu
Uɗunga | suivre | Usukuma | pousser (qq chose ou qq'un)
Ujadza | remplir | Utembeya | se promener
Ukiri | accepter, être possible | Utruliya | se calmer, être tranquille
Upashia | monter, s'embarquer | Uv̄idza | aider
Ushuka | descendre | Uv̄ima | mesurer, peser
Usimamia | se dépêcher, se hâter | Uvinga | apporter, emmener, porter
Ha ɓaɓangu | chez mon père | Ha ɓaɓatru | chez notre père
Ha ɓaɓaho | chez ton père | Ha ɓaɓanyu | chez votre père
Ha ɓaɓahe | chez son père | Ha ɓaɓawo | chez leur père
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 14,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 14.",
    content: `

Chapitre 15 - Les Démonstratifs

Il y a trois sortes de démonstratifs en shimaore :


LE DÉMONSTRATIF DE PROXIMITÉ :   racine -NU ou -NI.
Il correspond à : ce ... (ci), cet ... (ci), cette ... (ci), ces ... (ci), pour les adjectifs démonstratifs ;
et à : celui-ci, celle-ci, ceux-ci, celles-ci, pour les pronoms démonstratifs.
LE DÉMONSTRATIF DE DISTANCE :  	racine  -LE.
Il correspond à : ce ... là, cet ... là, cette ... là, ces ... là, pour les adjectifs démonstratifs ;
ou encore à : celui-là, celle-là, ceux-là, celles-là, pour les pronoms démonstratifs.
LE DÉMONSTRATIF DE RÉFÉRENCE :  	racine -O.
Il s'utilise pour désigner la personne ou la chose dont on a déjà parlé. On peut le traduire par : ce, cet, cette, ces.
Ou encore par : celui-là, celle-là, ceux-là, celles-là.


En shimaore, on ne fait pas de distinction entre l'adjectif et le pronom démonstratif.
Qu'il soit adjectif ou pronom, le démonstratif s'accorde au nom auquel il se rapporte.
Le préfixe d'accord utilisé est identique au pré-préfixe défini du nom, sauf en Classe 2 où il est identique au préfixe nominal WA-.


TABLEAU DES ADJECTIFS / PRONOMS DÉMONSTRATIFS : 








CLASSES / NOMS
DÉMONSTRATIFS

PROXIMITÉ
DISTANCE
RÉFÉRENCE

Classe 1Classe 2
MutruWatru
UNU
WANU
ULE
WALE
UWO
WAWO

Classe 3Classe 4
MuhonoMihono
UNU
INI
ULE
ILE
UWO
IYO

Classe 5Classe 6
GariMagari
LINI
YANU
LILE
YALE
LILO
YAYO

Classe 7Classe 8
ShiriZiri
INI
ZINI
ILE
ZILE
IYO
ZIZO (IZO)

Classe 9Classe 10
NguoNguo
INI
ZINI
ILE
ZILE
IYO
ZIZO (IZO)

Classe 11
Uku
UNU
(Pluriel  en  accord
ULE
avec la classe du
UWO
nom  au  pluriel)


L'adjectif démonstratif se place toujours APRÈS le nom, et après l'adjectif qualificatif lorsque le nom qu'il détermine est déjà suivi d'un adjectif.

EXEMPLES : 

Mwana unu
cet enfant-ci
Mwana muzuri unu
ce bel enfant-ci
Mwana ule
cet enfant-là
Mwana mutiti ule
ce petit enfant-là
Wana wale
ces enfants-là
Wana watiti wale
ces beaux enfants-là
Wana wawo
ces enfants-là
 Wana wazuri waili wawo
ces deux beaux enfants


NOTE : 
On modifie le sens de la phrase en plaçant l'adjectif qualificatif après l'adjectif
démonstratif. Comparez les phrases suivantes :

Mwana muzuri unu
ce bel enfant
Mwana unu muzuri
cet enfant est beau
Wana watiti wale
ces petits enfants
Wana wale watiti
Ces enfants sont petits


(Voir à ce sujet : Chapitre 17, B.)

VOCABULAIRE


Muda, mi-
un moment, des --
Mushakiki, mi-
une brochette, des --
Mudila, mi-
une bouilloire, des --
Mushumari, miz-
un clou, des --
Mudzo, mi-
un bagage, des --
Musomo, mi-
une leçon, des --
Mufano, mi-
un exemple, des --
Mustakera, mi-
une moustiquaire, des --
Musada, mi-
une aide, des --
Mustari, mi-
un trait, une ligne, des --
Mushahara, mi- 
un salaire, des --
Mutsolola, mi-
un plat de bananes vertes


EXERCICES

EXERCICE 1 : Traduisez en shimaore :


Celui-ci (cet enfant), celui-ci (ce baobab), ceux-ci (ces bagages),    ceux-ci (ces jeunes), celle-ci (cette sauce), celui-ci (ce cocotier),   celle-ci (cette chaise), celles-ci (ces chaises), celui-ci (ce vêtement), ceux-ci (ces vêtements), celles-ci (ces voitures),    celui-ci (cet exemple), celles-ci (ces chaussures), celles-ci (ces leçons), celle-ci (cette dent).
Ces gens-là, cet enfant-là, ces arbres-là, ce docteur-là, ces résidents-là, ferme cette porte-là ! Attrapez ce voleur-là ! Donne-moi cette moustiquaire-là ! Ne coupez pas ces arbres-là ! Laissez ces chaises-là ! Celui-là (ce jeune-là), ceux-là (ces blancs-là), celle-là (cette boutique-là), ceux-là (ces clous-là), celle-là (cette voiture-là).
Ce petit pied, cette bonne année, ce riche blanc, ce vieux professeur, ces grandes montagnes, cette grande ville, ce sac noir, ces nouveaux élèves, ce petit enfant, ce gros arbre vert, prenez ces lourds bagages ! Ouvrez cette porte ! Prends ces chaises ! Donnez-moi cette grande moustiquaire ! Regardez cette rivière propre !


EXERCICE 2 : Traduisez en français :


Ɓakoko uwo, duktera uwo, fundi likoli lilo, mulima ule, muro unu, mwidzi ule, mwana shioni ule, mukoɓa uwo, wandzani wale, waraɓu wale, wananya watru ɓaɓa wawo, watru washe wale, mihono ile, milango ile, mura unu, duka lilo, godoro lini, magoshi yale, makaratasi yayo, marashi yanu.


EXERCICE 3 : Traduisez en français :



Wasusika mwidzi uwo.
Mulozi uwo arenge zifi ndrile zile.
Watru wale wafanya hazi fetre.
Wanatsa washashi wale wasuendra Momoju.
Wadjeni wale waheya mulima muɓole ule.
Pashia gari lini !
Nimbe dzia djeu lile !
V̄inga midzo midziro ile !
Ali imishakiki mizuri ile.
Namusome musomo muhimu uwo !




Chapitre précédentChapitre suivantTable des matières | CLASSES / NOMS | DÉMONSTRATIFS | PROXIMITÉ | DISTANCE | RÉFÉRENCE | Classe 1Classe 2 | MutruWatru | UNU
WANU | ULE
WALE | UWO
WAWO | Classe 3Classe 4 | MuhonoMihono | UNU
INI | ULE
ILE | UWO
IYO | Classe 5Classe 6 | GariMagari | LINI
YANU | LILE
YALE | LILO
YAYO | Classe 7Classe 8 | ShiriZiri | INI
ZINI | ILE
ZILE | IYO
ZIZO (IZO) | Classe 9Classe 10 | NguoNguo | INI
ZINI | ILE
ZILE | IYO
ZIZO (IZO) | Classe 11 | Uku | UNU
(Pluriel  en  accord | ULE
avec la classe du | UWO
nom  au  pluriel) | Mwana unu | cet enfant-ci | Mwana muzuri unu | ce bel enfant-ci | Mwana ule | cet enfant-là | Mwana mutiti ule | ce petit enfant-là | Wana wale | ces enfants-là | Wana watiti wale | ces beaux enfants-là | Wana wawo | ces enfants-là | Wana wazuri waili wawo | ces deux beaux enfants | Mwana muzuri unu | ce bel enfant | Mwana unu muzuri | cet enfant est beau | Wana watiti wale | ces petits enfants | Wana wale watiti | Ces enfants sont petits | Muda, mi- | un moment, des -- | Mushakiki, mi- | une brochette, des -- | Mudila, mi- | une bouilloire, des -- | Mushumari, miz- | un clou, des -- | Mudzo, mi- | un bagage, des -- | Musomo, mi- | une leçon, des -- | Mufano, mi- | un exemple, des -- | Mustakera, mi- | une moustiquaire, des -- | Musada, mi- | une aide, des -- | Mustari, mi- | un trait, une ligne, des -- | Mushahara, mi- | un salaire, des -- | Mutsolola, mi- | un plat de bananes vertes | Chapitre précédent | Chapitre suivant | Table des matières
CLASSES / NOMS | DÉMONSTRATIFS
PROXIMITÉ | DISTANCE | RÉFÉRENCE
Classe 1Classe 2 | MutruWatru | UNU
WANU | ULE
WALE | UWO
WAWO
Classe 3Classe 4 | MuhonoMihono | UNU
INI | ULE
ILE | UWO
IYO
Classe 5Classe 6 | GariMagari | LINI
YANU | LILE
YALE | LILO
YAYO
Classe 7Classe 8 | ShiriZiri | INI
ZINI | ILE
ZILE | IYO
ZIZO (IZO)
Classe 9Classe 10 | NguoNguo | INI
ZINI | ILE
ZILE | IYO
ZIZO (IZO)
Classe 11 | Uku | UNU
(Pluriel  en  accord | ULE
avec la classe du | UWO
nom  au  pluriel)
Mwana unu | cet enfant-ci | Mwana muzuri unu | ce bel enfant-ci
Mwana ule | cet enfant-là | Mwana mutiti ule | ce petit enfant-là
Wana wale | ces enfants-là | Wana watiti wale | ces beaux enfants-là
Wana wawo | ces enfants-là | Wana wazuri waili wawo | ces deux beaux enfants
Mwana muzuri unu | ce bel enfant | Mwana unu muzuri | cet enfant est beau
Wana watiti wale | ces petits enfants | Wana wale watiti | Ces enfants sont petits
Muda, mi- | un moment, des -- | Mushakiki, mi- | une brochette, des --
Mudila, mi- | une bouilloire, des -- | Mushumari, miz- | un clou, des --
Mudzo, mi- | un bagage, des -- | Musomo, mi- | une leçon, des --
Mufano, mi- | un exemple, des -- | Mustakera, mi- | une moustiquaire, des --
Musada, mi- | une aide, des -- | Mustari, mi- | un trait, une ligne, des --
Mushahara, mi- | un salaire, des -- | Mutsolola, mi- | un plat de bananes vertes
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 15,
    title: "Leçon 15",
    description: "Contenu du chapitre 15.",
    content: `

Chapitre 16 - Les Noms : Le Genre SHI-/ZI-

Le genre SHI-/ZI- (Classes 7 / 8) regroupe des noms de parties du corps humain, des noms d'objets courants, et en classe 7 uniquement, les noms de langues.


Les êtres humains contenus dans le genre SHI-/ZI- sont des êtres "diminués"



Cl 7 Singulier :
préfixe SHI-
SHIRI
= une chaise
Cl 8 Pluriel :
préfixe ZI-
ZIRI
= des chaises


 1. QUELQUES NOMS DU GENRE SHI-/ZI-  (Classes 7 / 8) : 


SingulierPlurielTraduction
Shia
Zia
une vaisselle, des --
Shiazi
Ziazi
un igname, des --
Shiɓaɓa
Ziɓaɓa
une mesure à grain, des --
Shifuɓa
Zifuɓa
la poitrine, le torse, des --
Shiga
Ziga
un membre, des --
Shijavu
Zijavu
une noix de coco verte, des --
Shikandre
Zikandre
une page, des --
Shikombe
Zikombe
une tasse, des --
Shino
Zino
un mortier, des --
Shinyama
Zinyama
un animal, des animaux
Shio
Zio
un livre, des --
Shireo
Zireo
de la viande, du poisson, des brèdes
Shirere
Zirere
un nain, des --
Shirewe
Zirewe
un handicapé, des --
Shiri
Ziri
une chaise, des --
Shisiwa
Zisiwa
une île, des --
Shitrandra
Zitrandra
un lit, des --
Shitru
Zitru
une chose, une affaire, un objet, des --
Shitswa
Zitswa
une tête, des --
ShiwatrotroZiwatrotroune grenouille, des --


CAS PARTICULIERS :     SH- / Z-

SingulierPlurielTraduction
Shahula
Zahula
une nourriture, des --
Shandza
Zandza
un terrain, des --
Shengwe
Zengwe
un fouet, des --
Shombo
Zombo
un outil, un coupe-coupe, des --
Shuma
Zuma
un métal, des métaux


 2. NOMS DE LANGUES  (Classe 7) : 


LangueTraductionLangueTraduction
Shimaore
le mahorais
Shingazidja
le grand-comorien
Shindzuani
l'anjouanais
Shiɓushi
le malgache
Shiswahili
le swahili
Shihindi
l'indien
Shifarantsa
le français
Shidjeremani
l'allemand
Shingereza
l'anglais
Sharaɓu
l'arabe


Le nom de nationalité, préfixé par  SHI-  peut signifier : "à la manière de..." (Voir : Chapitre 44.)
Ainsi :

Shifarantsa
= à la manière des Français
Shizungu
= à la manière des blancs (ou des Français !)
Shimaore
= à la manière des Mahorais


 3. LE PRÉ-PRÉFIXE DÉFINI : 

Il se place devant le préfixe de classe du nom et fonctionne comme un article défini.


Cl 7 (Singulier) :
I-   
SHIRI
= une chaise
ISHIRI
= la chaise
 
Cl 8 (Pluriel) :
ZI-   
ZIRI
= des chaises 
ZIZIRI
= les chaises


 4. ACCORDS DE CLASSE : 


Adjectif :  (Voir : Chapitre 11.)

Classe 7 :
Shiriɓole / titi / ndzuzuri / ndzukundru / ndjeu / mbovu / ...
Classe 8 :
Ziriɓole / titi / ndzuzuri / ndzukundru / ndjeu / mbovu / ...


On constate que l'adjectif a une forme identique au singulier et au pluriel.
Adjectifs possessifs :

Classe 7 :
Shiri
yangu / yaho / yahe / yatru / yanyu / yawo
 
=
ma  /  ta  /  sa  / notre  /  votre  /  leur
chaise
 
Classe 8 :
Ziri
zangu / zaho / zahe / zatru / zanyu / zawo
 
=
mes   /   tes   /  ses    /   nos    /   vos     /  leurs
chaises



Démonstratif :


Classe 7 (Singulier) :Classe 8 (Pluriel) :
Shiriini= cette chaise-ciZirizini= ces chaises-ci
ile= cette chaise là-baszile= ces chaises là-bas
iyo= cette chaise-làzizo (izo)= ces chaises-là




EXERCICES

EXERCICE 1 : Traduisez en shimaore :


Une chose, une tête, un lit, une île, un membre, un outil, le français, le mahorais, des chaises, des animaux, des îles,   des outils, de la nourriture, un métal, l'anglais.
Cette île-ci, cette noix de coco-ci, ce livre-là, cette tasse-là, cette nourriture-ci, cette chaise-là, ce terrain-ci,  ces membres, cette tête-ci, ces animaux-ci, ces lits-là, ce mortier-ci, ces outils, ces livres-ci, ces vaisselles-ci.
Cette petite île, cette bonne nourriture, cet animal malade, ces nombreux animaux,  cette grosse noix de coco, ces belles tasses neuves, ce long terrain, ce petit outil, ce gros mortier, ces noix de coco bon marché, ce gros livre, cette chaise usée, ce grand lit, ce métal tranchant, cette nouvelle chose.


EXERCICE 2 : Traduisez en français et donnez le pluriel, lorsque c'est possible :

Shikombe, shia, shombo, shiga, shino, shiri, shahula, shijavu, shitrandra, shisiwa, shifarantsa, shizungu, sharaɓu, shimaore, shindzuani.

EXERCICE 3 : Traduisez en français :



Mwana asiki shijavu ini.
Wana wali shahula ndzuzuri ile.
Niv̄e shino titi ile !
Fundi unu uwaha zitru nyengi.
Wawe ilagua fetre shifarantsa.
Wawe kasoma shidjeremani.
Mutru ɓaɓa atayarisha ishandza yahe.
Mwana asuhasiɓu zinyama zahe.
Mwanamtsa av̄umua shitrandrani.
Lagua shimaore !




Chapitre précédentChapitre suivantTable des matières |  | Les êtres humains contenus dans le genre SHI-/ZI- sont des êtres "diminués" | Cl 7 Singulier : | préfixe SHI- | SHIRI | = une chaise | Cl 8 Pluriel : | préfixe ZI- | ZIRI | = des chaises | Singulier | Pluriel | Traduction | Shia | Zia | une vaisselle, des -- | Shiazi | Ziazi | un igname, des -- | Shiɓaɓa | Ziɓaɓa | une mesure à grain, des -- | Shifuɓa | Zifuɓa | la poitrine, le torse, des -- | Shiga | Ziga | un membre, des -- | Shijavu | Zijavu | une noix de coco verte, des -- | Shikandre | Zikandre | une page, des -- | Shikombe | Zikombe | une tasse, des -- | Shino | Zino | un mortier, des -- | Shinyama | Zinyama | un animal, des animaux | Shio | Zio | un livre, des -- | Shireo | Zireo | de la viande, du poisson, des brèdes | Shirere | Zirere | un nain, des -- | Shirewe | Zirewe | un handicapé, des -- | Shiri | Ziri | une chaise, des -- | Shisiwa | Zisiwa | une île, des -- | Shitrandra | Zitrandra | un lit, des -- | Shitru | Zitru | une chose, une affaire, un objet, des -- | Shitswa | Zitswa | une tête, des -- | Shiwatrotro | Ziwatrotro | une grenouille, des -- | Singulier | Pluriel | Traduction | Shahula | Zahula | une nourriture, des -- | Shandza | Zandza | un terrain, des -- | Shengwe | Zengwe | un fouet, des -- | Shombo | Zombo | un outil, un coupe-coupe, des -- | Shuma | Zuma | un métal, des métaux | Langue | Traduction | Langue | Traduction | Shimaore | le mahorais | Shingazidja | le grand-comorien | Shindzuani | l'anjouanais | Shiɓushi | le malgache | Shiswahili | le swahili | Shihindi | l'indien | Shifarantsa | le français | Shidjeremani | l'allemand | Shingereza | l'anglais | Sharaɓu | l'arabe | Shifarantsa | = à la manière des Français | Shizungu | = à la manière des blancs (ou des Français !) | Shimaore | = à la manière des Mahorais | Cl 7 (Singulier) : | I- | SHIRI | = une chaise | ISHIRI | = la chaise |  | Cl 8 (Pluriel) : | ZI- | ZIRI | = des chaises | ZIZIRI | = les chaises | Classe 7 : | Shiri | ɓole / titi / ndzuzuri / ndzukundru / ndjeu / mbovu / ... | Classe 8 : | Ziri | ɓole / titi / ndzuzuri / ndzukundru / ndjeu / mbovu / ... | Classe 7 : | Shiri | yangu / yaho / yahe / yatru / yanyu / yawo |  | = | ma  /  ta  /  sa  / notre  /  votre  /  leur | chaise |  | Classe 8 : | Ziri | zangu / zaho / zahe / zatru / zanyu / zawo |  | = | mes   /   tes   /  ses    /   nos    /   vos     /  leurs | chaises | Classe 7 (Singulier) : | Classe 8 (Pluriel) : | Shiri | ini | = cette chaise-ci | Ziri | zini | = ces chaises-ci | ile | = cette chaise là-bas | zile | = ces chaises là-bas | iyo | = cette chaise-là | zizo (izo) | = ces chaises-là | Chapitre précédent | Chapitre suivant | Table des matières
 | Les êtres humains contenus dans le genre SHI-/ZI- sont des êtres "diminués"
Cl 7 Singulier : | préfixe SHI- | SHIRI | = une chaise
Cl 8 Pluriel : | préfixe ZI- | ZIRI | = des chaises
Singulier | Pluriel | Traduction
Shia | Zia | une vaisselle, des --
Shiazi | Ziazi | un igname, des --
Shiɓaɓa | Ziɓaɓa | une mesure à grain, des --
Shifuɓa | Zifuɓa | la poitrine, le torse, des --
Shiga | Ziga | un membre, des --
Shijavu | Zijavu | une noix de coco verte, des --
Shikandre | Zikandre | une page, des --
Shikombe | Zikombe | une tasse, des --
Shino | Zino | un mortier, des --
Shinyama | Zinyama | un animal, des animaux
Shio | Zio | un livre, des --
Shireo | Zireo | de la viande, du poisson, des brèdes
Shirere | Zirere | un nain, des --
Shirewe | Zirewe | un handicapé, des --
Shiri | Ziri | une chaise, des --
Shisiwa | Zisiwa | une île, des --
Shitrandra | Zitrandra | un lit, des --
Shitru | Zitru | une chose, une affaire, un objet, des --
Shitswa | Zitswa | une tête, des --
Shiwatrotro | Ziwatrotro | une grenouille, des --
Singulier | Pluriel | Traduction
Shahula | Zahula | une nourriture, des --
Shandza | Zandza | un terrain, des --
Shengwe | Zengwe | un fouet, des --
Shombo | Zombo | un outil, un coupe-coupe, des --
Shuma | Zuma | un métal, des métaux
Langue | Traduction | Langue | Traduction
Shimaore | le mahorais | Shingazidja | le grand-comorien
Shindzuani | l'anjouanais | Shiɓushi | le malgache
Shiswahili | le swahili | Shihindi | l'indien
Shifarantsa | le français | Shidjeremani | l'allemand
Shingereza | l'anglais | Sharaɓu | l'arabe
Shifarantsa | = à la manière des Français
Shizungu | = à la manière des blancs (ou des Français !)
Shimaore | = à la manière des Mahorais
Cl 7 (Singulier) :
I- | SHIRI | = une chaise | ISHIRI | = la chaise

Cl 8 (Pluriel) :
ZI- | ZIRI | = des chaises | ZIZIRI | = les chaises
Classe 7 : | Shiri | ɓole / titi / ndzuzuri / ndzukundru / ndjeu / mbovu / ...
Classe 8 : | Ziri | ɓole / titi / ndzuzuri / ndzukundru / ndjeu / mbovu / ...
Classe 7 : | Shiri | yangu / yaho / yahe / yatru / yanyu / yawo | 
= | ma  /  ta  /  sa  / notre  /  votre  /  leur | chaise

Classe 8 : | Ziri | zangu / zaho / zahe / zatru / zanyu / zawo | 
= | mes   /   tes   /  ses    /   nos    /   vos     /  leurs | chaises
Classe 7 (Singulier) : | Classe 8 (Pluriel) :
Shiri | ini | = cette chaise-ci | Ziri | zini | = ces chaises-ci
ile | = cette chaise là-bas | zile | = ces chaises là-bas
iyo | = cette chaise-là | zizo (izo) | = ces chaises-là
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 16,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 16.",
    content: `

Chapitre 17 - Le Verbe UKA = être

Le verbe UKA =  "ÊTRE"  est sans aucun doute le verbe qui pose le plus de problèmes au débutant, car il a la particularité de posséder cinq radicaux différents :

-A-SI-Ø-KA-LI



En réalité, ces différents radicaux n'ont de commun entre eux que le sens de = "être". C'est donc par commodité que l'on parle ici du verbe "UKA".



 A) AU PRÉSENT ACTUEL : 
 RADICAL -A / -SI 


A la forme affirmative, le radical verbal  -A s'accorde au nom sujet en prenant les préfixes sujets du
genre MU-/WA- et des autres genres, à la 3ème personne du singulier et du pluriel.
A la forme négative, les préfixes sujets négatifs sont affixés au radical verbal  -SI.









CLASSE
AFFIRMATIF
Equivalent
NÉGATIF
Equivalent

 1
2
Cl 1 Mutru 3
1
2
Cl 2 Watru  3
TSA
WA
A
RA
MWA
WA
je suis
tu es
il / elle est
nous sommes
vous êtes
ils / elles sont
TSISI
KUSI
KASI
KARISI
KAMUSI
KAWASI
je ne suis pas
tu n'es pas
il / elle n'est pas
nous ne sommes pas
vous n'êtes pas
ils / elles ne sont pas

Cl 3  Muhono
Cl 4 Mihono
WA
YA
il / elle est
ils / elles sont
KAUSI
KAISI
il / elle n'est pas
ils / elles ne sont pas

Cl 5  Gari
Cl 6 Magari
LA
YA
il / elle est
ils / elles sont
KALISI
KAYASI
il / elle n'est pas
ils / elles ne sont pas

Cl 7  Shiri
Cl 8 Ziri
YA
ZA
il / elle est
ils / elles sont
KAISI
KAZISI
il / elle n'est pas
ils / elles ne sont pas

Cl 9  Nguo
Cl 10  Nguo
YA
ZA
il / elle est
ils / elles sont
KAISI
KAZISI
il / elle n'est pas
ils / elles ne sont pas

Cl 11  Uku
WA
il / elle est
KAUSI
il / elle n'est pas


EXEMPLES : 

Tsa v̄anu
Je suis ici
Ɓaɓangu a ɗagoni
Mon père est en ville
Ra fetre v̄anu 
Nous sommes bien ici
Wa ha maɓaɓawo
Ils sont chez leurs parents
Fi za muroni
Les poissons sont dans la rivière
Wakati wa mwema
Le temps est beau
Ra ukuIl fait nuit (Nous sommes la nuit)
Mwenyewe kasi
Le propriétaire n'est pas là



 B) AU PRÉSENT HABITUEL : 
 RADICAL -Ø 

Au présent habituel, il est fréquent, surtout en présence d'un démonstratif ou d'un possessif, que le verbe
UKA  ne soit pas exprimé : il est simplement sous-entendu. On parle dans ce cas de radical  -Ø. Ainsi :


Nyumba ini yangu
C'est ma maison(maison-ci mienne)
Mwana wangu muzuri
Mon enfant est beau
(enfant à moi beau)
Wanatsa wale watiti
Ces enfants sont petits
(enfants là petits)
Ini yangu, iyo yaho 
Ceci est à moi, cela est à toi
(ceci à moi, cela à toi)




 C) A L'ACCOMPLI : 
 RADICAL -KA 









FORME AFFIRMATIVE
FORME NÉGATIVE

TSIKA
UKA
AKA
RIKA
MUKA
WAKA
j'étais
tu étais
il / elle était
nous étions
vous étiez
ils / elles étaient
TSAKA
KWAKA
KAKA
KARAKA
KAMWAKA
KAWAKA
je n'étais pas
tu n'étais pas
il / elle n'était pas
nous n'étions pas
vous n'étiez pas
ils / elles n'étaient pas

UKA
IKA
LIKA
YAKA
ZIKA
(Cl 3 - 11 - 14)
(Cl 4 - 7 - 9)
(Cl 5)
(Cl 6)
(Cl 8 - 10)
KAUKA
KAIKA
KALIKA
KAYAKA
KAZIKA
(Cl 3 - 11 - 14)
(Cl 4 - 7 - 9)
(Cl 5)
(Cl 6)
(Cl 8 - 10)



 D) AU FUTUR : 
 RADICAL -KA 









FORME AFFIRMATIVE
FORME NÉGATIVE
NITSOKA
UTSOKA
ATSOKA
RITSOKA
MUTSOKA
WATSOKA
je serai
tu seras
il / elle sera
nous serons
vous serez
ils / elles seront
TSITSOKA
KUTSOKA
KATSOKA
KARITSOKA
KAMUTSOKA
KAWATSOKA
je ne serai pas
tu ne seras pas
il / elle ne sera pas
nous ne serons pas
vous ne serez pas
ils / elles ne seront pas

UTSOKA
ITSOKA
LITSOKA
YATSOKA
ZITSOKA
(Cl 3 - 11 - 14)
(Cl 4 - 7 - 9)
(Cl 5)
(Cl 6)
(Cl 8 - 10)
KAUTSOKA
KAITSOKA
KALITSOKA
KAYATSOKA
KAZITSOKA
(Cl 3 - 11 - 14)
(Cl 4 - 7 - 9)
(Cl 5)
(Cl 6)
(Cl 8 - 10)




 E) AU SUBJONCTIF : 
 RADICAL -K(A)-E 








FORME AFFIRMATIVE
FORME NÉGATIVE

NIKE
UKE
AKE
RIKE
MUKE
WAKE
que je sois
que tu sois
qu'il / elle soit
que nous soyons
que vous soyez
qu'ils / elles soient
NISIKE
USIKE
ASIKE
RISIKE
ASIKE
WASIKE
que je ne sois pas
que tu ne sois pas
qu'il / elle ne soit pas
que nous ne soyons pas
que vous ne soyez pas
qu'ils / elles ne soient pas

UKE
IKE
LIKE
YAKE
ZIKE
(Cl 3 - 11 - 14)
(Cl 4 - 7 - 9)
(Cl 5)
(Cl 6)
(Cl 8 - 10)
USIKE
ISIKE
LISIKE
YASIKE
ZISIKE
(Cl 3 - 11 - 14)
(Cl 4 - 7 - 9)
(Cl 5)
(Cl 6)
(Cl 8 - 10)


EXEMPLES : 


Muke v̄wamoja na wasi
Soyez avec nous
Ilazimu wananya watru-ɓaɓana wananya watru-mama wake sawa
Il faut que les frères et les sœurs soient égaux




 F) A L'IMPÉRATIF : 
 RADICAL -KA 


KA !     Sois !


Ka hashiri umwelewe mwandzani.
Sois vigilant pour comprendre un ami.




 G) POUR TRADUIRE "C'EST" : 
 ƊE 


A la forme affirmative, on utilise la particule invariable  ƊE  :
EXEMPLES : 

Hoho ɗe mbani ?
Qui est-ce qui est là ?
Mbani ɗe aja ?
Qui est-ce qui est venu ?
Mbani ɗe anihirao ? 
Qui est-ce qui m'appelle ?
V̄anu ɗe ha mushe wangu
Ici c'est chez ma femme
Iyo ɗe shahula mwafaka ya mwana zaza
C'est la nourriture qui convient pour un bébé


A la forme négative :  TSI  ou  TSIƊE :

EXEMPLES : 

Jwayi lini tsi djema
Cet œuf n'est pas bon
Gari lini tsi langu
Ce n'est pas ma voiture
Tsiɗe ha ɓaɓangu
Ce n'est pas chez mon père
Tsi fi, tsi nyama
Ce n'est ni poisson, ni viande





 H) POUR TRADUIRE "IL Y A" : 
 V̄WA 



A la forme affirmative, le préfixe locatif V̄U- est suivi du radical -A, à la 3ème personne du singulier :   V̄U-  + -A -> V̄WA   =   il y a (il y est...)
EXEMPLES : 

V̄wa maji v̄anu
Il y a de l'eau ici
V̄wa watru wengi leo
Il y a beaucoup de gens aujourd'hui
V̄wa hari
Il fait chaud (il y a de la chaleur)
V̄wa ɓaridi
Il fait froid (il y a du froid)


A la forme négative, on utilise KAV̄U (forme contractée de KAV̄WASI) = il n'y a pas
EXEMPLE : 

- V̄wa maji ?
- Y a-t-il de l'eau ?
- Kav̄u.
- Il n'y en a pas.


Au futur, on aura respectivement V̄UTSOKA  =  il y aura, et KAV̄UTSOKA = il n'y aura pas
EXEMPLES : 

V̄utsoka kula uzitsahao
Il y aura tout ce que tu veux
Kav̄utsoka maji meso
Il n'y aura pas d'eau demain



A l'accompli, on aura respectivement V̄UKA  =  il y avait, et KAV̄UKA = il n'y avait pas.
EXEMPLES : 

V̄uka tadjiri, v̄uka masikini
Il y avait un riche, il y avait un pauvre
V̄uka mutru-ɓaɓa na mutru-mama
Il y avait un homme et une femme






 I) POUR TRADUIRE "IL Y EST"  
 A V̄AV̄O 

A la forme affirmative : A V̄AV̄O  =  il est là / il y est
A la forme négative, on utilise  KAV̄O   (forme contractée de KASI V̄AV̄O) = il n'est pas là / il n'y est pas.
EXEMPLE : 

- Mutru-ɓaɓa a ɗagoni ?- L'homme est à la maison ?
- Kav̄o.- Il n'y est pas.


 J) LA FORME RELATIVE 

Nous avions annoncé 5 radicaux différents au début de ce chapitre.
Nous en avons étudié 4 : -A, -SI, -Ø et -KA.
Où est passé -LI-, le 5ème radical ?
Pour le savoir, rendez-vous au Chapitre 52 - Les Temps Relatifs.

PROVERBE : 


HASIRA HASARALa colère est mauvaise conseillère



VOCABULAIRE


Ɓanga, ma-
une cuisine, des --
Feliki, ma-
une brède, des --
Ɓaraza, ma-
une véranda, des --
Fenesi, ma-
un jaque, des --
Ɓaribari, ma-
un mouton, des --
Frãmpe, ma-
un fruit à pain, des --
Ɓengani, ma-
une aubergine, des --
Jimbi, ma-
un songe, des --
Bibi, ma-
un insecte, des --
Kowa, ma-
un escargot, des --
Ɓwe, mawe
une pierre, des --
Sindza, ma-
une banane douce, des --


EXERCICES

EXERCICE 1 : Traduisez en shimaore :



Cette montagne est grande.
Cette ville est propre.
Cette personne est sévère.
Le français est facile.
Le mahorais n'est pas difficile.
Tes enfants sont beaux.
Cette nourriture n'est pas bonne.
Mon père est à la campagne.
Le temps n'est pas beau.
Il fait nuit.
La nuit est tombée.
Je vais (suis) bien.
Ce fruit à pain est grand.
Ces bananes sont chères.
Ces moutons sont blancs.



EXERCICE 2 : Traduisez en français :



Majwayi yanu mazuri.
Mwana unu muzuri.
Wanazioni wale wahodari.
Shisiwa ya maore ndzuzuri swafi.
Ini shiri yangu.
Wawe uhiriwa mbani ?
Wami ɗe Fatima.
Gari lini tsi djema.
Ra fetre v̄anu.
Wa nyumbani.
Zinyombe za malavuni.
Mwenyewe kasi.
Kawasi v̄anu.
Ɓweni ule muzuri swafi.
Wananatsa wale wananyangu.




Chapitre précédentChapitre suivantTable des matières | -A | -SI | -Ø | -KA | -LI |  | En réalité, ces différents radicaux n'ont de commun entre eux que le sens de = "être". C'est donc par commodité que l'on parle ici du verbe "UKA". | A) AU PRÉSENT ACTUEL : | RADICAL -A / -SI | CLASSE | AFFIRMATIF | Equivalent | NÉGATIF | Equivalent | 1
2
Cl 1 Mutru 3
1
2
Cl 2 Watru  3 | TSA
WA
A
RA
MWA
WA | je suis
tu es
il / elle est
nous sommes
vous êtes
ils / elles sont | TSISI
KUSI
KASI
KARISI
KAMUSI
KAWASI | je ne suis pas
tu n'es pas
il / elle n'est pas
nous ne sommes pas
vous n'êtes pas
ils / elles ne sont pas | Cl 3  Muhono
Cl 4 Mihono | WA
YA | il / elle est
ils / elles sont | KAUSI
KAISI | il / elle n'est pas
ils / elles ne sont pas | Cl 5  Gari
Cl 6 Magari | LA
YA | il / elle est
ils / elles sont | KALISI
KAYASI | il / elle n'est pas
ils / elles ne sont pas | Cl 7  Shiri
Cl 8 Ziri | YA
ZA | il / elle est
ils / elles sont | KAISI
KAZISI | il / elle n'est pas
ils / elles ne sont pas | Cl 9  Nguo
Cl 10  Nguo | YA
ZA | il / elle est
ils / elles sont | KAISI
KAZISI | il / elle n'est pas
ils / elles ne sont pas | Cl 11  Uku | WA | il / elle est | KAUSI | il / elle n'est pas | Tsa v̄anu | Je suis ici | Ɓaɓangu a ɗagoni | Mon père est en ville | Ra fetre v̄anu | Nous sommes bien ici | Wa ha maɓaɓawo | Ils sont chez leurs parents | Fi za muroni | Les poissons sont dans la rivière | Wakati wa mwema | Le temps est beau | Ra uku | Il fait nuit (Nous sommes la nuit) | Mwenyewe kasi | Le propriétaire n'est pas là | B) AU PRÉSENT HABITUEL : | RADICAL -Ø | Nyumba ini yangu | C'est ma maison | (maison-ci mienne) | Mwana wangu muzuri | Mon enfant est beau | (enfant à moi beau) | Wanatsa wale watiti | Ces enfants sont petits | (enfants là petits) | Ini yangu, iyo yaho | Ceci est à moi, cela est à toi | (ceci à moi, cela à toi) | C) A L'ACCOMPLI : | RADICAL -KA | FORME AFFIRMATIVE | FORME NÉGATIVE | TSIKA
UKA
AKA
RIKA
MUKA
WAKA | j'étais
tu étais
il / elle était
nous étions
vous étiez
ils / elles étaient | TSAKA
KWAKA
KAKA
KARAKA
KAMWAKA
KAWAKA | je n'étais pas
tu n'étais pas
il / elle n'était pas
nous n'étions pas
vous n'étiez pas
ils / elles n'étaient pas | UKA
IKA
LIKA
YAKA
ZIKA | (Cl 3 - 11 - 14)
(Cl 4 - 7 - 9)
(Cl 5)
(Cl 6)
(Cl 8 - 10) | KAUKA
KAIKA
KALIKA
KAYAKA
KAZIKA | (Cl 3 - 11 - 14)
(Cl 4 - 7 - 9)
(Cl 5)
(Cl 6)
(Cl 8 - 10) | D) AU FUTUR : | RADICAL -KA | FORME AFFIRMATIVE | FORME NÉGATIVE | NITSOKA
UTSOKA
ATSOKA
RITSOKA
MUTSOKA
WATSOKA | je serai
tu seras
il / elle sera
nous serons
vous serez
ils / elles seront | TSITSOKA
KUTSOKA
KATSOKA
KARITSOKA
KAMUTSOKA
KAWATSOKA | je ne serai pas
tu ne seras pas
il / elle ne sera pas
nous ne serons pas
vous ne serez pas
ils / elles ne seront pas | UTSOKA
ITSOKA
LITSOKA
YATSOKA
ZITSOKA | (Cl 3 - 11 - 14)
(Cl 4 - 7 - 9)
(Cl 5)
(Cl 6)
(Cl 8 - 10) | KAUTSOKA
KAITSOKA
KALITSOKA
KAYATSOKA
KAZITSOKA | (Cl 3 - 11 - 14)
(Cl 4 - 7 - 9)
(Cl 5)
(Cl 6)
(Cl 8 - 10) | E) AU SUBJONCTIF : | RADICAL -K(A)-E | FORME AFFIRMATIVE | FORME NÉGATIVE | NIKE
UKE
AKE
RIKE
MUKE
WAKE | que je sois
que tu sois
qu'il / elle soit
que nous soyons
que vous soyez
qu'ils / elles soient | NISIKE
USIKE
ASIKE
RISIKE
ASIKE
WASIKE | que je ne sois pas
que tu ne sois pas
qu'il / elle ne soit pas
que nous ne soyons pas
que vous ne soyez pas
qu'ils / elles ne soient pas | UKE
IKE
LIKE
YAKE
ZIKE | (Cl 3 - 11 - 14)
(Cl 4 - 7 - 9)
(Cl 5)
(Cl 6)
(Cl 8 - 10) | USIKE
ISIKE
LISIKE
YASIKE
ZISIKE | (Cl 3 - 11 - 14)
(Cl 4 - 7 - 9)
(Cl 5)
(Cl 6)
(Cl 8 - 10) | Muke v̄wamoja na wasi | Soyez avec nous | Ilazimu wananya watru-ɓaɓana wananya watru-mama wake sawa | Il faut que les frères et les sœurs soient égaux | F) A L'IMPÉRATIF : | RADICAL -KA | Ka hashiri umwelewe mwandzani. | Sois vigilant pour comprendre un ami. | G) POUR TRADUIRE "C'EST" : | ƊE | Hoho ɗe mbani ? | Qui est-ce qui est là ? | Mbani ɗe aja ? | Qui est-ce qui est venu ? | Mbani ɗe anihirao ? | Qui est-ce qui m'appelle ? | V̄anu ɗe ha mushe wangu | Ici c'est chez ma femme | Iyo ɗe shahula mwafaka ya mwana zaza | C'est la nourriture qui convient pour un bébé | Jwayi lini tsi djema | Cet œuf n'est pas bon | Gari lini tsi langu | Ce n'est pas ma voiture | Tsiɗe ha ɓaɓangu | Ce n'est pas chez mon père | Tsi fi, tsi nyama | Ce n'est ni poisson, ni viande | H) POUR TRADUIRE "IL Y A" : | V̄WA | V̄wa maji v̄anu | Il y a de l'eau ici | V̄wa watru wengi leo | Il y a beaucoup de gens aujourd'hui | V̄wa hari | Il fait chaud (il y a de la chaleur) | V̄wa ɓaridi | Il fait froid (il y a du froid) | - V̄wa maji ? | - Y a-t-il de l'eau ? | - Kav̄u. | - Il n'y en a pas. | V̄utsoka kula uzitsahao | Il y aura tout ce que tu veux | Kav̄utsoka maji meso | Il n'y aura pas d'eau demain | V̄uka tadjiri, v̄uka masikini | Il y avait un riche, il y avait un pauvre | V̄uka mutru-ɓaɓa na mutru-mama | Il y avait un homme et une femme | I) POUR TRADUIRE "IL Y EST" | A V̄AV̄O | - Mutru-ɓaɓa a ɗagoni ? | - L'homme est à la maison ? | - Kav̄o. | - Il n'y est pas. | Ɓanga, ma- | une cuisine, des -- | Feliki, ma- | une brède, des -- | Ɓaraza, ma- | une véranda, des -- | Fenesi, ma- | un jaque, des -- | Ɓaribari, ma- | un mouton, des -- | Frãmpe, ma- | un fruit à pain, des -- | Ɓengani, ma- | une aubergine, des -- | Jimbi, ma- | un songe, des -- | Bibi, ma- | un insecte, des -- | Kowa, ma- | un escargot, des -- | Ɓwe, mawe | une pierre, des -- | Sindza, ma- | une banane douce, des -- | Chapitre précédent | Chapitre suivant | Table des matières
-A | -SI | -Ø | -KA | -LI
 | En réalité, ces différents radicaux n'ont de commun entre eux que le sens de = "être". C'est donc par commodité que l'on parle ici du verbe "UKA".
A) AU PRÉSENT ACTUEL : | RADICAL -A / -SI
CLASSE | AFFIRMATIF | Equivalent | NÉGATIF | Equivalent
1
2
Cl 1 Mutru 3
1
2
Cl 2 Watru  3 | TSA
WA
A
RA
MWA
WA | je suis
tu es
il / elle est
nous sommes
vous êtes
ils / elles sont | TSISI
KUSI
KASI
KARISI
KAMUSI
KAWASI | je ne suis pas
tu n'es pas
il / elle n'est pas
nous ne sommes pas
vous n'êtes pas
ils / elles ne sont pas
Cl 3  Muhono
Cl 4 Mihono | WA
YA | il / elle est
ils / elles sont | KAUSI
KAISI | il / elle n'est pas
ils / elles ne sont pas
Cl 5  Gari
Cl 6 Magari | LA
YA | il / elle est
ils / elles sont | KALISI
KAYASI | il / elle n'est pas
ils / elles ne sont pas
Cl 7  Shiri
Cl 8 Ziri | YA
ZA | il / elle est
ils / elles sont | KAISI
KAZISI | il / elle n'est pas
ils / elles ne sont pas
Cl 9  Nguo
Cl 10  Nguo | YA
ZA | il / elle est
ils / elles sont | KAISI
KAZISI | il / elle n'est pas
ils / elles ne sont pas
Cl 11  Uku | WA | il / elle est | KAUSI | il / elle n'est pas
Tsa v̄anu | Je suis ici
Ɓaɓangu a ɗagoni | Mon père est en ville
Ra fetre v̄anu | Nous sommes bien ici
Wa ha maɓaɓawo | Ils sont chez leurs parents
Fi za muroni | Les poissons sont dans la rivière
Wakati wa mwema | Le temps est beau
Ra uku | Il fait nuit (Nous sommes la nuit)
Mwenyewe kasi | Le propriétaire n'est pas là
B) AU PRÉSENT HABITUEL : | RADICAL -Ø
Nyumba ini yangu | C'est ma maison | (maison-ci mienne)
Mwana wangu muzuri | Mon enfant est beau | (enfant à moi beau)
Wanatsa wale watiti | Ces enfants sont petits | (enfants là petits)
Ini yangu, iyo yaho | Ceci est à moi, cela est à toi | (ceci à moi, cela à toi)
C) A L'ACCOMPLI : | RADICAL -KA
FORME AFFIRMATIVE | FORME NÉGATIVE
TSIKA
UKA
AKA
RIKA
MUKA
WAKA | j'étais
tu étais
il / elle était
nous étions
vous étiez
ils / elles étaient | TSAKA
KWAKA
KAKA
KARAKA
KAMWAKA
KAWAKA | je n'étais pas
tu n'étais pas
il / elle n'était pas
nous n'étions pas
vous n'étiez pas
ils / elles n'étaient pas
UKA
IKA
LIKA
YAKA
ZIKA | (Cl 3 - 11 - 14)
(Cl 4 - 7 - 9)
(Cl 5)
(Cl 6)
(Cl 8 - 10) | KAUKA
KAIKA
KALIKA
KAYAKA
KAZIKA | (Cl 3 - 11 - 14)
(Cl 4 - 7 - 9)
(Cl 5)
(Cl 6)
(Cl 8 - 10)
D) AU FUTUR : | RADICAL -KA
FORME AFFIRMATIVE | FORME NÉGATIVE
NITSOKA
UTSOKA
ATSOKA
RITSOKA
MUTSOKA
WATSOKA | je serai
tu seras
il / elle sera
nous serons
vous serez
ils / elles seront | TSITSOKA
KUTSOKA
KATSOKA
KARITSOKA
KAMUTSOKA
KAWATSOKA | je ne serai pas
tu ne seras pas
il / elle ne sera pas
nous ne serons pas
vous ne serez pas
ils / elles ne seront pas
UTSOKA
ITSOKA
LITSOKA
YATSOKA
ZITSOKA | (Cl 3 - 11 - 14)
(Cl 4 - 7 - 9)
(Cl 5)
(Cl 6)
(Cl 8 - 10) | KAUTSOKA
KAITSOKA
KALITSOKA
KAYATSOKA
KAZITSOKA | (Cl 3 - 11 - 14)
(Cl 4 - 7 - 9)
(Cl 5)
(Cl 6)
(Cl 8 - 10)
E) AU SUBJONCTIF : | RADICAL -K(A)-E
FORME AFFIRMATIVE | FORME NÉGATIVE
NIKE
UKE
AKE
RIKE
MUKE
WAKE | que je sois
que tu sois
qu'il / elle soit
que nous soyons
que vous soyez
qu'ils / elles soient | NISIKE
USIKE
ASIKE
RISIKE
ASIKE
WASIKE | que je ne sois pas
que tu ne sois pas
qu'il / elle ne soit pas
que nous ne soyons pas
que vous ne soyez pas
qu'ils / elles ne soient pas
UKE
IKE
LIKE
YAKE
ZIKE | (Cl 3 - 11 - 14)
(Cl 4 - 7 - 9)
(Cl 5)
(Cl 6)
(Cl 8 - 10) | USIKE
ISIKE
LISIKE
YASIKE
ZISIKE | (Cl 3 - 11 - 14)
(Cl 4 - 7 - 9)
(Cl 5)
(Cl 6)
(Cl 8 - 10)
Muke v̄wamoja na wasi | Soyez avec nous
Ilazimu wananya watru-ɓaɓana wananya watru-mama wake sawa | Il faut que les frères et les sœurs soient égaux
F) A L'IMPÉRATIF : | RADICAL -KA
Ka hashiri umwelewe mwandzani. | Sois vigilant pour comprendre un ami.
G) POUR TRADUIRE "C'EST" : | ƊE
Hoho ɗe mbani ? | Qui est-ce qui est là ?
Mbani ɗe aja ? | Qui est-ce qui est venu ?
Mbani ɗe anihirao ? | Qui est-ce qui m'appelle ?
V̄anu ɗe ha mushe wangu | Ici c'est chez ma femme
Iyo ɗe shahula mwafaka ya mwana zaza | C'est la nourriture qui convient pour un bébé
Jwayi lini tsi djema | Cet œuf n'est pas bon
Gari lini tsi langu | Ce n'est pas ma voiture
Tsiɗe ha ɓaɓangu | Ce n'est pas chez mon père
Tsi fi, tsi nyama | Ce n'est ni poisson, ni viande
H) POUR TRADUIRE "IL Y A" : | V̄WA
V̄wa maji v̄anu | Il y a de l'eau ici
V̄wa watru wengi leo | Il y a beaucoup de gens aujourd'hui
V̄wa hari | Il fait chaud (il y a de la chaleur)
V̄wa ɓaridi | Il fait froid (il y a du froid)
- V̄wa maji ? | - Y a-t-il de l'eau ? | - Kav̄u. | - Il n'y en a pas.
V̄utsoka kula uzitsahao | Il y aura tout ce que tu veux
Kav̄utsoka maji meso | Il n'y aura pas d'eau demain
V̄uka tadjiri, v̄uka masikini | Il y avait un riche, il y avait un pauvre
V̄uka mutru-ɓaɓa na mutru-mama | Il y avait un homme et une femme
I) POUR TRADUIRE "IL Y EST" | A V̄AV̄O
- Mutru-ɓaɓa a ɗagoni ? | - L'homme est à la maison ?
- Kav̄o. | - Il n'y est pas.
Ɓanga, ma- | une cuisine, des -- | Feliki, ma- | une brède, des --
Ɓaraza, ma- | une véranda, des -- | Fenesi, ma- | un jaque, des --
Ɓaribari, ma- | un mouton, des -- | Frãmpe, ma- | un fruit à pain, des --
Ɓengani, ma- | une aubergine, des -- | Jimbi, ma- | un songe, des --
Bibi, ma- | un insecte, des -- | Kowa, ma- | un escargot, des --
Ɓwe, mawe | une pierre, des -- | Sindza, ma- | une banane douce, des --
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 17,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 17.",
    content: `

Chapitre 18 - Le Verbe UKA NA = avoir

On utilise UKA NA pour exprimer l'idée d'avoir, de posséder quelque chose, ce qui signifie littéralement "être avec".


Tout comme le verbe UKA = "être" dont il est dérivé, le verbe UKA NA possède plusieurs radicaux, liés ensemble par le sens de = "avoir".


A NOTER : 
Au présent actuel affirmatif et au présent habituel négatif, la particule "NA" est accolée directement au préfixe sujet, en raison de l'absence de radical verbal. On a choisi de garder NA séparée du verbe aux autres temps et aux autres formes.

 1. CONJUGAISON DU VERBE "UKA NA" : 

 A) AU PRÉSENT ACTUEL : 

A la forme affirmative, "NA" est directement accroché aux préfixes sujets, en l'absence de tout radical verbal. (On parle de radical Ø.)
A la forme négative, les préfixes sujets négatifs sont affixés au radical verbal SI (conjugaison semblable à
celle du présent actuel négatif de UKA = être) et sont suivis de la particule NA.










CLASSE
AFFIRMATIF
Equivalent
NÉGATIF
Equivalent

1
2
Cl 1 Mutru 3
1
2
Cl 2  Watru 3
TSINA
UNA
ANA
RINA
MUNA
WANA
j'ai
tu as
il / elle a
nous avons
vous avez
ils / elles ont
TSISI NA
KUSI NA
KASI NA
KARISI NA
KAMUSI NA
KAWASI NA
je n'ai pas
tu n'as pas
il / elle n'a pas
nous n'avons pas
vous n'avez pas
ils / elles n'ont pas

Cl 3  Muhono
Cl 4  Mihono
UNA
INA
il / elle a
ils / elles ont
KAUSI NA
KAISI NA
il / elle n'a pas
ils / elles n'ont pas

Cl 5  Gari
Cl 6  Magari
LINA
YANA
il / elle a
ils / elles ont
KALISI NA
KAYASI NA
il / elle n'a pas
ils / elles n'ont pas

Cl 7  Shiri
Cl 8 Ziri
INA
ZINA
il / elle a
ils / elles ont
KAISI NA
KAZISI NA
il / elle n'a pas
ils / elles n'ont pas

Cl 9  Nguo
Cl 10   Nguo
INA
ZINA
il / elle a
ils / elles ont
KAISI NA
KAZISI NA
il / elle n'a pas
ils / elles n'ont pas

Cl 11  Uku
UNA
il / elle a
KAUSI NA
il / elle n'a pas


EXEMPLES : 





Ɓaɓangu ana wana wararu
Mon père a trois enfants
Rina nguo nyengi
Nous avons beaucoup de vêtements
Hamadi kasi na magoshi
Ahmed n'a pas de chaussures
Wasi karisi na nyumba
Nous n'avons pas de maison
Maji yayo yana ɓaridi
Cette eau est froide. (cette eau a du froid)


 B)  AU PRÉSENT HABITUEL : 

A la forme affirmative, les pronoms personnels autonomes (P.P.A.) sont suivis de la particule  NA, en l'absence de tout radical verbal.

 PRONOM PERSONNEL AUTONOME + NA 

A la forme négative, les P.P.A. sont suivis des préfixes sujets négatifs liés à la particule -NA.
Là encore, le radical verbal est absent. Par ailleurs, on remarque que la première personne du singulier
présente un risque de confusion avec la forme affirmative du présent actuel.

 P.P.A. + PRÉFIXE SUJET NÉGATIF -NA 









FORME AFFIRMATIVE
FORME NÉGATIVE
WAMI   NA
WAWE   NA
WAYE   NA
WASI   NA
WANYU  NA
WAWO   NA
j'ai
tu as
il / elle a
nous avons
vous avez
ils / elles ont
WAMI  TSINA
WAWE      KUNA
WAYE      KANA
WASI      KARISINA
WANYU     KAMUNA
WAWO      KAWANA
je n'ai pas
tu n'as pas
il / elle n'a pas
nous n'avons pas
vous n'avez pas
ils / elles n'ont pas


EXEMPLES : 






Wami na nyombe zangu
J'ai mes vaches
Shemedji kuna nyombe
Beau-frère, tu n'as pas de vaches
Mutru kana lahe
Quelqu'un qui n'a rien a lui
Mama wangu wawe kuna mufano
Ma mère, tu n'as pas d'exemple


 C)  A L'ACCOMPLI : 









FORME AFFIRMATIVE
FORME NÉGATIVE
TSIKA   NA
UKA   NA
AKA   NA
RIKA  NA
MUKA  NA
WAKA  NA
j'avais
tu avais
il / elle avait
nous avions
vous aviez
ils / elles avaient
TSAKA NA
KWAKA NA
KAKA NA
KARAKA NA
KAMWAKA NA
KAWAKA NA
je n'avais pas
tu n'avais pas
il / elle n'avait pas
nous n'avions pas
vous n'aviez pas
ils / elles n'avaient pas


EXEMPLES : 






Aka na shitswa ɓole na tsingo ndrile
Il avait une grosse tête et un long cou
Mwiri unu uka na mafulera mazuri
Cet arbre avait des belles fleurs
Tsika na wanyawe wengi Farantsa
J'avais beaucoup d'amis en France
Watru masikini kawaka na shahula
Les pauvres n'avaient pas de nourriture


 2. LE VERBE "UPARA" : 

Il existe d'autres verbes en shimaore pour traduire la notion d'avoir et de possession, notamment le verbe UPARA, qui signifie : avoir, obtenir, trouver, recevoir, gagner, atteindre, arriver à...
Ce verbe se conjugue comme tous les verbes ordinaires.

EXEMPLES : 






Mama apara mwana zaza
Maman a eu un bébé
Ritsopara fi leo ujoni
Nous aurons du poisson ce soir
Tsipara ɓarua
J'ai eu (reçu) une lettre
Upara mushahara waho
Tu as eu ton salaire
Tsapara nafasi
Je n'ai pas le temps



TSINA NDZA NA NYORA NAWEJ'ai faim et soif de toi

PROVERBE : 

UV̄ENDZA KAINA ADJALI TSI UV̄ENDZAAimer sans risque n'est pas aimer


VOCABULAIRE








Ufariki dunia
décéder
Usalimu
saluer
Ufunga
attacher, lier
Usherehi
fêter, commémorer
Uharaya
refuser
Usikinia
plaindre, avoir pitié de
Ukosa
manquer
Utshipu
se taire
Ulaga
faire ses adieux à
Utwali
apprendre par cœur
Umia
implorer, demander
Uwanisa
partager


EXERCICES

EXERCICE 1 :  Traduisez en shimaore :


Tu as, elle a, ils ont, nous avons, j'ai, vous avez,      il a, tu n'as pas, il n'a pas, elles n'ont pas, nous n'avons pas, je n'ai pas, vous n'avez pas, elle n'a pas.
As-tu un livre  ?  L'enfant a une grosse tête, ce jeune a un  couteau, il a un livre, nous avons beaucoup d'animaux, la femme a beaucoup d'enfants, ces enfants ont un bon professeur, avez-vous des papayes ?      Juma a des chaussures propres, j'ai  une  tasse  neuve, ce village a  beaucoup de villageois, cet animal a beaucoup d'insectes, vous avez les  mains noires, cette  montagne  a  beaucoup  d'arbres, ce  lit  a  une  moustiquaire, nous  n'avons  pas d'enfants, avez-vous  des  œufs  ?  -  J'en  ai. Ont-ils  des  livres  ?  -  Ils  en  ont. Le  chauffeur n'a  pas d'outils, le villageois a un grand terrain.


EXERCICE 2 :  Traduisez en français :



Una pasiporo yaho ?  - Tsinayo.
Tsina zitru nyengi.
Tsisi na shio yangu.
Shinyama ini ina mindru minne.
Mwana masikini kasi na shahula kula suku.
Shisiwa ya maore ina miri mengi.
Mwiri unu una marundra mema.
Uka na mushahara leo ?
Shitrandra ini kaisi na mustakera.
Rina musomo wa shimaore av̄asa v̄anu.




Chapitre précédentChapitre suivantTable des matières |  | Tout comme le verbe UKA = "être" dont il est dérivé, le verbe UKA NA possède plusieurs radicaux, liés ensemble par le sens de = "avoir". | CLASSE | AFFIRMATIF | Equivalent | NÉGATIF | Equivalent | 1
2
Cl 1 Mutru 3
1
2
Cl 2  Watru 3 | TSINA
UNA
ANA
RINA
MUNA
WANA | j'ai
tu as
il / elle a
nous avons
vous avez
ils / elles ont | TSISI NA
KUSI NA
KASI NA
KARISI NA
KAMUSI NA
KAWASI NA | je n'ai pas
tu n'as pas
il / elle n'a pas
nous n'avons pas
vous n'avez pas
ils / elles n'ont pas | Cl 3  Muhono
Cl 4  Mihono | UNA
INA | il / elle a
ils / elles ont | KAUSI NA
KAISI NA | il / elle n'a pas
ils / elles n'ont pas | Cl 5  Gari
Cl 6  Magari | LINA
YANA | il / elle a
ils / elles ont | KALISI NA
KAYASI NA | il / elle n'a pas
ils / elles n'ont pas | Cl 7  Shiri
Cl 8 Ziri | INA
ZINA | il / elle a
ils / elles ont | KAISI NA
KAZISI NA | il / elle n'a pas
ils / elles n'ont pas | Cl 9  Nguo
Cl 10   Nguo | INA
ZINA | il / elle a
ils / elles ont | KAISI NA
KAZISI NA | il / elle n'a pas
ils / elles n'ont pas | Cl 11  Uku | UNA | il / elle a | KAUSI NA | il / elle n'a pas | Ɓaɓangu ana wana wararu | Mon père a trois enfants | Rina nguo nyengi | Nous avons beaucoup de vêtements | Hamadi kasi na magoshi | Ahmed n'a pas de chaussures | Wasi karisi na nyumba | Nous n'avons pas de maison | Maji yayo yana ɓaridi | Cette eau est froide. (cette eau a du froid) | FORME AFFIRMATIVE | FORME NÉGATIVE | WAMI   NA
WAWE   NA
WAYE   NA
WASI   NA
WANYU  NA
WAWO   NA | j'ai
tu as
il / elle a
nous avons
vous avez
ils / elles ont | WAMI  TSINA
WAWE      KUNA
WAYE      KANA
WASI      KARISINA
WANYU     KAMUNA
WAWO      KAWANA | je n'ai pas
tu n'as pas
il / elle n'a pas
nous n'avons pas
vous n'avez pas
ils / elles n'ont pas | Wami na nyombe zangu | J'ai mes vaches | Shemedji kuna nyombe | Beau-frère, tu n'as pas de vaches | Mutru kana lahe | Quelqu'un qui n'a rien a lui | Mama wangu wawe kuna mufano | Ma mère, tu n'as pas d'exemple | FORME AFFIRMATIVE | FORME NÉGATIVE | TSIKA   NA
UKA   NA
AKA   NA
RIKA  NA
MUKA  NA
WAKA  NA | j'avais
tu avais
il / elle avait
nous avions
vous aviez
ils / elles avaient | TSAKA NA
KWAKA NA
KAKA NA
KARAKA NA
KAMWAKA NA
KAWAKA NA | je n'avais pas
tu n'avais pas
il / elle n'avait pas
nous n'avions pas
vous n'aviez pas
ils / elles n'avaient pas | Aka na shitswa ɓole na tsingo ndrile | Il avait une grosse tête et un long cou | Mwiri unu uka na mafulera mazuri | Cet arbre avait des belles fleurs | Tsika na wanyawe wengi Farantsa | J'avais beaucoup d'amis en France | Watru masikini kawaka na shahula | Les pauvres n'avaient pas de nourriture | Mama apara mwana zaza | Maman a eu un bébé | Ritsopara fi leo ujoni | Nous aurons du poisson ce soir | Tsipara ɓarua | J'ai eu (reçu) une lettre | Upara mushahara waho | Tu as eu ton salaire | Tsapara nafasi | Je n'ai pas le temps | Ufariki dunia | décéder | Usalimu | saluer | Ufunga | attacher, lier | Usherehi | fêter, commémorer | Uharaya | refuser | Usikinia | plaindre, avoir pitié de | Ukosa | manquer | Utshipu | se taire | Ulaga | faire ses adieux à | Utwali | apprendre par cœur | Umia | implorer, demander | Uwanisa | partager | Chapitre précédent | Chapitre suivant | Table des matières
 | Tout comme le verbe UKA = "être" dont il est dérivé, le verbe UKA NA possède plusieurs radicaux, liés ensemble par le sens de = "avoir".
CLASSE | AFFIRMATIF | Equivalent | NÉGATIF | Equivalent
1
2
Cl 1 Mutru 3
1
2
Cl 2  Watru 3 | TSINA
UNA
ANA
RINA
MUNA
WANA | j'ai
tu as
il / elle a
nous avons
vous avez
ils / elles ont | TSISI NA
KUSI NA
KASI NA
KARISI NA
KAMUSI NA
KAWASI NA | je n'ai pas
tu n'as pas
il / elle n'a pas
nous n'avons pas
vous n'avez pas
ils / elles n'ont pas
Cl 3  Muhono
Cl 4  Mihono | UNA
INA | il / elle a
ils / elles ont | KAUSI NA
KAISI NA | il / elle n'a pas
ils / elles n'ont pas
Cl 5  Gari
Cl 6  Magari | LINA
YANA | il / elle a
ils / elles ont | KALISI NA
KAYASI NA | il / elle n'a pas
ils / elles n'ont pas
Cl 7  Shiri
Cl 8 Ziri | INA
ZINA | il / elle a
ils / elles ont | KAISI NA
KAZISI NA | il / elle n'a pas
ils / elles n'ont pas
Cl 9  Nguo
Cl 10   Nguo | INA
ZINA | il / elle a
ils / elles ont | KAISI NA
KAZISI NA | il / elle n'a pas
ils / elles n'ont pas
Cl 11  Uku | UNA | il / elle a | KAUSI NA | il / elle n'a pas
Ɓaɓangu ana wana wararu | Mon père a trois enfants
Rina nguo nyengi | Nous avons beaucoup de vêtements
Hamadi kasi na magoshi | Ahmed n'a pas de chaussures
Wasi karisi na nyumba | Nous n'avons pas de maison
Maji yayo yana ɓaridi | Cette eau est froide. (cette eau a du froid)
FORME AFFIRMATIVE | FORME NÉGATIVE
WAMI   NA
WAWE   NA
WAYE   NA
WASI   NA
WANYU  NA
WAWO   NA | j'ai
tu as
il / elle a
nous avons
vous avez
ils / elles ont | WAMI  TSINA
WAWE      KUNA
WAYE      KANA
WASI      KARISINA
WANYU     KAMUNA
WAWO      KAWANA | je n'ai pas
tu n'as pas
il / elle n'a pas
nous n'avons pas
vous n'avez pas
ils / elles n'ont pas
Wami na nyombe zangu | J'ai mes vaches
Shemedji kuna nyombe | Beau-frère, tu n'as pas de vaches
Mutru kana lahe | Quelqu'un qui n'a rien a lui
Mama wangu wawe kuna mufano | Ma mère, tu n'as pas d'exemple
FORME AFFIRMATIVE | FORME NÉGATIVE
TSIKA   NA
UKA   NA
AKA   NA
RIKA  NA
MUKA  NA
WAKA  NA | j'avais
tu avais
il / elle avait
nous avions
vous aviez
ils / elles avaient | TSAKA NA
KWAKA NA
KAKA NA
KARAKA NA
KAMWAKA NA
KAWAKA NA | je n'avais pas
tu n'avais pas
il / elle n'avait pas
nous n'avions pas
vous n'aviez pas
ils / elles n'avaient pas
Aka na shitswa ɓole na tsingo ndrile | Il avait une grosse tête et un long cou
Mwiri unu uka na mafulera mazuri | Cet arbre avait des belles fleurs
Tsika na wanyawe wengi Farantsa | J'avais beaucoup d'amis en France
Watru masikini kawaka na shahula | Les pauvres n'avaient pas de nourriture
Mama apara mwana zaza | Maman a eu un bébé
Ritsopara fi leo ujoni | Nous aurons du poisson ce soir
Tsipara ɓarua | J'ai eu (reçu) une lettre
Upara mushahara waho | Tu as eu ton salaire
Tsapara nafasi | Je n'ai pas le temps
Ufariki dunia | décéder | Usalimu | saluer
Ufunga | attacher, lier | Usherehi | fêter, commémorer
Uharaya | refuser | Usikinia | plaindre, avoir pitié de
Ukosa | manquer | Utshipu | se taire
Ulaga | faire ses adieux à | Utwali | apprendre par cœur
Umia | implorer, demander | Uwanisa | partager
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 18,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 18.",
    content: `

Chapitre 19 - Les Adverbes

RAPPEL : 
Un adverbe est un mot invariable qui permet de dire comment une action se déroule (vite, lentement, etc..), avec quelle fréquence (souvent, quelquefois, jamais, etc..). Il permet d'exprimer des possibilités ou des certitudes (peut-être, certainement, etc..), ou encore de qualifier un adjectif (très grand, assez petit, etc..)
En shimaore, l'adverbe est placé après le verbe, sauf dans quelques cas particuliers.

 1. QUELQUES ADVERBES COURANTS : 


AdverbeTraductionAdverbeTraduction
Daharisouvent
Mbiovite
Daimatoujours
Mkinipeut-être
Fetrebien
Naimal, mauvais
Halisivraiment, parfaitement
Rabuzid'abord
Harakarapidement, vite
Rahapas encore / davantage
Haswasurtout, spécialement
Rasaencore
Kabisatout-à-fait
Swafibien, vraiment
Kadirienviron, à peu près
Taratiɓurégulièrement, calmement
Kamwedéjà, tout de suite
Tsenaencore, à nouveau
Kiasiassez
Tuseulement
Labdapeut-être
V̄olev̄olelentement, doucement
Madzadéjà
Wajauaussi
Mapematôt
Zaidiplus, davantage


 2. ADVERBES COMPOSÉS : 


AdverbeTraduction
Ha ɓahati ndjemapar chance
Ha ɓahati mbovupar malheur
Ha djumladans l'ensemble
Ha kawaidacomme d'habitude
Ha muhtaswarien bref, en résumé
Ha namna iyode cette façon
Ha namna yanginaautrement
Ha nguvufortement, trop
Ha uhafulabrusquement
Ha wengien grand nombre
Dahar tukutout le temps
Daiman abadapour toujours
Kiasi ya utoshasuffisamment
Mwana paviun petit peu
Mwana shitekuun tout petit peu


 3. QUELQUES EXEMPLES D'EMPLOI : 


1. Fanya haraka !Fais vite ! / Dépêche-toi !
2. Ira haraka pompie !Appelle vite les pompiers !
3. Toa kaɓisa !Enlève complètement !
4. Ko raɓuzi !Viens immédiatement !
5. Madza rijadza.Nous sommes déjà au complet.
6. Madza aja / Amadza aja.Il est déjà arrivé.
7. Aja kamwe.Il est déjà arrivé.
8. Nisishuka kamwe v̄anu.Je descends juste là.
9. Waye ufanya hazi fetre.Il travaille bien.
10. Waye mwanamtsa mwema swafi.C'est un très bon enfant.
11. Isijiva swafi !C'est très bon !
12. Shukidza thamani mwana pav̄i !Baisse un peu le prix !
13. Ya ɓole ha nguvu na wami.C'est trop grand pour moi.
14. Urendre jeje Ɓweni ? - Ndjema tu.Comment allez-vous madame ? - Très bien.
15. Usije tsena !Ne reviens pas !
16. Usije raha !Ne viens pas tout de suite !
17. Narendre raha polisi kaja !Partons avant que la police n'arrive !
18. Wawe mkini kumji Rastami.Peut-être ne connais-tu pas Rastami.
19. Mkini oho mbali ? - Ãhã, kariɓu tu.Peut-être est-ce loin ? - Non, c'est tout près.


VOCABULAIRE


Sha, zya / zisha
un doigt, des --
Shilevu, zi-
un menton, des --
Shama, zama
une association, des --
Shemizi, zi-
une chemise, des --
Shifungo, zi-
une articulation, des --
Shiromani, zi-
une cotonnade imprimée
Shihonko, zi-
une souche d'arbre, des --
Shurungu
un oignon, des --
Shikao, zi-
un comité, des --
Shurungu vujede l'ail
Shikoi, zi-
un pagne d'homme, des --
Shisima, zi-
un puits, une citerne, des --


EXERCICES

EXERCICE 1 : Traduisez en shimaore :


Vite, lentement, bien, mal, environ, tout-à-fait, peut-être, surtout, également, aussi, souvent, rapidement, seulement,  d'abord, déjà, par chance, en bref, trop, un petit peu, autrement.
Fais vite ! Viens tout-de-suite ! Enlève complètement !    Baisse un peu le prix ! Ils viennent peut-être aujourd'hui, les enfants sont déjà arrivés, le pêcheur n'est pas encore revenu, j'ai travaillé vite, il a vu seulement son père, le propriétaire est encore venu.


EXERCICE 2 : Traduisez en français :



Arudi raha uku kawangia.
Tsifanya hazi haraka.
Nisuja kamwe.
Madza apara maha kumi yahe.
Mama aja na mwana zaza tu.
Waye mutru muhali kaɓisa.
Mwanamtsa ule muzuri halisi.
Imbwa kali ireme manyo watru wengi tsena.
Afanya hazi mwana pav̄i leo.
Mutru mama unu urongoa v̄olev̄ole kaɓisa.





Chapitre précédentChapitre suivantTable des matières | Adverbe | Traduction | Adverbe | Traduction | Dahari | souvent | Mbio | vite | Daima | toujours | Mkini | peut-être | Fetre | bien | Nai | mal, mauvais | Halisi | vraiment, parfaitement | Rabuzi | d'abord | Haraka | rapidement, vite | Raha | pas encore / davantage | Haswa | surtout, spécialement | Rasa | encore | Kabisa | tout-à-fait | Swafi | bien, vraiment | Kadiri | environ, à peu près | Taratiɓu | régulièrement, calmement | Kamwe | déjà, tout de suite | Tsena | encore, à nouveau | Kiasi | assez | Tu | seulement | Labda | peut-être | V̄olev̄ole | lentement, doucement | Madza | déjà | Wajau | aussi | Mapema | tôt | Zaidi | plus, davantage | Adverbe | Traduction | Ha ɓahati ndjema | par chance | Ha ɓahati mbovu | par malheur | Ha djumla | dans l'ensemble | Ha kawaida | comme d'habitude | Ha muhtaswari | en bref, en résumé | Ha namna iyo | de cette façon | Ha namna yangina | autrement | Ha nguvu | fortement, trop | Ha uhafula | brusquement | Ha wengi | en grand nombre | Dahar tuku | tout le temps | Daiman abada | pour toujours | Kiasi ya utosha | suffisamment | Mwana pavi | un petit peu | Mwana shiteku | un tout petit peu | 1. Fanya haraka ! | Fais vite ! / Dépêche-toi ! | 2. Ira haraka pompie ! | Appelle vite les pompiers ! | 3. Toa kaɓisa ! | Enlève complètement ! | 4. Ko raɓuzi ! | Viens immédiatement ! | 5. Madza rijadza. | Nous sommes déjà au complet. | 6. Madza aja / Amadza aja. | Il est déjà arrivé. | 7. Aja kamwe. | Il est déjà arrivé. | 8. Nisishuka kamwe v̄anu. | Je descends juste là. | 9. Waye ufanya hazi fetre. | Il travaille bien. | 10. Waye mwanamtsa mwema swafi. | C'est un très bon enfant. | 11. Isijiva swafi ! | C'est très bon ! | 12. Shukidza thamani mwana pav̄i ! | Baisse un peu le prix ! | 13. Ya ɓole ha nguvu na wami. | C'est trop grand pour moi. | 14. Urendre jeje Ɓweni ? - Ndjema tu. | Comment allez-vous madame ? - Très bien. | 15. Usije tsena ! | Ne reviens pas ! | 16. Usije raha ! | Ne viens pas tout de suite ! | 17. Narendre raha polisi kaja ! | Partons avant que la police n'arrive ! | 18. Wawe mkini kumji Rastami. | Peut-être ne connais-tu pas Rastami. | 19. Mkini oho mbali ? - Ãhã, kariɓu tu. | Peut-être est-ce loin ? - Non, c'est tout près. | Sha, zya / zisha | un doigt, des -- | Shilevu, zi- | un menton, des -- | Shama, zama | une association, des -- | Shemizi, zi- | une chemise, des -- | Shifungo, zi- | une articulation, des -- | Shiromani, zi- | une cotonnade imprimée | Shihonko, zi- | une souche d'arbre, des -- | Shurungu | un oignon, des -- | Shikao, zi- | un comité, des -- | Shurungu vuje | de l'ail | Shikoi, zi- | un pagne d'homme, des -- | Shisima, zi- | un puits, une citerne, des -- | Chapitre précédent | Chapitre suivant | Table des matières
Adverbe | Traduction | Adverbe | Traduction
Dahari | souvent | Mbio | vite
Daima | toujours | Mkini | peut-être
Fetre | bien | Nai | mal, mauvais
Halisi | vraiment, parfaitement | Rabuzi | d'abord
Haraka | rapidement, vite | Raha | pas encore / davantage
Haswa | surtout, spécialement | Rasa | encore
Kabisa | tout-à-fait | Swafi | bien, vraiment
Kadiri | environ, à peu près | Taratiɓu | régulièrement, calmement
Kamwe | déjà, tout de suite | Tsena | encore, à nouveau
Kiasi | assez | Tu | seulement
Labda | peut-être | V̄olev̄ole | lentement, doucement
Madza | déjà | Wajau | aussi
Mapema | tôt | Zaidi | plus, davantage
Adverbe | Traduction
Ha ɓahati ndjema | par chance
Ha ɓahati mbovu | par malheur
Ha djumla | dans l'ensemble
Ha kawaida | comme d'habitude
Ha muhtaswari | en bref, en résumé
Ha namna iyo | de cette façon
Ha namna yangina | autrement
Ha nguvu | fortement, trop
Ha uhafula | brusquement
Ha wengi | en grand nombre
Dahar tuku | tout le temps
Daiman abada | pour toujours
Kiasi ya utosha | suffisamment
Mwana pavi | un petit peu
Mwana shiteku | un tout petit peu
1. Fanya haraka ! | Fais vite ! / Dépêche-toi !
2. Ira haraka pompie ! | Appelle vite les pompiers !
3. Toa kaɓisa ! | Enlève complètement !
4. Ko raɓuzi ! | Viens immédiatement !
5. Madza rijadza. | Nous sommes déjà au complet.
6. Madza aja / Amadza aja. | Il est déjà arrivé.
7. Aja kamwe. | Il est déjà arrivé.
8. Nisishuka kamwe v̄anu. | Je descends juste là.
9. Waye ufanya hazi fetre. | Il travaille bien.
10. Waye mwanamtsa mwema swafi. | C'est un très bon enfant.
11. Isijiva swafi ! | C'est très bon !
12. Shukidza thamani mwana pav̄i ! | Baisse un peu le prix !
13. Ya ɓole ha nguvu na wami. | C'est trop grand pour moi.
14. Urendre jeje Ɓweni ? - Ndjema tu. | Comment allez-vous madame ? - Très bien.
15. Usije tsena ! | Ne reviens pas !
16. Usije raha ! | Ne viens pas tout de suite !
17. Narendre raha polisi kaja ! | Partons avant que la police n'arrive !
18. Wawe mkini kumji Rastami. | Peut-être ne connais-tu pas Rastami.
19. Mkini oho mbali ? - Ãhã, kariɓu tu. | Peut-être est-ce loin ? - Non, c'est tout près.
Sha, zya / zisha | un doigt, des -- | Shilevu, zi- | un menton, des --
Shama, zama | une association, des -- | Shemizi, zi- | une chemise, des --
Shifungo, zi- | une articulation, des -- | Shiromani, zi- | une cotonnade imprimée
Shihonko, zi- | une souche d'arbre, des -- | Shurungu | un oignon, des --
Shikao, zi- | un comité, des -- | Shurungu vuje | de l'ail
Shikoi, zi- | un pagne d'homme, des -- | Shisima, zi- | un puits, une citerne, des --
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 19,
    title: "Leçon 19",
    description: "Contenu du chapitre 19.",
    content: `

Chapitre 20 - Les Noms : Le Genre N-

Le genre N- (Classes 9 / 10) est l'un des genres les plus larges : il regroupe des noms de personnes, d'animaux, de plantes, d'aliments, d'objets de la vie courante, d'éléments naturels, des noms abstraits, etc..
Beaucoup de noms empruntés au français sont absorbés dans le genre N-.


Le genre N- est le seul genre en shimaore qui comporte des noms commençant par le préfixe N-.




Tous les noms du genre N- ne commencent pas forcément par N-

Pour des raisons phonétiques le préfixe N- se change en M- devant B et P.
Une autre particularité de cette classe est que le nom a une forme identique au singulier et au pluriel.








Cl 9 Singulier :
préfixe Ø-
HAZI
= un travail

 
préfixe N-
NGUO
= un vêtement

Cl 10 Pluriel :
préfixe  Ø-
HAZI
= des travaux

 
préfixe N-
NGUO
= des vêtements


En l'absence de préfixes de classe distinctifs, ce sont les accords de classe à l'intérieur de la phrase
(préfixe verbal, démonstratif, possessif, etc..) qui permettent de distinguer le singulier du pluriel. Ainsi :









Singulier
Pluriel

INGUO ILE
= ce vêtement-là
ZINGUO ZILE
= ces vêtements-là
INGUO YANGU
=  mon vêtement
ZINGUO ZANGU
= mes vêtements


 1. QUELQUES NOMS DU GENRE N- (Classes 9 / 10) : 


  1. PERSONNES :  








Singulier
Pluriel
Singulier
Pluriel
Ɓamuhe
gendre, beau-père
Valahi
beau-frère
Fulani
un tel, une telle
Yatima
un orphelin
Nyadza
belle-fille, belle-mère
 
 


  2. VIE COURANTE :  








SingulierPlurielSingulierPluriel
Ɓazari
un marché
Marike
l'argent
Ɓiasharale commerce
Thamanila valeur, le prix
Damule sang
Roboune robe, des --
Haziun travail, des --
Tsindzile sommeil


  3. LA MAISON :  








SingulierPlurielSingulierPluriel
Dara
un drap, des --
Range
la couleur, la peinture
Lakuruune cour, des --
Saɓuniun savon, des --
Mezaune table, des --
Sahaniune assiette, des --
Nyumbaune maison, des --
Veraun verre, des --


  4. NATURE :  








Singulier
Pluriel
Singulier
Pluriel
Ardhwi
la Terre
Hari
la chaleur, la transpiration 
Ɓahari
la mer
Hawa
l'air, l'atmosphère
Ɓaridi
le froid
Nuru
la clarté, la lumière
Juwale soleil
Vuwa la pluie


  5. NOMS ABSTRAITS :  








Singulier
Pluriel
Singulier
Pluriel
Adjali
un accident
Hasira
la colère
Ɓahati
la chance
Hatwari
le danger
Dunia
le monde, ici-bas
Nguvu
la force
Fikira
une idée, une pensée
Niya
une intention, la volonté


  6. ANIMAUX :  








Singulier
Pluriel
Singulier
Pluriel
Komba
un maki
Nyoha
un serpent
Mbuzi
une chèvre
Nyombe
une vache
Mbwa
un chien
Nyoshi
une abeille
Ndzi
une mouche
Paha / Mpaha
un chat


  7. ALIMENTS :  








Singulier
Pluriel
Singulier
Pluriel
Kafe
le café, du café
Samuli
le beurre
Ngizi
le miel
Shingo
le sel
Nyama
la viande
Sukari
le sucre
Putu
le piment
Tshai, Dite
le thé, du thé


Voir aussi les listes de vocabulaire complémentaires :

Chapitre 22 (Animaux)
Chapitre 31 (Objet de la vie courante)
Chapitre 35 (Eléments naturels, etc..)
Chapitre 40 (Mots abstraits, etc..)
Chapitre 41 (Mots concrets divers, etc..)
Chapitre 43 (Mots abstraits, etc..)
Chapitre 45 (Fruits, légumes, épices)
Chapitre 48 (Mots abstraits, etc..)
Chapitre 49 (Corps humain)


 2. LE PRÉ-PRÉFIXE DÉFINI : 

Il se place devant le préfixe de classe du nom et fonctionne comme un article défini.

Cl 9 (Singulier) :
I-   
NGUO
= un vêtement
INGUO
= le vêtement
 
Cl 10 (Pluriel) :
ZI-   
ZINGUO
= des vêtements
ZINGUO
= les vêtements




Le pré-préfixe défini joue aussi le rôle d'un préfixe de classe pour distinguer le singulier du pluriel.



HAZI
= un travail / des travaux
IHAZI   
= un / le travail
 
ZIHAZI   
= des / les travaux


 3. ACCORDS DE CLASSE : 


Adjectif : (Voir : Chapitre 11.)


Classes 9 :Nguoɓole / titi / ndzuzuri / ndzidu / mbovu / mpia / ...
Classes 10 :Nguoɓole / titi / ndzuzuri / ndzidu / mbovu / mpia / ...

Les adjectifs adoptent, soit le préfixe Ø-, soit le préfixe N- (N-, NDZU-, NDZI-, NDRI-, NDJ-, NY-, MB-, MP-) lorsqu'ils s'accordent aux noms de genre N-.
On constate que, tout comme les noms de genre  -N auxquels ils s'accordent, les adjectifs ont une forme identique au singulier et au pluriel.
Adjectifs possessifs :


Classe 9 :
Nguo
yangu / yaho / yahe / yatru / yanyu / yawo
 
=
mon  /  ton  /  son  / notre  /  votre  /  leur
vêtement
 
Classe 10 :
Nguo
zangu / zaho / zahe / zatru / zanyu / zawo
 
=
mes   /   tes   /  ses    /   nos    /   vos     /  leurs
vêtements



Démonstratif :


Classe 9 (Singulier) :Classe 10 (Pluriel) :
Nyumbaini= cette maison-ciNyumbazini= ces maisons-ci
ile= cette maison là-baszile= ces maisons là-bas
iyo= cette maison-làzizo (izo)= ces maisons-là




REMARQUE : 
Lorsque le nom de genre N- représente une personne, il commande un accord sémantique de classes 1 / 2, comme un nom du genre MU-/WA-. Ainsi :


Nyadza wangu muhali         Ma belle-mère est sévère


EXERCICES

EXERCICE 1 : Traduisez en shimaore :


Le monde, une pensée, l'argent, la couleur, la chaleur, le froid, la chance, un accident, un maki, du café, la viande, le piment,    le sang, le commerce, le prix, une tante, un verre, un chat, le sel, la pluie, un chien, une chèvre, la force, un beau-frère, la terre.
Une bonne chance, un grand danger, un petit chat, un travail dur, un nouveau président, ce chien féroce, un long poisson, une grande table, les petites assiettes, une robe rouge, des draps blancs, ma nouvelle maison, de nombreux accidents, les grands verres, un grand marché,    un bon travail, une terrasse ouverte, un orphelin seul, un prix quelconque, une grande volonté, ces nombreuses mouches, cette pluie froide, des mauvaises pensées.


EXERCICE 2 : Traduisez en français :


Raisi,   marike,    fulani,    ɓaridi,    ɓahari,    hari,    hardhwi,     nyoha,    komba,  nyombe,  paha,     ngizi,     ndzi,    nyoshi,     mbuzi,     mbwa,     nyama,  putu,  shingo,    samuli,    niya,   adjali,    hatwari,    hasira,      hazi,    sahani,      saɓuni,  nyumba,   sukari,   ɓaraza.
Ithamani,     inyumba,    imbuzi,     imbwa,     irobo,     ihazi,     isaɓuni,       idara,  inyoha,   ipaha,    ikomba,    ivera,    inyombe,    indzi,    ifikira.
Zihazi, zisahani, zivera, zisaɓuni, zinyumba, zinyombe,  zinyoshi, zimbuzi, ziadjali, zifikira, zirange, zipaha, zikomba, zinyoha, zimbwa.


EXERCICE 3 : Traduisez en français :



Mutru unu ufanya hazi ya hatwari.
Niv̄e saɓuni laini iyo !
Pasi nguo zangu piya !
Nyoshi zizo mbi.
Mutru unu ana nyumba ɓole.
V̄wa ndzi nyengi nyumbani.
Wami tsisi na ɓahati.
Anunua saɓuni zizo rahisi.
Niv̄e kafe au dite !
Watru-mama ufanya ɓiashara ɓazari.




Chapitre précédentChapitre suivantTable des matières |  | Le genre N- est le seul genre en shimaore qui comporte des noms commençant par le préfixe N-. |  | Tous les noms du genre N- ne commencent pas forcément par N- | Cl 9 Singulier : | préfixe Ø- | HAZI | = un travail |  | préfixe N- | NGUO | = un vêtement | Cl 10 Pluriel : | préfixe  Ø- | HAZI | = des travaux |  | préfixe N- | NGUO | = des vêtements | Singulier | Pluriel | INGUO ILE | = ce vêtement-là | ZINGUO ZILE | = ces vêtements-là | INGUO YANGU | =  mon vêtement | ZINGUO ZANGU | = mes vêtements | Singulier | Pluriel | Singulier | Pluriel | Ɓamuhe | gendre, beau-père | Valahi | beau-frère | Fulani | un tel, une telle | Yatima | un orphelin | Nyadza | belle-fille, belle-mère |  |  | Singulier | Pluriel | Singulier | Pluriel | Ɓazari | un marché | Marike | l'argent | Ɓiashara | le commerce | Thamani | la valeur, le prix | Damu | le sang | Robo | une robe, des -- | Hazi | un travail, des -- | Tsindzi | le sommeil | Singulier | Pluriel | Singulier | Pluriel | Dara | un drap, des -- | Range | la couleur, la peinture | Lakuru | une cour, des -- | Saɓuni | un savon, des -- | Meza | une table, des -- | Sahani | une assiette, des -- | Nyumba | une maison, des -- | Vera | un verre, des -- | Singulier | Pluriel | Singulier | Pluriel | Ardhwi | la Terre | Hari | la chaleur, la transpiration | Ɓahari | la mer | Hawa | l'air, l'atmosphère | Ɓaridi | le froid | Nuru | la clarté, la lumière | Juwa | le soleil | Vuwa | la pluie | Singulier | Pluriel | Singulier | Pluriel | Adjali | un accident | Hasira | la colère | Ɓahati | la chance | Hatwari | le danger | Dunia | le monde, ici-bas | Nguvu | la force | Fikira | une idée, une pensée | Niya | une intention, la volonté | Singulier | Pluriel | Singulier | Pluriel | Komba | un maki | Nyoha | un serpent | Mbuzi | une chèvre | Nyombe | une vache | Mbwa | un chien | Nyoshi | une abeille | Ndzi | une mouche | Paha / Mpaha | un chat | Singulier | Pluriel | Singulier | Pluriel | Kafe | le café, du café | Samuli | le beurre | Ngizi | le miel | Shingo | le sel | Nyama | la viande | Sukari | le sucre | Putu | le piment | Tshai, Dite | le thé, du thé | Cl 9 (Singulier) : | I- | NGUO | = un vêtement | INGUO | = le vêtement |  | Cl 10 (Pluriel) : | ZI- | ZINGUO | = des vêtements | ZINGUO | = les vêtements |  | Le pré-préfixe défini joue aussi le rôle d'un préfixe de classe pour distinguer le singulier du pluriel. | HAZI | = un travail / des travaux | IHAZI | = un / le travail |  | ZIHAZI | = des / les travaux | Classes 9 : | Nguo | ɓole / titi / ndzuzuri / ndzidu / mbovu / mpia / ... | Classes 10 : | Nguo | ɓole / titi / ndzuzuri / ndzidu / mbovu / mpia / ... | Classe 9 : | Nguo | yangu / yaho / yahe / yatru / yanyu / yawo |  | = | mon  /  ton  /  son  / notre  /  votre  /  leur | vêtement |  | Classe 10 : | Nguo | zangu / zaho / zahe / zatru / zanyu / zawo |  | = | mes   /   tes   /  ses    /   nos    /   vos     /  leurs | vêtements | Classe 9 (Singulier) : | Classe 10 (Pluriel) : | Nyumba | ini | = cette maison-ci | Nyumba | zini | = ces maisons-ci | ile | = cette maison là-bas | zile | = ces maisons là-bas | iyo | = cette maison-là | zizo (izo) | = ces maisons-là | Chapitre précédent | Chapitre suivant | Table des matières
 | Le genre N- est le seul genre en shimaore qui comporte des noms commençant par le préfixe N-.
 | Tous les noms du genre N- ne commencent pas forcément par N-
Cl 9 Singulier : | préfixe Ø- | HAZI | = un travail
 | préfixe N- | NGUO | = un vêtement
Cl 10 Pluriel : | préfixe  Ø- | HAZI | = des travaux
 | préfixe N- | NGUO | = des vêtements
Singulier | Pluriel
INGUO ILE | = ce vêtement-là | ZINGUO ZILE | = ces vêtements-là
INGUO YANGU | =  mon vêtement | ZINGUO ZANGU | = mes vêtements
Singulier | Pluriel | Singulier | Pluriel
Ɓamuhe | gendre, beau-père | Valahi | beau-frère
Fulani | un tel, une telle | Yatima | un orphelin
Nyadza | belle-fille, belle-mère |  | 
Singulier | Pluriel | Singulier | Pluriel
Ɓazari | un marché | Marike | l'argent
Ɓiashara | le commerce | Thamani | la valeur, le prix
Damu | le sang | Robo | une robe, des --
Hazi | un travail, des -- | Tsindzi | le sommeil
Singulier | Pluriel | Singulier | Pluriel
Dara | un drap, des -- | Range | la couleur, la peinture
Lakuru | une cour, des -- | Saɓuni | un savon, des --
Meza | une table, des -- | Sahani | une assiette, des --
Nyumba | une maison, des -- | Vera | un verre, des --
Singulier | Pluriel | Singulier | Pluriel
Ardhwi | la Terre | Hari | la chaleur, la transpiration
Ɓahari | la mer | Hawa | l'air, l'atmosphère
Ɓaridi | le froid | Nuru | la clarté, la lumière
Juwa | le soleil | Vuwa | la pluie
Singulier | Pluriel | Singulier | Pluriel
Adjali | un accident | Hasira | la colère
Ɓahati | la chance | Hatwari | le danger
Dunia | le monde, ici-bas | Nguvu | la force
Fikira | une idée, une pensée | Niya | une intention, la volonté
Singulier | Pluriel | Singulier | Pluriel
Komba | un maki | Nyoha | un serpent
Mbuzi | une chèvre | Nyombe | une vache
Mbwa | un chien | Nyoshi | une abeille
Ndzi | une mouche | Paha / Mpaha | un chat
Singulier | Pluriel | Singulier | Pluriel
Kafe | le café, du café | Samuli | le beurre
Ngizi | le miel | Shingo | le sel
Nyama | la viande | Sukari | le sucre
Putu | le piment | Tshai, Dite | le thé, du thé
Cl 9 (Singulier) :
I- | NGUO | = un vêtement | INGUO | = le vêtement

Cl 10 (Pluriel) :
ZI- | ZINGUO | = des vêtements | ZINGUO | = les vêtements
 | Le pré-préfixe défini joue aussi le rôle d'un préfixe de classe pour distinguer le singulier du pluriel.
HAZI | = un travail / des travaux | IHAZI | = un / le travail
 | ZIHAZI | = des / les travaux
Classes 9 : | Nguo | ɓole / titi / ndzuzuri / ndzidu / mbovu / mpia / ...
Classes 10 : | Nguo | ɓole / titi / ndzuzuri / ndzidu / mbovu / mpia / ...
Classe 9 : | Nguo | yangu / yaho / yahe / yatru / yanyu / yawo | 
= | mon  /  ton  /  son  / notre  /  votre  /  leur | vêtement

Classe 10 : | Nguo | zangu / zaho / zahe / zatru / zanyu / zawo | 
= | mes   /   tes   /  ses    /   nos    /   vos     /  leurs | vêtements
Classe 9 (Singulier) : | Classe 10 (Pluriel) :
Nyumba | ini | = cette maison-ci | Nyumba | zini | = ces maisons-ci
ile | = cette maison là-bas | zile | = ces maisons là-bas
iyo | = cette maison-là | zizo (izo) | = ces maisons-là
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 20,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 20.",
    content: `

Chapitre 21 - Les Mots Interrogatifs

 A. POSITION DU MOT INTERROGATIF DANS LA PHRASE : 

Lorsqu'on pose une question en shimaore, on ne pratique pas l'inversion sujet / verbe dans la phrase, comme en français, et cela d'autant moins que le pronom sujet est un préfixe accolé au verbe. C'est avant tout l'intonation, ainsi que la présence d'un mot interrogatif, qui signalent qu'il s'agit d'une question.
Le mot interrogatif est en général situé en fin de phrase.
Mais lorsque la phrase commence par le mot interrogatif, cela implique souvent l'emploi d'un temps relatif (verbe terminé en -o).

 B. LES MOTS INTERROGATIFS : 







  1.  MBANI ? = Qui ?
 - Mwana unu mbani ?
Qui est cet enfant ?
- Mwana unu wa mbani ?
A qui est cet enfant ?  (enfant-ci de qui ?)
- Uwo mbani ?
Qui est-ce ?
- Wawe mbani ?
Qui es-tu ?
- Wawe uhiriwa mbani ?
Comment t'appelles-tu ?
- Dzina laho mbani ?
Quel est ton nom ?
- Oho ɗe mbani?
Qui est-ce qui est là ?
        Mais :
 - Mbani kaja ?
Qui n'est pas venu ?
- Mbani ɗe anihirao ?
Qui est-ce qui m'appelle ?
- Mbani atsokao mzuri suku ya Idi ?
Qui sera beau le jour de la fête ?
  2.  TRINI ? = Que... ? Quoi... ? etc..
 - Iyo trini ?
Qu'est-ce ?
- Ini shinyama trini ?
Quelle sorte d'animal est-ce ?
- Shitru iyo uhiriwa trini?
Comment s'appelle cette chose ?
- Usutsaha trini ?
Que veux-tu ?
- Urongoa trini ?
Qu'as-tu dis ?
  3.  TRONGO TRINI ? = Quoi... ? Quelle affaire ?
 - Trongo trini ?
Pourquoi ? / Pour quelle raison ?
- Ini trongo trini ?
De quoi s'agit-il ? (cette chose-ci quoi ?)
- Trongo trini ɗe ilio v̄anu ?
Qu'est-ce qui se passe ici ?
  4.  MANA TRINI ? = Pourquoi... ? Quelle raison ? Quel sens ?
 - Mana trini kasi v̄anu ?
Pourquoi n'est-il pas là ?
- Ulemewa mana trini ?
Comment ça se fait que tu sois fatigué ?
- Ina mana trini ?
Ça a quel sens ? / Ça veut dire quoi ?
  5.  NAMNA TRINI ? = De quelle façon ? Comment ?
 - Uregeya ɗagoni namna trini ?
Comment es-tu rentré au Village ?
  6.  LERA TRINI ? = A quelle heure ?
 - Utsoregeya lera trini ?
A quelle heure rentreras-tu ?
- Una lera trini ?
Quelle heure as-tu ?
  7.  -V̄I ?   = Quel / quelle / quels / quelles / lequel / laquelle / lesquels / lesquelles ?

-V̄I s'accorde en classe avec le nom auquel il se réfère :



Classe 1 Sing.UV̄IMutru uv̄i ?Quelle personne ?
Classe 2 Plur.WAV̄IWatru wav̄i ?Quelles personnes ?
Classe 3 Sing.UV̄̅IMwiri uv̄i ?Quel arbre ?
Classe 4 Plur.IV̄̅IMiri iv̄i ?Quels arbres ?
Classe 5 Sing.LIV̄̅IGari liv̄i ?Quelle voiture ?
Classe 6 Plur.YAV̄̅IMagari yav̄i ?Quelles voitures ?
Classe 7 Sing.IV̄̅IShitru iv̄i ?Quelle chose ?
Classe 8 Plur.ZIV̄̅IZitru ziv̄i ?Quelles choses ?
Classe 9 Sing.IV̄̅INyumba iv̄i ?Quelle maison ?
Classe 10 Plur.ZIV̄̅INyumba ziv̄i ?Quelles maisons ?
Classes 11-14 Sing.UV̄̅IUku uv̄i ?Quelle nuit ?



 
  8.  HAV̄I ?   = Où ?
 - Dapani ɗe hav̄i ?
Où se trouve Dapani ?
- Usendra mukabala hav̄i ?
A quel endroit vas-tu ?
- Ulaa hav̄i ?
D'où viens-tu ?
- Wawe uketsi hav̄i ?
Où habites-tu ?
- Usuendra ɗe hav̄i ?
Tu vas de quel côté ?
- Hav̄i ɗe uendrao ?
Où est-ce que tu vas ?(Voir : Chapitre 52.)
  9.  -NGAV̄I ?   = Combien ?

-ngav̄i ? prend des accords de classe. Lorsqu'il est adjectif, il se place après le nom et
s'accorde en classe avec celui-ci.
Cl 2  - V̄wa wanatsa wangav̄i v̄anu ?
Combien y a-t-il d'enfants ici ?
Cl 4  - Una maha mingav̄i ?
Quel âge as-tu ? (Tu as années combien ?)
Cl 6  - Usutsaha masindza mangav̄i ?
Tu veux combien de bananes ?
Cl 8  - Riyali ngav̄i ?
Combien de Rials ? / Quel prix ?
        SA (YA) NGAV̄I ?   = Quelle heure ?
 - Rina sa (ya) ngav̄i ?
Quelle heure est-il ?(Nous avons heure combien ?)
  10.  LINI ?   = Quand ?
 - Utsorudi lini ?
Quand reviendras-tu ?
- Lini ɗe utsorudi ?
Quand est-ce que tu reviendras ?
        RANGU LINI ?   = Depuis quand ?
 - Wawe uketsi Maore rangu lini ?
Tu habites Mayotte depuis quand ?
- Rangu lini (ɗe) uketsio Maore ?
Depuis quand est-ce que tu habites Mayotte ?
  11.  JEJE ? ou -JE ? suffixé au verbe   = Comment ?
 - Usufanya jeje ? / Usufanyaje ?
Comment fais-tu ?
- Aifanya jeje ?
Comment l'a-t-il fait ?
- Jeje ?
Comment ça va ?
  12.  KISAJE ?   = Combien ?
 - Fungu kisaje mwa ?
Combien coûte le tas ?(Tas combien donc ?)
- Masindza kisaje ?
Combien coûtent les bananes ?
 (Bananes combien ?)
  13.  SAƁU ?   = Est-ce que ?
 - Saɓu usikia, mwandzani ?
Est-ce que tu entends, mon ami ?
- Saɓu ujiviwa ?
Est-ce que tu es content ?
- Saɓu ufanya trongo uambilwa ?
Est-ce que tu as fait ce qu'on t'a dit ?



VOCABULAIRE








Ufuma
chasser, tirer
Umedza
avaler
Ugauha
changer, se modifier
Upotea
se perdre, s'égarer
Ukoma
finir, se terminer
Uruma
déléguer, envoyer
Ukwala
trébucher
Uvongona
chuchoter
Ulewa
être ivre
Uvuruha
croquer
Umaruha
sursauter
Uwana
se battre


EXERCICES

EXERCICE 1 : Traduisez en shimaore :

Qui est venu ?  Pourquoi es-tu parti ?  Que veut-il ?  Combien de sacs y a-t-il ?  Qui as-tu vu ?  Où étais-tu ? Quand sont-ils arrivés ?  As-tu lu ce livre ?  Qui es-tu ?  Où est l'Européen ?  Où est-il parti ?  Où est Pamandzi ?  Quelle voiture ?  Quel travail ?    Quel docteur ?   Quels vêtements ?  Quelle île ?  Combien coûte ce stylo ?   Quel prix ?  Combien d'animaux ?


EXERCICE 2 : Traduisez en français :



Wadjeni waja lini ?
V̄wa watru wangav̄i v̄anu ?
Usutsaha trini ?
Wawe uhiriwa mbani ?
Nguo zangu ziv̄i ?
Surwali lini kisaje ?
Mana trini alola mutru-mushe ule ?
Usuendra hav̄i ?
Afanya hazi iyo namna trini ?
Usufanyaje ?
Ana maha mingav̄i ?
Urendre jeje ?




Chapitre précédentChapitre suivantTable des matières | 1.  MBANI ? = Qui ? |  | - Mwana unu mbani ? | Qui est cet enfant ? | - Mwana unu wa mbani ? | A qui est cet enfant ?  (enfant-ci de qui ?) | - Uwo mbani ? | Qui est-ce ? | - Wawe mbani ? | Qui es-tu ? | - Wawe uhiriwa mbani ? | Comment t'appelles-tu ? | - Dzina laho mbani ? | Quel est ton nom ? | - Oho ɗe mbani? | Qui est-ce qui est là ? | Mais : |  | - Mbani kaja ? | Qui n'est pas venu ? | - Mbani ɗe anihirao ? | Qui est-ce qui m'appelle ? | - Mbani atsokao mzuri suku ya Idi ? | Qui sera beau le jour de la fête ? | 2.  TRINI ? = Que... ? Quoi... ? etc.. |  | - Iyo trini ? | Qu'est-ce ? | - Ini shinyama trini ? | Quelle sorte d'animal est-ce ? | - Shitru iyo uhiriwa trini? | Comment s'appelle cette chose ? | - Usutsaha trini ? | Que veux-tu ? | - Urongoa trini ? | Qu'as-tu dis ? | 3.  TRONGO TRINI ? = Quoi... ? Quelle affaire ? |  | - Trongo trini ? | Pourquoi ? / Pour quelle raison ? | - Ini trongo trini ? | De quoi s'agit-il ? (cette chose-ci quoi ?) | - Trongo trini ɗe ilio v̄anu ? | Qu'est-ce qui se passe ici ? | 4.  MANA TRINI ? = Pourquoi... ? Quelle raison ? Quel sens ? |  | - Mana trini kasi v̄anu ? | Pourquoi n'est-il pas là ? | - Ulemewa mana trini ? | Comment ça se fait que tu sois fatigué ? | - Ina mana trini ? | Ça a quel sens ? / Ça veut dire quoi ? | 5.  NAMNA TRINI ? = De quelle façon ? Comment ? |  | - Uregeya ɗagoni namna trini ? | Comment es-tu rentré au Village ? | 6.  LERA TRINI ? = A quelle heure ? |  | - Utsoregeya lera trini ? | A quelle heure rentreras-tu ? | - Una lera trini ? | Quelle heure as-tu ? | 7.  -V̄I ?   = Quel / quelle / quels / quelles / lequel / laquelle / lesquels / lesquelles ? | -V̄I s'accorde en classe avec le nom auquel il se réfère : | Classe 1 Sing.UV̄IMutru uv̄i ?Quelle personne ?
Classe 2 Plur.WAV̄IWatru wav̄i ?Quelles personnes ?
Classe 3 Sing.UV̄̅IMwiri uv̄i ?Quel arbre ?
Classe 4 Plur.IV̄̅IMiri iv̄i ?Quels arbres ?
Classe 5 Sing.LIV̄̅IGari liv̄i ?Quelle voiture ?
Classe 6 Plur.YAV̄̅IMagari yav̄i ?Quelles voitures ?
Classe 7 Sing.IV̄̅IShitru iv̄i ?Quelle chose ?
Classe 8 Plur.ZIV̄̅IZitru ziv̄i ?Quelles choses ?
Classe 9 Sing.IV̄̅INyumba iv̄i ?Quelle maison ?
Classe 10 Plur.ZIV̄̅INyumba ziv̄i ?Quelles maisons ?
Classes 11-14 Sing.UV̄̅IUku uv̄i ?Quelle nuit ? | Classe 1 Sing. | UV̄I | Mutru uv̄i ? | Quelle personne ? | Classe 2 Plur. | WAV̄I | Watru wav̄i ? | Quelles personnes ? | Classe 3 Sing. | UV̄̅I | Mwiri uv̄i ? | Quel arbre ? | Classe 4 Plur. | IV̄̅I | Miri iv̄i ? | Quels arbres ? | Classe 5 Sing. | LIV̄̅I | Gari liv̄i ? | Quelle voiture ? | Classe 6 Plur. | YAV̄̅I | Magari yav̄i ? | Quelles voitures ? | Classe 7 Sing. | IV̄̅I | Shitru iv̄i ? | Quelle chose ? | Classe 8 Plur. | ZIV̄̅I | Zitru ziv̄i ? | Quelles choses ? | Classe 9 Sing. | IV̄̅I | Nyumba iv̄i ? | Quelle maison ? | Classe 10 Plur. | ZIV̄̅I | Nyumba ziv̄i ? | Quelles maisons ? | Classes 11-14 Sing. | UV̄̅I | Uku uv̄i ? | Quelle nuit ? |  | 8.  HAV̄I ?   = Où ? |  | - Dapani ɗe hav̄i ? | Où se trouve Dapani ? | - Usendra mukabala hav̄i ? | A quel endroit vas-tu ? | - Ulaa hav̄i ? | D'où viens-tu ? | - Wawe uketsi hav̄i ? | Où habites-tu ? | - Usuendra ɗe hav̄i ? | Tu vas de quel côté ? | - Hav̄i ɗe uendrao ? | Où est-ce que tu vas ?(Voir : Chapitre 52.) | 9.  -NGAV̄I ?   = Combien ? | -ngav̄i ? prend des accords de classe. Lorsqu'il est adjectif, il se place après le nom et
s'accorde en classe avec celui-ci. | Cl 2 | - V̄wa wanatsa wangav̄i v̄anu ? | Combien y a-t-il d'enfants ici ? | Cl 4 | - Una maha mingav̄i ? | Quel âge as-tu ? (Tu as années combien ?) | Cl 6 | - Usutsaha masindza mangav̄i ? | Tu veux combien de bananes ? | Cl 8 | - Riyali ngav̄i ? | Combien de Rials ? / Quel prix ? | SA (YA) NGAV̄I ?   = Quelle heure ? |  | - Rina sa (ya) ngav̄i ? | Quelle heure est-il ?(Nous avons heure combien ?) | 10.  LINI ?   = Quand ? |  | - Utsorudi lini ? | Quand reviendras-tu ? | - Lini ɗe utsorudi ? | Quand est-ce que tu reviendras ? | RANGU LINI ?   = Depuis quand ? |  | - Wawe uketsi Maore rangu lini ? | Tu habites Mayotte depuis quand ? | - Rangu lini (ɗe) uketsio Maore ? | Depuis quand est-ce que tu habites Mayotte ? | 11.  JEJE ? ou -JE ? suffixé au verbe   = Comment ? |  | - Usufanya jeje ? / Usufanyaje ? | Comment fais-tu ? | - Aifanya jeje ? | Comment l'a-t-il fait ? | - Jeje ? | Comment ça va ? | 12.  KISAJE ?   = Combien ? |  | - Fungu kisaje mwa ? | Combien coûte le tas ?(Tas combien donc ?) | - Masindza kisaje ? | Combien coûtent les bananes ? |  | (Bananes combien ?) | 13.  SAƁU ?   = Est-ce que ? |  | - Saɓu usikia, mwandzani ? | Est-ce que tu entends, mon ami ? | - Saɓu ujiviwa ? | Est-ce que tu es content ? | - Saɓu ufanya trongo uambilwa ? | Est-ce que tu as fait ce qu'on t'a dit ? | Ufuma | chasser, tirer | Umedza | avaler | Ugauha | changer, se modifier | Upotea | se perdre, s'égarer | Ukoma | finir, se terminer | Uruma | déléguer, envoyer | Ukwala | trébucher | Uvongona | chuchoter | Ulewa | être ivre | Uvuruha | croquer | Umaruha | sursauter | Uwana | se battre | Chapitre précédent | Chapitre suivant | Table des matières
1.  MBANI ? = Qui ?
 | - Mwana unu mbani ? | Qui est cet enfant ?
- Mwana unu wa mbani ? | A qui est cet enfant ?  (enfant-ci de qui ?)
- Uwo mbani ? | Qui est-ce ?
- Wawe mbani ? | Qui es-tu ?
- Wawe uhiriwa mbani ? | Comment t'appelles-tu ?
- Dzina laho mbani ? | Quel est ton nom ?
- Oho ɗe mbani? | Qui est-ce qui est là ?
Mais :
 | - Mbani kaja ? | Qui n'est pas venu ?
- Mbani ɗe anihirao ? | Qui est-ce qui m'appelle ?
- Mbani atsokao mzuri suku ya Idi ? | Qui sera beau le jour de la fête ?
2.  TRINI ? = Que... ? Quoi... ? etc..
 | - Iyo trini ? | Qu'est-ce ?
- Ini shinyama trini ? | Quelle sorte d'animal est-ce ?
- Shitru iyo uhiriwa trini? | Comment s'appelle cette chose ?
- Usutsaha trini ? | Que veux-tu ?
- Urongoa trini ? | Qu'as-tu dis ?
3.  TRONGO TRINI ? = Quoi... ? Quelle affaire ?
 | - Trongo trini ? | Pourquoi ? / Pour quelle raison ?
- Ini trongo trini ? | De quoi s'agit-il ? (cette chose-ci quoi ?)
- Trongo trini ɗe ilio v̄anu ? | Qu'est-ce qui se passe ici ?
4.  MANA TRINI ? = Pourquoi... ? Quelle raison ? Quel sens ?
 | - Mana trini kasi v̄anu ? | Pourquoi n'est-il pas là ?
- Ulemewa mana trini ? | Comment ça se fait que tu sois fatigué ?
- Ina mana trini ? | Ça a quel sens ? / Ça veut dire quoi ?
5.  NAMNA TRINI ? = De quelle façon ? Comment ?
 | - Uregeya ɗagoni namna trini ? | Comment es-tu rentré au Village ?
6.  LERA TRINI ? = A quelle heure ?
 | - Utsoregeya lera trini ? | A quelle heure rentreras-tu ?
- Una lera trini ? | Quelle heure as-tu ?
7.  -V̄I ?   = Quel / quelle / quels / quelles / lequel / laquelle / lesquels / lesquelles ?
-V̄I s'accorde en classe avec le nom auquel il se réfère :
Classe 1 Sing.UV̄IMutru uv̄i ?Quelle personne ?
Classe 2 Plur.WAV̄IWatru wav̄i ?Quelles personnes ?
Classe 3 Sing.UV̄̅IMwiri uv̄i ?Quel arbre ?
Classe 4 Plur.IV̄̅IMiri iv̄i ?Quels arbres ?
Classe 5 Sing.LIV̄̅IGari liv̄i ?Quelle voiture ?
Classe 6 Plur.YAV̄̅IMagari yav̄i ?Quelles voitures ?
Classe 7 Sing.IV̄̅IShitru iv̄i ?Quelle chose ?
Classe 8 Plur.ZIV̄̅IZitru ziv̄i ?Quelles choses ?
Classe 9 Sing.IV̄̅INyumba iv̄i ?Quelle maison ?
Classe 10 Plur.ZIV̄̅INyumba ziv̄i ?Quelles maisons ?
Classes 11-14 Sing.UV̄̅IUku uv̄i ?Quelle nuit ? | Classe 1 Sing. | UV̄I | Mutru uv̄i ? | Quelle personne ? | Classe 2 Plur. | WAV̄I | Watru wav̄i ? | Quelles personnes ? | Classe 3 Sing. | UV̄̅I | Mwiri uv̄i ? | Quel arbre ? | Classe 4 Plur. | IV̄̅I | Miri iv̄i ? | Quels arbres ? | Classe 5 Sing. | LIV̄̅I | Gari liv̄i ? | Quelle voiture ? | Classe 6 Plur. | YAV̄̅I | Magari yav̄i ? | Quelles voitures ? | Classe 7 Sing. | IV̄̅I | Shitru iv̄i ? | Quelle chose ? | Classe 8 Plur. | ZIV̄̅I | Zitru ziv̄i ? | Quelles choses ? | Classe 9 Sing. | IV̄̅I | Nyumba iv̄i ? | Quelle maison ? | Classe 10 Plur. | ZIV̄̅I | Nyumba ziv̄i ? | Quelles maisons ? | Classes 11-14 Sing. | UV̄̅I | Uku uv̄i ? | Quelle nuit ?
Classe 1 Sing. | UV̄I | Mutru uv̄i ? | Quelle personne ?
Classe 2 Plur. | WAV̄I | Watru wav̄i ? | Quelles personnes ?
Classe 3 Sing. | UV̄̅I | Mwiri uv̄i ? | Quel arbre ?
Classe 4 Plur. | IV̄̅I | Miri iv̄i ? | Quels arbres ?
Classe 5 Sing. | LIV̄̅I | Gari liv̄i ? | Quelle voiture ?
Classe 6 Plur. | YAV̄̅I | Magari yav̄i ? | Quelles voitures ?
Classe 7 Sing. | IV̄̅I | Shitru iv̄i ? | Quelle chose ?
Classe 8 Plur. | ZIV̄̅I | Zitru ziv̄i ? | Quelles choses ?
Classe 9 Sing. | IV̄̅I | Nyumba iv̄i ? | Quelle maison ?
Classe 10 Plur. | ZIV̄̅I | Nyumba ziv̄i ? | Quelles maisons ?
Classes 11-14 Sing. | UV̄̅I | Uku uv̄i ? | Quelle nuit ?

8.  HAV̄I ?   = Où ?
 | - Dapani ɗe hav̄i ? | Où se trouve Dapani ?
- Usendra mukabala hav̄i ? | A quel endroit vas-tu ?
- Ulaa hav̄i ? | D'où viens-tu ?
- Wawe uketsi hav̄i ? | Où habites-tu ?
- Usuendra ɗe hav̄i ? | Tu vas de quel côté ?
- Hav̄i ɗe uendrao ? | Où est-ce que tu vas ?(Voir : Chapitre 52.)
9.  -NGAV̄I ?   = Combien ?
-ngav̄i ? prend des accords de classe. Lorsqu'il est adjectif, il se place après le nom et
s'accorde en classe avec celui-ci.
Cl 2 | - V̄wa wanatsa wangav̄i v̄anu ? | Combien y a-t-il d'enfants ici ?
Cl 4 | - Una maha mingav̄i ? | Quel âge as-tu ? (Tu as années combien ?)
Cl 6 | - Usutsaha masindza mangav̄i ? | Tu veux combien de bananes ?
Cl 8 | - Riyali ngav̄i ? | Combien de Rials ? / Quel prix ?
SA (YA) NGAV̄I ?   = Quelle heure ?
 | - Rina sa (ya) ngav̄i ? | Quelle heure est-il ?(Nous avons heure combien ?)
10.  LINI ?   = Quand ?
 | - Utsorudi lini ? | Quand reviendras-tu ?
- Lini ɗe utsorudi ? | Quand est-ce que tu reviendras ?
RANGU LINI ?   = Depuis quand ?
 | - Wawe uketsi Maore rangu lini ? | Tu habites Mayotte depuis quand ?
- Rangu lini (ɗe) uketsio Maore ? | Depuis quand est-ce que tu habites Mayotte ?
11.  JEJE ? ou -JE ? suffixé au verbe   = Comment ?
 | - Usufanya jeje ? / Usufanyaje ? | Comment fais-tu ?
- Aifanya jeje ? | Comment l'a-t-il fait ?
- Jeje ? | Comment ça va ?
12.  KISAJE ?   = Combien ?
 | - Fungu kisaje mwa ? | Combien coûte le tas ?(Tas combien donc ?)
- Masindza kisaje ? | Combien coûtent les bananes ?
 | (Bananes combien ?)
13.  SAƁU ?   = Est-ce que ?
 | - Saɓu usikia, mwandzani ? | Est-ce que tu entends, mon ami ?
- Saɓu ujiviwa ? | Est-ce que tu es content ?
- Saɓu ufanya trongo uambilwa ? | Est-ce que tu as fait ce qu'on t'a dit ?
Ufuma | chasser, tirer | Umedza | avaler
Ugauha | changer, se modifier | Upotea | se perdre, s'égarer
Ukoma | finir, se terminer | Uruma | déléguer, envoyer
Ukwala | trébucher | Uvongona | chuchoter
Ulewa | être ivre | Uvuruha | croquer
Umaruha | sursauter | Uwana | se battre
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 21,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 21.",
    content: `

Chapitre 22 - Les Nombres

 1.  LES NOMBRES DE 1 A 19 : 


0
KAV̄U / ZERO
10
KUMI
1MOJA11
KUMI NA MOJA
2MBILI12
KUMI NA MBILI
3TRARU13
KUMI NA TRARU
4NNE14
KUMI NA NNE
5TSANO15
KUMI NA TSANO
6SITA16
KUMI NA SITA
7SAƁA17
KUMI NA SAƁA
8NANE18
KUMI NA NANE
9SHENDRA19
KUMI NA SHENDRA


Les nombres en shimaore se comportent comme des adjectifs, et comme tous les adjectifs, ils se placent après le nom, mais avant le démonstratif.


Certains nombres sont invariables tandis que d'autres s'accordent en genre avec le nom !


Les nombres 1, 6, 7, 9, 10, sont invariables et ne prennent pas de préfixes de classes.
Les nombres 2, 3, 4, 5, 8 s'accordent avec le nom et prennent un préfixe de classe pluriel.
Dans le cas d'un nombre composé (12, 13, 14, 15, 18) seule la partie accordable prend un préfixe de classe.



ACCORDS DES NOMBRES : 2, 3, 4, 5, 8 : 

CLASSE / NOM
2
3
4
5
8

  Cl 2  Watru
waili
wararu
wanne
watsano
wanane

  Cl 4  Miri
mili
miraru
minne
mitsano
minane

  Cl 6  Magari
maili
mararu
manne
matsano
manane

  Cl 8  Ziri
mbili
traru
nne
tsano
nane

  Cl 10  Nguo
mbili
traru
nne
tsano
nane


EXEMPLES : 



Watru wararu
Trois personnes
Watru kumi na wanane
Dix-huit personnes
Watru mia wa shirini na watsano
Cent vingt-cinq personnes
Magari manane
Huit voitures
Magari sita
Six voitures
Magari thalathini na mararu
Trente-trois voitures
Miri minne
Quatre arbres
Miri mia na kumi na minane
Cent dix-huit arbres



 2. LES DIZAINES : 


10KUMI  
20SHIRINI60SITINI
30THELATHINI70SAƁWINI
40ARƁAINI80THAMANINI
50HAMSINI90TUSWINI


Lorsqu'une dizaine est suivie d'une unité, on fait précéder l'unité du mot NA = et.

EXEMPLES : 



21Shirini na moja
34Thalathini na nne
46Arɓaini na sita
58Hamsini na nane



 3. LES CENTAINES : 


100MIA  
200MIA TENI600SITA MIA
300THALATHA MIA700SAƁA MIA
400ARƁA MIA800THAMANI MIA
500HAMSU MIA900TUSU MIA


Lorsqu'une centaine est suivie d'une unité, on fait précéder celle-ci du mot NA = et.

EXEMPLES : 



101
Mia na moja
202Mia teni na mbili
303thalatha mia na traru


Il en va de même lorsqu'elle est suivie d'une dizaine, jusqu'à 19.

EXEMPLES : 



110
Mia na kumi
119Mia teni na kumi na shendra


Mais lorsqu'une centaine est suivie d'une dizaine à partir de 20, on fait précéder celle-ci du mot WA   = "et" en arabe. Il en va de même pour les milliers.

EXEMPLES : 



120
Mia wa shirini
230Mia teni wa thalathini
354Thalatha mia wa hamsini na nne
697Sita mia wa tuswini na saɓa



 4. LES MILLIERS : 


1000ALIFU  
2000ALIFU MBILI6000ALIFU SITA
3000ALIFU TRARU7000ALIFU SAƁA
4000ALIFU NNE8000ALIFU NANE
5000ALIFU TSANO9000ALIFU SHENDRA


EXEMPLES : 



1001
Alifu na moja
1018Alifu na kumi na nane
2021Alifu mbili wa shirini na moja
5735Alifu tsano wa saɓa mia wa thalathini na tsano
10000Alifu kumi
18000Alifu kumi na nane
20000Alifu shirini



 5. LES FRACTIONS : 


1/2
Nusu
une moitié, un demi
1/4Roboun quart
1/8Thumuniun huitième


 6. LES NOMBRES ORDINAUX : 


-A HANDRA
Mutru wa handra
La première personne
-A V̄ILIGari la v̄iliLa deuxième voiture
-A RARUMara ya raruLa troisième fois
-A NNESha ya nneLe quatrième doigt
-A TSANONyumba ya tsanoLa cinqième maison
-A SITAFi ya sitaLe sixième poisson
-A SAƁASuku ya saɓaLe septième jour
-A NANEMusomo wa naneLa huitième leçon
-A SHENDRAMwezi wa shendraLe neuvième mois
-A KUMIMunadzi wa kumiLe dixième cocotier


VOCABULAIRE


dremela / ndrema
chauve-souris
mbu
moustique
farasi
cheval
nyamba
tortue
fi
poisson
nyunyi
oiseau
kuba
raie
pundra
âne
kuhu
poule
pwedza
poulpe
landra
hérisson
tsutsuhu
fourmi


EXERCICES

EXERCICE 1 : Traduisez en shimaore :


25             320             740             95              1000           2465          4530           6700           12000           20000       
12 tasses, 30 arbres, 8 chaises, 24 ans, 4 enfants, 2 chiens, 3 chats,
10 vaches, 115 îles, 500 personnes, 3 voitures, 8 oranges, 4 fruits à pain, 5 aubergines, 2 mandarines, 3 papayes, 2 leçons,       10 jaques, 12 bananes douces, 100 souris.


EXERCICE 2 : Ecrivez les nombres en chiffres :

Kumi na tsano, kumi na shendra, shirini na saɓa, thalathini na moja, arɓaini na nne, hamsini na nane, thamanini na traru, tuswini na tsano, mia teni, arɓa mia, saɓa mia,  thalatha mia na kumi na sita, alifu tsano, alifu kumi, alifu kumi na mbili wa hamsu mia wa saɓwini na nne.


Chapitre précédentChapitre suivantTable des matières | 0 | KAV̄U / ZERO | 10 | KUMI | 1 | MOJA | 11 | KUMI NA MOJA | 2 | MBILI | 12 | KUMI NA MBILI | 3 | TRARU | 13 | KUMI NA TRARU | 4 | NNE | 14 | KUMI NA NNE | 5 | TSANO | 15 | KUMI NA TSANO | 6 | SITA | 16 | KUMI NA SITA | 7 | SAƁA | 17 | KUMI NA SAƁA | 8 | NANE | 18 | KUMI NA NANE | 9 | SHENDRA | 19 | KUMI NA SHENDRA |  | Certains nombres sont invariables tandis que d'autres s'accordent en genre avec le nom ! | CLASSE / NOM | 2 | 3 | 4 | 5 | 8 | Cl 2  Watru | waili | wararu | wanne | watsano | wanane | Cl 4  Miri | mili | miraru | minne | mitsano | minane | Cl 6  Magari | maili | mararu | manne | matsano | manane | Cl 8  Ziri | mbili | traru | nne | tsano | nane | Cl 10  Nguo | mbili | traru | nne | tsano | nane | Watru wararu | Trois personnes | Watru kumi na wanane | Dix-huit personnes | Watru mia wa shirini na watsano | Cent vingt-cinq personnes | Magari manane | Huit voitures | Magari sita | Six voitures | Magari thalathini na mararu | Trente-trois voitures | Miri minne | Quatre arbres | Miri mia na kumi na minane | Cent dix-huit arbres | 10 | KUMI |  |  | 20 | SHIRINI | 60 | SITINI | 30 | THELATHINI | 70 | SAƁWINI | 40 | ARƁAINI | 80 | THAMANINI | 50 | HAMSINI | 90 | TUSWINI | 21 | Shirini na moja | 34 | Thalathini na nne | 46 | Arɓaini na sita | 58 | Hamsini na nane | 100 | MIA |  |  | 200 | MIA TENI | 600 | SITA MIA | 300 | THALATHA MIA | 700 | SAƁA MIA | 400 | ARƁA MIA | 800 | THAMANI MIA | 500 | HAMSU MIA | 900 | TUSU MIA | 101 | Mia na moja | 202 | Mia teni na mbili | 303 | thalatha mia na traru | 110 | Mia na kumi | 119 | Mia teni na kumi na shendra | 120 | Mia wa shirini | 230 | Mia teni wa thalathini | 354 | Thalatha mia wa hamsini na nne | 697 | Sita mia wa tuswini na saɓa | 1000 | ALIFU |  |  | 2000 | ALIFU MBILI | 6000 | ALIFU SITA | 3000 | ALIFU TRARU | 7000 | ALIFU SAƁA | 4000 | ALIFU NNE | 8000 | ALIFU NANE | 5000 | ALIFU TSANO | 9000 | ALIFU SHENDRA | 1001 | Alifu na moja | 1018 | Alifu na kumi na nane | 2021 | Alifu mbili wa shirini na moja | 5735 | Alifu tsano wa saɓa mia wa thalathini na tsano | 10000 | Alifu kumi | 18000 | Alifu kumi na nane | 20000 | Alifu shirini | 1/2 | Nusu | une moitié, un demi | 1/4 | Robo | un quart | 1/8 | Thumuni | un huitième | -A HANDRA | Mutru wa handra | La première personne | -A V̄ILI | Gari la v̄ili | La deuxième voiture | -A RARU | Mara ya raru | La troisième fois | -A NNE | Sha ya nne | Le quatrième doigt | -A TSANO | Nyumba ya tsano | La cinqième maison | -A SITA | Fi ya sita | Le sixième poisson | -A SAƁA | Suku ya saɓa | Le septième jour | -A NANE | Musomo wa nane | La huitième leçon | -A SHENDRA | Mwezi wa shendra | Le neuvième mois | -A KUMI | Munadzi wa kumi | Le dixième cocotier | dremela / ndrema | chauve-souris | mbu | moustique | farasi | cheval | nyamba | tortue | fi | poisson | nyunyi | oiseau | kuba | raie | pundra | âne | kuhu | poule | pwedza | poulpe | landra | hérisson | tsutsuhu | fourmi | Chapitre précédent | Chapitre suivant | Table des matières
0 | KAV̄U / ZERO | 10 | KUMI
1 | MOJA | 11 | KUMI NA MOJA
2 | MBILI | 12 | KUMI NA MBILI
3 | TRARU | 13 | KUMI NA TRARU
4 | NNE | 14 | KUMI NA NNE
5 | TSANO | 15 | KUMI NA TSANO
6 | SITA | 16 | KUMI NA SITA
7 | SAƁA | 17 | KUMI NA SAƁA
8 | NANE | 18 | KUMI NA NANE
9 | SHENDRA | 19 | KUMI NA SHENDRA
 | Certains nombres sont invariables tandis que d'autres s'accordent en genre avec le nom !
CLASSE / NOM | 2 | 3 | 4 | 5 | 8
Cl 2  Watru | waili | wararu | wanne | watsano | wanane
Cl 4  Miri | mili | miraru | minne | mitsano | minane
Cl 6  Magari | maili | mararu | manne | matsano | manane
Cl 8  Ziri | mbili | traru | nne | tsano | nane
Cl 10  Nguo | mbili | traru | nne | tsano | nane
Watru wararu | Trois personnes
Watru kumi na wanane | Dix-huit personnes
Watru mia wa shirini na watsano | Cent vingt-cinq personnes
Magari manane | Huit voitures
Magari sita | Six voitures
Magari thalathini na mararu | Trente-trois voitures
Miri minne | Quatre arbres
Miri mia na kumi na minane | Cent dix-huit arbres
10 | KUMI |  | 
20 | SHIRINI | 60 | SITINI
30 | THELATHINI | 70 | SAƁWINI
40 | ARƁAINI | 80 | THAMANINI
50 | HAMSINI | 90 | TUSWINI
21 | Shirini na moja
34 | Thalathini na nne
46 | Arɓaini na sita
58 | Hamsini na nane
100 | MIA |  | 
200 | MIA TENI | 600 | SITA MIA
300 | THALATHA MIA | 700 | SAƁA MIA
400 | ARƁA MIA | 800 | THAMANI MIA
500 | HAMSU MIA | 900 | TUSU MIA
101 | Mia na moja
202 | Mia teni na mbili
303 | thalatha mia na traru
110 | Mia na kumi
119 | Mia teni na kumi na shendra
120 | Mia wa shirini
230 | Mia teni wa thalathini
354 | Thalatha mia wa hamsini na nne
697 | Sita mia wa tuswini na saɓa
1000 | ALIFU |  | 
2000 | ALIFU MBILI | 6000 | ALIFU SITA
3000 | ALIFU TRARU | 7000 | ALIFU SAƁA
4000 | ALIFU NNE | 8000 | ALIFU NANE
5000 | ALIFU TSANO | 9000 | ALIFU SHENDRA
1001 | Alifu na moja
1018 | Alifu na kumi na nane
2021 | Alifu mbili wa shirini na moja
5735 | Alifu tsano wa saɓa mia wa thalathini na tsano
10000 | Alifu kumi
18000 | Alifu kumi na nane
20000 | Alifu shirini
1/2 | Nusu | une moitié, un demi
1/4 | Robo | un quart
1/8 | Thumuni | un huitième
-A HANDRA | Mutru wa handra | La première personne
-A V̄ILI | Gari la v̄ili | La deuxième voiture
-A RARU | Mara ya raru | La troisième fois
-A NNE | Sha ya nne | Le quatrième doigt
-A TSANO | Nyumba ya tsano | La cinqième maison
-A SITA | Fi ya sita | Le sixième poisson
-A SAƁA | Suku ya saɓa | Le septième jour
-A NANE | Musomo wa nane | La huitième leçon
-A SHENDRA | Mwezi wa shendra | Le neuvième mois
-A KUMI | Munadzi wa kumi | Le dixième cocotier
dremela / ndrema | chauve-souris | mbu | moustique
farasi | cheval | nyamba | tortue
fi | poisson | nyunyi | oiseau
kuba | raie | pundra | âne
kuhu | poule | pwedza | poulpe
landra | hérisson | tsutsuhu | fourmi
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 22,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 22.",
    content: `

Chapitre 23 - L'Heure

Mayotte est située près de l'équateur. Il y a donc peu de variations au cours de l'année dans les heures du lever et du coucher du soleil. Le soleil se lève vers 6 heures du matin et se couche vers six heures du soir.
Aussi 7 heures du matin est-elle la première heure du jour, et sept heures du soir est la première heure de la nuit : il y a donc un décalage de 6 heures entre l'heure "occidentale" et l'heure mahoraise.
Cependant, si l'heure est lue à la mahoraise, les pendules sont réglées à l'occidentale... Il faut donc à chaque fois ajouter ou retrancher mentalement 6 heures pour s'y retrouver !

 1. L'HEURE JUSTE : 




Pour demander l'heure, on utilise le mot SA (= heure, en arabe) ou LERA (= l'heure, en français) :

- Rina lera trini ?
= Quelle heure avons-nous ?(= Nous avons heure quoi ?)

- Rina sa ya ngav̄i ?
= Quelle heure avons-nous ?(= Nous avons heure de combien ?)

Pour dire l'heure, le mot SA (= heure) précède le chiffre.

- Rina sa ya kumi na moja
= Nous avons onze heures(= Nous avons heure onzième)









HEURE MAHORAISE
HEURE OCCIDENTALE

  Sa ya handra
  1ère heure
  7 h du matin
  Sa ya v̄ili
  2ème heure
  8 h du matin
  Sa ya raru
  3ème heure
  9 h du matin
  Sa ya nne
  4ème heure
  10 h du matin
  Sa ya tsano
  5 ème heure
  11 h du matin
  Sa ya sita
  6 ème heure
  12 h du matin
  Sa ya saɓa
  7 ème heure
  1 h de l'après-midi
  Sa ya nane
  8 ème heure
  2 h de l'après-midi
  Sa ya shendra
  9 ème heure
  3 h de l'après-midi
  Sa ya kumi
  10 ème heure
  4 h de l'après-midi
  Sa ya kumi na moja
  11 ème heure
  5 h de l'après-midi
  Sa ya kumi na mbili
  12 ème heure
  6 h du soir


EXPRESSION :    Harimwa sa saɓa zaikamiliha     =    à une heure juste   (à sept heures complètes)

Pour distinguer les heures de la nuit de celles du jour, il suffit d'ajouter l'expression "YA UKU" (= de
la nuit) ou "YA UKWARI" (de UKU HARI = le milieu de la nuit). Ainsi :


Sa ya handra ya uku
= 1ère heure de la nuit (= 19 h)
Sa ya v̄ili ya uku
= 2ème heure de la nuit (= 20 h)
Sa ya raru ya uku
= 3ème heure de la nuit (= 21 h), etc..



Aux petites heures de la nuit, on peut aussi se repérer au chant du coq !


- Kukuyi la handra
(= le 1er coq)
= 2 heures du matin

- Kukuyi la v̄ili
(= le 2ème coq)
= 3 heures du matin

- Kukuyi la raru
(= le 3ème coq)
= 4 heures du matin


 2. IL Y A DES MINUTES EN PLUS : 

Le mot "minute" se dit : DAKIKA. On mentionnera les minutes supplémentaire en comptant ainsi :


Sa ya handra...
na dakika tsano
Sept heures... 
cinq
 
na dakika kumi
 
dix
 
na dakika kumi na tsano
 
quinze / et quart
 
na dakika shirini
 
vingt



La "demie" se dit : NUSU.


Sa ya raru wa nusu
Trois heures et demie  (= 9 h 30)
Sa ya kumi na mbili wa nusu
Douze heures et demie (= 6 h 30)



On constate que pour ajouter les minutes, on utilise le terme bantou NA (= et), alors que pour ajouter  les demies on utilise le terme arabe WA (= et).

 3. IL Y A DES MINUTES EN MOINS : 

A partir de la demie, on comptera les minutes qui manquent pour atteindre l'heure suivante. On utilise
l'expression : YAV̄UNGUHA DAKIKA ... = diminué de ... minutes.

EXEMPLES : 


Sa ya nane yav̄unguha dakika kumi 
huit heures moins dix (= 2 h moins 10)
Sa ya shendra yav̄unguha dakika shirini
neuf heures moins vingt (= 3 h moins 20)


 4. LES DIFFÉRENTES PÉRIODES DU JOUR ET DE LA NUIT : 


ASUƁUHI
de 6 h à 9 h environ
Le matin
MUTSANA
de 9 h à 14 h environ
La journée
UJONI
de 14 h à 18 h environ
L'après-midi, le soir
UKU
de 18 h à 6 h du matin
La nuit

De plus, la journée est rythmée par les cinq prières de l'Islam qui servent de repères temporels :

ALFADJIRI
vers  4 h 30 / 5 h 10
Prière de l'aube
ADHUHURI
vers 12 h / 12 h 30
Prière de midi
ALASIRI
vers 16 h / 16 h 30
Prière de l'après-midi
MAHARIBI
vers 18 h / 18 h 30
Prière du coucher du soleil
ALESHA
vers 20 h
Prière de la nuit



VOCABULAIRE


NOMS ADJECTIVAUX DE GENRE MU-/WA- 
Mubwabwa, wa-
bavard
Mushudjaa, wa-
courageux
Mudjisifu, wa-
vantard
Mustahamilifu, wa-
patient, endurant
Muhara, wa-
peureux
Mutaalamu, wa-
expert, spécialiste
Mujinga, wa-
sot, imbécile
Mutoro, wa-
sauvage, fuyard
Mukaidi, wa-
entêté
Mutrulivu, wa
calme, tranquille
Munafiki, wa-
traître, menteur
Mwaminifu, wa-
honnête


EXERCICES

EXERCICE 1 : Traduisez en shimaore :


7 h 15, 6 h 30 du soir, 2 h 10, midi, trois heures et demie, quelle heure avez-vous ? Quatre heures moins vingt-cinq, 17 h, une heure cinq, neuf heures, huit heures du soir, trois heures du matin, le coucher du soleil, le soir, l'aube.


EXERCICE 2 : Traduisez en français :

Alfadjiri, adhuhuri, maharibi, asuɓuhi, mutsana, uku, ujoni, sa ya handra wa nusu, sa ya raru na dakika kumi, sa ya sita yav̄unguha dakika tsano, sa ya kumi na mbili ya ukwari, sa ya saɓa yav̄unguha dakika kumi na tsano, sa ya shendra, sa ya tsano na dakika kumi na mbili, sa saɓa zaikamiliha.



Chapitre précédentChapitre suivantTable des matières |  | Pour demander l'heure, on utilise le mot SA (= heure, en arabe) ou LERA (= l'heure, en français) : | - Rina lera trini ? | = Quelle heure avons-nous ?(= Nous avons heure quoi ?) | - Rina sa ya ngav̄i ? | = Quelle heure avons-nous ?(= Nous avons heure de combien ?) | Pour dire l'heure, le mot SA (= heure) précède le chiffre. | - Rina sa ya kumi na moja | = Nous avons onze heures(= Nous avons heure onzième) | HEURE MAHORAISE | HEURE OCCIDENTALE | Sa ya handra | 1ère heure | 7 h du matin | Sa ya v̄ili | 2ème heure | 8 h du matin | Sa ya raru | 3ème heure | 9 h du matin | Sa ya nne | 4ème heure | 10 h du matin | Sa ya tsano | 5 ème heure | 11 h du matin | Sa ya sita | 6 ème heure | 12 h du matin | Sa ya saɓa | 7 ème heure | 1 h de l'après-midi | Sa ya nane | 8 ème heure | 2 h de l'après-midi | Sa ya shendra | 9 ème heure | 3 h de l'après-midi | Sa ya kumi | 10 ème heure | 4 h de l'après-midi | Sa ya kumi na moja | 11 ème heure | 5 h de l'après-midi | Sa ya kumi na mbili | 12 ème heure | 6 h du soir | Sa ya handra ya uku | = 1ère heure de la nuit (= 19 h) | Sa ya v̄ili ya uku | = 2ème heure de la nuit (= 20 h) | Sa ya raru ya uku | = 3ème heure de la nuit (= 21 h), etc.. | Aux petites heures de la nuit, on peut aussi se repérer au chant du coq ! |  | - Kukuyi la handra | (= le 1er coq) | = 2 heures du matin | - Kukuyi la v̄ili | (= le 2ème coq) | = 3 heures du matin | - Kukuyi la raru | (= le 3ème coq) | = 4 heures du matin | Sa ya handra... | na dakika tsano | Sept heures... | cinq |  | na dakika kumi |  | dix |  | na dakika kumi na tsano |  | quinze / et quart |  | na dakika shirini |  | vingt | Sa ya raru wa nusu | Trois heures et demie  (= 9 h 30) | Sa ya kumi na mbili wa nusu | Douze heures et demie (= 6 h 30) | Sa ya nane yav̄unguha dakika kumi | huit heures moins dix (= 2 h moins 10) | Sa ya shendra yav̄unguha dakika shirini | neuf heures moins vingt (= 3 h moins 20) | ASUƁUHI | de 6 h à 9 h environ | Le matin | MUTSANA | de 9 h à 14 h environ | La journée | UJONI | de 14 h à 18 h environ | L'après-midi, le soir | UKU | de 18 h à 6 h du matin | La nuit | ALFADJIRI | vers  4 h 30 / 5 h 10 | Prière de l'aube | ADHUHURI | vers 12 h / 12 h 30 | Prière de midi | ALASIRI | vers 16 h / 16 h 30 | Prière de l'après-midi | MAHARIBI | vers 18 h / 18 h 30 | Prière du coucher du soleil | ALESHA | vers 20 h | Prière de la nuit | Mubwabwa, wa- | bavard | Mushudjaa, wa- | courageux | Mudjisifu, wa- | vantard | Mustahamilifu, wa- | patient, endurant | Muhara, wa- | peureux | Mutaalamu, wa- | expert, spécialiste | Mujinga, wa- | sot, imbécile | Mutoro, wa- | sauvage, fuyard | Mukaidi, wa- | entêté | Mutrulivu, wa | calme, tranquille | Munafiki, wa- | traître, menteur | Mwaminifu, wa- | honnête | Chapitre précédent | Chapitre suivant | Table des matières
 | Pour demander l'heure, on utilise le mot SA (= heure, en arabe) ou LERA (= l'heure, en français) :
- Rina lera trini ? | = Quelle heure avons-nous ?(= Nous avons heure quoi ?)
- Rina sa ya ngav̄i ? | = Quelle heure avons-nous ?(= Nous avons heure de combien ?)
Pour dire l'heure, le mot SA (= heure) précède le chiffre.
- Rina sa ya kumi na moja | = Nous avons onze heures(= Nous avons heure onzième)
HEURE MAHORAISE | HEURE OCCIDENTALE
Sa ya handra | 1ère heure | 7 h du matin
Sa ya v̄ili | 2ème heure | 8 h du matin
Sa ya raru | 3ème heure | 9 h du matin
Sa ya nne | 4ème heure | 10 h du matin
Sa ya tsano | 5 ème heure | 11 h du matin
Sa ya sita | 6 ème heure | 12 h du matin
Sa ya saɓa | 7 ème heure | 1 h de l'après-midi
Sa ya nane | 8 ème heure | 2 h de l'après-midi
Sa ya shendra | 9 ème heure | 3 h de l'après-midi
Sa ya kumi | 10 ème heure | 4 h de l'après-midi
Sa ya kumi na moja | 11 ème heure | 5 h de l'après-midi
Sa ya kumi na mbili | 12 ème heure | 6 h du soir
Sa ya handra ya uku | = 1ère heure de la nuit (= 19 h)
Sa ya v̄ili ya uku | = 2ème heure de la nuit (= 20 h)
Sa ya raru ya uku | = 3ème heure de la nuit (= 21 h), etc..
Aux petites heures de la nuit, on peut aussi se repérer au chant du coq !
 | - Kukuyi la handra | (= le 1er coq) | = 2 heures du matin
- Kukuyi la v̄ili | (= le 2ème coq) | = 3 heures du matin
- Kukuyi la raru | (= le 3ème coq) | = 4 heures du matin
Sa ya handra... | na dakika tsano | Sept heures... | cinq
 | na dakika kumi |  | dix
 | na dakika kumi na tsano |  | quinze / et quart
 | na dakika shirini |  | vingt
Sa ya raru wa nusu | Trois heures et demie  (= 9 h 30)
Sa ya kumi na mbili wa nusu | Douze heures et demie (= 6 h 30)
Sa ya nane yav̄unguha dakika kumi | huit heures moins dix (= 2 h moins 10)
Sa ya shendra yav̄unguha dakika shirini | neuf heures moins vingt (= 3 h moins 20)
ASUƁUHI | de 6 h à 9 h environ | Le matin
MUTSANA | de 9 h à 14 h environ | La journée
UJONI | de 14 h à 18 h environ | L'après-midi, le soir
UKU | de 18 h à 6 h du matin | La nuit
ALFADJIRI | vers  4 h 30 / 5 h 10 | Prière de l'aube
ADHUHURI | vers 12 h / 12 h 30 | Prière de midi
ALASIRI | vers 16 h / 16 h 30 | Prière de l'après-midi
MAHARIBI | vers 18 h / 18 h 30 | Prière du coucher du soleil
ALESHA | vers 20 h | Prière de la nuit
Mubwabwa, wa- | bavard | Mushudjaa, wa- | courageux
Mudjisifu, wa- | vantard | Mustahamilifu, wa- | patient, endurant
Muhara, wa- | peureux | Mutaalamu, wa- | expert, spécialiste
Mujinga, wa- | sot, imbécile | Mutoro, wa- | sauvage, fuyard
Mukaidi, wa- | entêté | Mutrulivu, wa | calme, tranquille
Munafiki, wa- | traître, menteur | Mwaminifu, wa- | honnête
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 23,
    title: "Leçon 23",
    description: "Contenu du chapitre 23.",
    content: `

Chapitre 24 - Jours, Mois, Dates

 1. LES JOURS DE LA SEMAINE : 


MFUMOTSI
(le 1er jour de la semaine)
Samedi
MFUMOV̄ILI(le 2ème jour de la semaine)Dimanche
MFUMORARU(le 3ème jour de la semaine)Lundi
MFUMONNE(le 4ème jour de la semaine)Mardi
MFUMOTSANO(le 5ème jour de la semaine)Mercredi
YAHOA(jour de bain)Jeudi
DJIMWA(assemblée dans la mosquée)Vendredi


 2. LES MOIS DU CALENDRIER GRÉGORIEN : 

Le calendrier grégorien est le calendrier normalement utilisé dans toutes les activités de la vie quotidienne à Mayotte. Les noms des mois sont transcrits directement des mois français, et se prononcent de la même façon.


Mwezi wa ...
JÃVYE
Janvier
JWIYE
Juillet
FEVRIYEFévrierUTUAoût
MARSIMarsSEPTAMBRUSeptembre
AVRILIAvrilOKTOBRUOctobre
MEMaiNOVAMBRUNovembre
JWÎJuinDESAMBRUDécembre


 3. COMMENT LIRE UNE DATE : 

Le chiffre de la date s'intercale entre le mot mwezi (= mois) et le nom du mois en question.

EXEMPLE : 

Voici la date d'aujourd'hui en shimaore :





 4.  LES MOIS DU CALENDRIER DE L'HÉGIRE : 

Bien que le calendrier grégorien soit le plus employé, le calendrier de l'hégire ou calendrier musulman est cependant utilisé pour tout ce qui concerne la vie religieuse et les fêtes musulmanes.
C'est un calendrier lunaire, avec des mois de 29 ou 30 jours. L'année lunaire étant plus courte d'environ 10 jours par rapport à l'année solaire, il y a un décalage croissant de 10 jours chaque
année entre les deux calendriers : ce qui explique que l'on ne peut établir de correspondance fixe entre les mois du calendrier français et les mois musulmans.


Mwezi wa ...
ASHURA
MouharramMIRADJI
Rajab
KARUSafarƊEDZA Cha'ban
MAULIDARabi' Al-AwwalRAMADHANI / TSUMURamadan
V̄ILI WA MAULIDARabi' Al-ThaniMUFUNGUOChawwal
RARU WA MAULIDAJoumada Al-AwwalV̄ILI WA MUFUNGUODhou Al-qi'da
SUMBWAJoumada Al-ThaniHEDJA MAKADhou Al-Hijja


 5. LES PRINCIPALES FÊTES MUSULMANES A MAYOTTE : 


MAULIDA
Maulid, ou Mouloud, commémore à la fois la naissance et la mort du prophète Mohamed  (S.A.W.), (12 Rabioul Awwal.)
MIRADJIMiraj, commémore le voyage du prophète Mohamed (S.A.W.) à Jérusalem, et son ascension au ciel. (27 Rabioul Awwal.)
IDI EL FITRIAïd-el-Fitr, fête la fin du mois de Ramadan, (1er Chawwal.)
IDI EL HADJIAïd-el-Adha, (Aïd-el-Kebir), ou fête du sacrifice, (10 Zoul Hidjjah.)


 6. QUELQUES EXPRESSIONS LIÉES AU TEMPS : 


Av̄asa v̄anumaintenant
Ɓaãda mesoAprès-demain
Idi mbaraka !Bonne fête de l'Aïd !
Ina haleil y a longtemps
Jana, V̄ojanahier, la veille
Karneun siècle
Leoaujourd'hui
Leraquand, au moment où
Mesodemain
Mufumo, mi-une semaine, des --
Mufumo ujaola semaine prochaine
Mwaha, mahaune année, des --
Mwaha janal'année dernière
Mwaha mwema !Bonne année !
Mwahanil'année prochaine
Mwezi, meziun mois, des --
Mwezi unuce mois-ci
Mwezini yavirale mois passé
Sa ileà cette heure là
Sukuun jour, le jour où
Suku ya v̄ilile jour suivant
Suku yangina tsenaun autre jour
Ta ravajusqu'à maintenant
Tsi halebientôt
V̄av̄o na v̄av̄ode temps en temps
Wakati ukaoà l'heure actuelle
Wakati uwoà ce moment là
Zama za haleautrefois
Zamani dans le temps
Zuziavant-hier


EXERCICES

EXERCICE 1 :	Traduisez en shimaore :


Aujourd'hui, hier, avant-hier, demain, dans le temps, il y a longtemps, bientôt, à ce moment là, de temps en temps, une semaine, une année, un mois, un siècle, le jour suivant, le 4 Juillet, le 1er Mai, le 15 Août, le 1er Janvier, le 11 Novembre, lundi, mardi, jeudi, samedi, vendredi, dimanche, mercredi, Avril, Février, Novembre, Mars.


EXERCICE 2 :	Traduisez en français :


Mifumo mili, mezi sita, zama za hale, suku kumi na tsano, suku ya v̄ili, jana, meso, wakati ukao, av̄asa v̄anu,  mwezi unu, mwaha mwema, mwaha elfu mbili na mbili, ina hale, tsi hale, mwahani, mwezi wa Ramadhani, suku ya Idi el Fitri, Idi mbaraka, mwezi ujao, mufumo ujao.



Chapitre précédentChapitre suivantTable des matières | MFUMOTSI | (le 1er jour de la semaine) | Samedi | MFUMOV̄ILI | (le 2ème jour de la semaine) | Dimanche | MFUMORARU | (le 3ème jour de la semaine) | Lundi | MFUMONNE | (le 4ème jour de la semaine) | Mardi | MFUMOTSANO | (le 5ème jour de la semaine) | Mercredi | YAHOA | (jour de bain) | Jeudi | DJIMWA | (assemblée dans la mosquée) | Vendredi | JÃVYE | Janvier | JWIYE | Juillet | FEVRIYE | Février | UTU | Août | MARSI | Mars | SEPTAMBRU | Septembre | AVRILI | Avril | OKTOBRU | Octobre | ME | Mai | NOVAMBRU | Novembre | JWÎ | Juin | DESAMBRU | Décembre | Voici la date d'aujourd'hui en shimaore : |  | ASHURA | Mouharram | MIRADJI | Rajab | KARU | Safar | ƊEDZA | Cha'ban | MAULIDA | Rabi' Al-Awwal | RAMADHANI / TSUMU | Ramadan | V̄ILI WA MAULIDA | Rabi' Al-Thani | MUFUNGUO | Chawwal | RARU WA MAULIDA | Joumada Al-Awwal | V̄ILI WA MUFUNGUO | Dhou Al-qi'da | SUMBWA | Joumada Al-Thani | HEDJA MAKA | Dhou Al-Hijja | MAULIDA | Maulid, ou Mouloud, commémore à la fois la naissance et la mort du prophète Mohamed  (S.A.W.), (12 Rabioul Awwal.) | MIRADJI | Miraj, commémore le voyage du prophète Mohamed (S.A.W.) à Jérusalem, et son ascension au ciel. (27 Rabioul Awwal.) | IDI EL FITRI | Aïd-el-Fitr, fête la fin du mois de Ramadan, (1er Chawwal.) | IDI EL HADJI | Aïd-el-Adha, (Aïd-el-Kebir), ou fête du sacrifice, (10 Zoul Hidjjah.) | Av̄asa v̄anu | maintenant | Ɓaãda meso | Après-demain | Idi mbaraka ! | Bonne fête de l'Aïd ! | Ina hale | il y a longtemps | Jana, V̄ojana | hier, la veille | Karne | un siècle | Leo | aujourd'hui | Lera | quand, au moment où | Meso | demain | Mufumo, mi- | une semaine, des -- | Mufumo ujao | la semaine prochaine | Mwaha, maha | une année, des -- | Mwaha jana | l'année dernière | Mwaha mwema ! | Bonne année ! | Mwahani | l'année prochaine | Mwezi, mezi | un mois, des -- | Mwezi unu | ce mois-ci | Mwezini yavira | le mois passé | Sa ile | à cette heure là | Suku | un jour, le jour où | Suku ya v̄ili | le jour suivant | Suku yangina tsena | un autre jour | Ta rava | jusqu'à maintenant | Tsi hale | bientôt | V̄av̄o na v̄av̄o | de temps en temps | Wakati ukao | à l'heure actuelle | Wakati uwo | à ce moment là | Zama za hale | autrefois | Zamani | dans le temps | Zuzi | avant-hier | Chapitre précédent | Chapitre suivant | Table des matières
MFUMOTSI | (le 1er jour de la semaine) | Samedi
MFUMOV̄ILI | (le 2ème jour de la semaine) | Dimanche
MFUMORARU | (le 3ème jour de la semaine) | Lundi
MFUMONNE | (le 4ème jour de la semaine) | Mardi
MFUMOTSANO | (le 5ème jour de la semaine) | Mercredi
YAHOA | (jour de bain) | Jeudi
DJIMWA | (assemblée dans la mosquée) | Vendredi
JÃVYE | Janvier | JWIYE | Juillet
FEVRIYE | Février | UTU | Août
MARSI | Mars | SEPTAMBRU | Septembre
AVRILI | Avril | OKTOBRU | Octobre
ME | Mai | NOVAMBRU | Novembre
JWÎ | Juin | DESAMBRU | Décembre
Voici la date d'aujourd'hui en shimaore :

ASHURA | Mouharram | MIRADJI | Rajab
KARU | Safar | ƊEDZA | Cha'ban
MAULIDA | Rabi' Al-Awwal | RAMADHANI / TSUMU | Ramadan
V̄ILI WA MAULIDA | Rabi' Al-Thani | MUFUNGUO | Chawwal
RARU WA MAULIDA | Joumada Al-Awwal | V̄ILI WA MUFUNGUO | Dhou Al-qi'da
SUMBWA | Joumada Al-Thani | HEDJA MAKA | Dhou Al-Hijja
MAULIDA | Maulid, ou Mouloud, commémore à la fois la naissance et la mort du prophète Mohamed  (S.A.W.), (12 Rabioul Awwal.)
MIRADJI | Miraj, commémore le voyage du prophète Mohamed (S.A.W.) à Jérusalem, et son ascension au ciel. (27 Rabioul Awwal.)
IDI EL FITRI | Aïd-el-Fitr, fête la fin du mois de Ramadan, (1er Chawwal.)
IDI EL HADJI | Aïd-el-Adha, (Aïd-el-Kebir), ou fête du sacrifice, (10 Zoul Hidjjah.)
Av̄asa v̄anu | maintenant
Ɓaãda meso | Après-demain
Idi mbaraka ! | Bonne fête de l'Aïd !
Ina hale | il y a longtemps
Jana, V̄ojana | hier, la veille
Karne | un siècle
Leo | aujourd'hui
Lera | quand, au moment où
Meso | demain
Mufumo, mi- | une semaine, des --
Mufumo ujao | la semaine prochaine
Mwaha, maha | une année, des --
Mwaha jana | l'année dernière
Mwaha mwema ! | Bonne année !
Mwahani | l'année prochaine
Mwezi, mezi | un mois, des --
Mwezi unu | ce mois-ci
Mwezini yavira | le mois passé
Sa ile | à cette heure là
Suku | un jour, le jour où
Suku ya v̄ili | le jour suivant
Suku yangina tsena | un autre jour
Ta rava | jusqu'à maintenant
Tsi hale | bientôt
V̄av̄o na v̄av̄o | de temps en temps
Wakati ukao | à l'heure actuelle
Wakati uwo | à ce moment là
Zama za hale | autrefois
Zamani | dans le temps
Zuzi | avant-hier
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 24,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 24.",
    content: `

Chapitre 25 - Les Noms : Le Genre U-



Ce que nous appelons ici le genre  U- est en réalité la juxtaposition de 3 classes distinctes de noms, ayant chacune le préfixe nominal  U- au singulier. Ce genre ne comporte pas de classes plurielles spécifiques.

Ces 3 classes sont :

La classe 11, qui regroupe des noms d'objets concrets à pluriels en classe 4, 6 et 10.
La classe 14, qui regroupe des noms singuliers abstraits.
La classe 15, qui regroupe des infinitifs de verbes employés comme noms.


 1. CLASSE 11 : NOMS D'OBJETS CONCRETS À  PLURIELS DIVERS : 


Singulier
Pluriel
Classe
Traduction
Uhura
nguhura
Cl 10
un mur, des --
Uku
mauku
Cl 6
une nuit, des --
Ulevu
malevu
Cl 6
un poil de barbe, des --
Ulimi
malimi, maulimi
Cl 6
une langue, des --
Umiyo
maumiyo
Cl 6
la gorge, le gosier, des --
Upanga
mipanga
Cl 4
une machette, des --
Ure
mare
Cl 6
la bave, la salive
Uso
mauso, nguso
Cl 6, 10
un visage, des --
Utro
mautro
Cl 6
un toit, des --
Uv̄andre
v̄andre
Cl 10
un côté, des --
Uwaɗe
mawaɗe
Cl 6
une maladie, des --
Uzi
mauzi
Cl 6
un fil, des --
Wakati
makati, nyakati
Cl 6, 10
le temps, des moments
Wani
mani, mauani
Cl 6
une feuille, des --
Waswiya
nyasiya
Cl 10
un conseil, une recommandation, des --
Wingu
mbingu, maingu 
Cl 10, 6
le ciel, les --, des nuages


 2. CLASSE 14 : NOMS SINGULIERS ABSTRAITS : 

Ceux-ci sont la plupart du temps formés à partir d'une racine adjectivale, nominale ou verbale.


 a) Racine Adjectivale : 


Adjectif
Traduction
Nom
Traduction
-moja
un
-> Umoja
l'union
-nono
sain
-> Unono
la santé
-sawa 
égal
-> Usawa
l'égalité
-titi
petit
-> Utiti
la petitesse
-trahafu
propre
-> Urahafu
la propreté
-tronga
gros
-> Utronga
la grosseur
-zuri
beau
-> Uzuri
la beauté




 b) Racine Nominale : 


Nom
Traduction
Nom
Traduction
Masikini
un pauvre
-> Usikini
la pauvreté
Mujinga
un idiot
-> Ujinga
l'idiotie
Mwanamtsa
un enfant
-> Unatsa
l'enfance, la jeunesse
Mudjemaza
un parent
-> Udjama
la parenté
Mwandzani
un ami
-> Uwandzani
l'amitié
Mufalume
un roi
-> Ufalume
la royauté
Nafasi
un temps libre
-> Unafasi
la liberté
Tadjiri
riche
-> Utadjiri
la richesse




 c) Racine Verbale : 


Verbe
Traduction
Nom
Traduction
Uɗuha
vieillir
-> Uɗuhazi
la vieillesse
Udzaya
accoucher
-> Udzazi
l'accouchement
Ula
manger
-> Uali / Wali
le manger
Uloa
pêcher
-> Ulozi
la pêche
Usahau
oublier
-> Usahau
l'oubli



 d) Autres Mots : 


Nom
Traduction
Ulemengu
le monde
Uruva
poison végétal pour la pêche



 3. CLASSE 15 : VERBES SUBSTANTIVÉS (employés comme noms) : 

L'infinitif des verbes en shimaore commence par U- (alors qu'il commence en HU- en shindzuani).
C'est pour cette seule raison que nous avons placé ici l'étude des verbes substantivés, au lieu de les traiter dans un chapitre à part qui aurait été très court !


Ufanya hazi ndjema
Travailler est bien
Ulawa yahe
à son départ



 4. ACCORDS DE CLASSE DE L'ADJECTIF : 


Avec les noms des classes 11 et 14 :
Au singulier, l'accord de l'adjectif se fait avec le préfixe singulier de la classe 3 :  MU-
Au pluriel, l'accord de l'adjectif se fait selon le préfixe pluriel du nom :  MI- , MA- , etc..


Upanga muzuri
une belle machette
Mipanga mizuri
des belles machettes
Uzi muɗu
un fil noir
Mauzi maɗu
des fils noirs
Wakati utsoka mui
le temps sera mauvais
 


Avec les noms de la classe 15 (verbes substantivés) :
L'accord de l'adjectif se fait en classe 9.


Upiha fetre
Faire la cuisine est bien
Uhiɓa tsi ndjema
Ce n'est pas bien de voler
Ulindra nyengi hatwari
Le danger vient à force d'attendre
Usoma ndzuzuri
C'est bien de lire
Tsi ndziro uheya mulima unu
Ce n'est pas difficile d'escalader cette montagne




PROVERBE : 

UHARAYA WASWIYA ULAWA MASIYAQui refuse un conseil voit sortir du pus



VOCABULAIRE


Uhaju, ma-
le tamarin
Upotevu
l'égarement, la perte
Umati 
la communauté
Upwari
la vantardise
Umri
l'âge
Utukufu
l'honneur
Urisifu
la laideur
Wahadi
une promesse
Ushaɓaɓi
l'adolescence
Wivu
la jalousie
Ushauku
l'envie, le désir
Wongo, ma-
le cerveau


EXERCICES

EXERCICE 1 : Traduisez en shimaore :


La pauvreté, la grosseur, la langue, la liberté, le temps, l'enfance, la beauté, la laideur, la richesse, l'honneur, l'âge, l'oubli, l'envie, la jalousie.
Une mauvaise maladie, une grande amitié, sa beauté, leur petitesse, la pauvreté des gens, ma jeunesse, nos machettes neuves,  notre toit, un fil noir, beaucoup de maladies.


EXERCICE 2 : Traduisez en français :


Unatsa, udjama, usahau, uruva, wakati, urisifu, utukufu, uv̄andre, malevu, maingu, mauku, mawaɗe, uzuri, utiti, utadjiri, ulozi,  uwandzani, ufalume, udzazi, wongo.


EXERCICE 3 : Traduisez en français :



Mwana unu adjitria uwaɗe ha wivu.
Tsinunua mipanga miv̄ia.
Aendre Ulaya mwaha jana.
Mulozi arumia uruva ile apare fi nyengi.
Ulimi wahe mutronga.
Ana upanga muv̄ia.
Watru washerehi uhuru wa tsi yao.
Namulale ha unono.
Akatra umri wahe.
Uku ungia.




Chapitre précédentChapitre suivantTable des matières |  | Ce que nous appelons ici le genre  U- est en réalité la juxtaposition de 3 classes distinctes de noms, ayant chacune le préfixe nominal  U- au singulier. Ce genre ne comporte pas de classes plurielles spécifiques. | Singulier | Pluriel | Classe | Traduction | Uhura | nguhura | Cl 10 | un mur, des -- | Uku | mauku | Cl 6 | une nuit, des -- | Ulevu | malevu | Cl 6 | un poil de barbe, des -- | Ulimi | malimi, maulimi | Cl 6 | une langue, des -- | Umiyo | maumiyo | Cl 6 | la gorge, le gosier, des -- | Upanga | mipanga | Cl 4 | une machette, des -- | Ure | mare | Cl 6 | la bave, la salive | Uso | mauso, nguso | Cl 6, 10 | un visage, des -- | Utro | mautro | Cl 6 | un toit, des -- | Uv̄andre | v̄andre | Cl 10 | un côté, des -- | Uwaɗe | mawaɗe | Cl 6 | une maladie, des -- | Uzi | mauzi | Cl 6 | un fil, des -- | Wakati | makati, nyakati | Cl 6, 10 | le temps, des moments | Wani | mani, mauani | Cl 6 | une feuille, des -- | Waswiya | nyasiya | Cl 10 | un conseil, une recommandation, des -- | Wingu | mbingu, maingu | Cl 10, 6 | le ciel, les --, des nuages | Adjectif | Traduction | Nom | Traduction | -moja | un | -> Umoja | l'union | -nono | sain | -> Unono | la santé | -sawa | égal | -> Usawa | l'égalité | -titi | petit | -> Utiti | la petitesse | -trahafu | propre | -> Urahafu | la propreté | -tronga | gros | -> Utronga | la grosseur | -zuri | beau | -> Uzuri | la beauté | Nom | Traduction | Nom | Traduction | Masikini | un pauvre | -> Usikini | la pauvreté | Mujinga | un idiot | -> Ujinga | l'idiotie | Mwanamtsa | un enfant | -> Unatsa | l'enfance, la jeunesse | Mudjemaza | un parent | -> Udjama | la parenté | Mwandzani | un ami | -> Uwandzani | l'amitié | Mufalume | un roi | -> Ufalume | la royauté | Nafasi | un temps libre | -> Unafasi | la liberté | Tadjiri | riche | -> Utadjiri | la richesse | Verbe | Traduction | Nom | Traduction | Uɗuha | vieillir | -> Uɗuhazi | la vieillesse | Udzaya | accoucher | -> Udzazi | l'accouchement | Ula | manger | -> Uali / Wali | le manger | Uloa | pêcher | -> Ulozi | la pêche | Usahau | oublier | -> Usahau | l'oubli | Nom | Traduction | Ulemengu | le monde | Uruva | poison végétal pour la pêche | Ufanya hazi ndjema | Travailler est bien | Ulawa yahe | à son départ | Upanga muzuri | une belle machette | Mipanga mizuri | des belles machettes | Uzi muɗu | un fil noir | Mauzi maɗu | des fils noirs | Wakati utsoka mui | le temps sera mauvais |  | Upiha fetre | Faire la cuisine est bien | Uhiɓa tsi ndjema | Ce n'est pas bien de voler | Ulindra nyengi hatwari | Le danger vient à force d'attendre | Usoma ndzuzuri | C'est bien de lire | Tsi ndziro uheya mulima unu | Ce n'est pas difficile d'escalader cette montagne | Uhaju, ma- | le tamarin | Upotevu | l'égarement, la perte | Umati | la communauté | Upwari | la vantardise | Umri | l'âge | Utukufu | l'honneur | Urisifu | la laideur | Wahadi | une promesse | Ushaɓaɓi | l'adolescence | Wivu | la jalousie | Ushauku | l'envie, le désir | Wongo, ma- | le cerveau | Chapitre précédent | Chapitre suivant | Table des matières
 | Ce que nous appelons ici le genre  U- est en réalité la juxtaposition de 3 classes distinctes de noms, ayant chacune le préfixe nominal  U- au singulier. Ce genre ne comporte pas de classes plurielles spécifiques.
Singulier | Pluriel | Classe | Traduction
Uhura | nguhura | Cl 10 | un mur, des --
Uku | mauku | Cl 6 | une nuit, des --
Ulevu | malevu | Cl 6 | un poil de barbe, des --
Ulimi | malimi, maulimi | Cl 6 | une langue, des --
Umiyo | maumiyo | Cl 6 | la gorge, le gosier, des --
Upanga | mipanga | Cl 4 | une machette, des --
Ure | mare | Cl 6 | la bave, la salive
Uso | mauso, nguso | Cl 6, 10 | un visage, des --
Utro | mautro | Cl 6 | un toit, des --
Uv̄andre | v̄andre | Cl 10 | un côté, des --
Uwaɗe | mawaɗe | Cl 6 | une maladie, des --
Uzi | mauzi | Cl 6 | un fil, des --
Wakati | makati, nyakati | Cl 6, 10 | le temps, des moments
Wani | mani, mauani | Cl 6 | une feuille, des --
Waswiya | nyasiya | Cl 10 | un conseil, une recommandation, des --
Wingu | mbingu, maingu | Cl 10, 6 | le ciel, les --, des nuages
Adjectif | Traduction | Nom | Traduction
-moja | un | -> Umoja | l'union
-nono | sain | -> Unono | la santé
-sawa | égal | -> Usawa | l'égalité
-titi | petit | -> Utiti | la petitesse
-trahafu | propre | -> Urahafu | la propreté
-tronga | gros | -> Utronga | la grosseur
-zuri | beau | -> Uzuri | la beauté
Nom | Traduction | Nom | Traduction
Masikini | un pauvre | -> Usikini | la pauvreté
Mujinga | un idiot | -> Ujinga | l'idiotie
Mwanamtsa | un enfant | -> Unatsa | l'enfance, la jeunesse
Mudjemaza | un parent | -> Udjama | la parenté
Mwandzani | un ami | -> Uwandzani | l'amitié
Mufalume | un roi | -> Ufalume | la royauté
Nafasi | un temps libre | -> Unafasi | la liberté
Tadjiri | riche | -> Utadjiri | la richesse
Verbe | Traduction | Nom | Traduction
Uɗuha | vieillir | -> Uɗuhazi | la vieillesse
Udzaya | accoucher | -> Udzazi | l'accouchement
Ula | manger | -> Uali / Wali | le manger
Uloa | pêcher | -> Ulozi | la pêche
Usahau | oublier | -> Usahau | l'oubli
Nom | Traduction
Ulemengu | le monde
Uruva | poison végétal pour la pêche
Ufanya hazi ndjema | Travailler est bien
Ulawa yahe | à son départ
Upanga muzuri | une belle machette | Mipanga mizuri | des belles machettes
Uzi muɗu | un fil noir | Mauzi maɗu | des fils noirs
Wakati utsoka mui | le temps sera mauvais | 
Upiha fetre | Faire la cuisine est bien
Uhiɓa tsi ndjema | Ce n'est pas bien de voler
Ulindra nyengi hatwari | Le danger vient à force d'attendre
Usoma ndzuzuri | C'est bien de lire
Tsi ndziro uheya mulima unu | Ce n'est pas difficile d'escalader cette montagne
Uhaju, ma- | le tamarin | Upotevu | l'égarement, la perte
Umati | la communauté | Upwari | la vantardise
Umri | l'âge | Utukufu | l'honneur
Urisifu | la laideur | Wahadi | une promesse
Ushaɓaɓi | l'adolescence | Wivu | la jalousie
Ushauku | l'envie, le désir | Wongo, ma- | le cerveau
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 25,
    title: "Leçon 25",
    description: "Contenu du chapitre 25.",
    content: `

Chapitre 26 - Les Prépositions

RAPPEL :   Une préposition est un mot qui permet de situer quelque chose dans l'espace ou dans le temps. (Par exemple : sur la table ; à cinq heures ; dans la maison.)

 1. LES SUFFIXES LOCATIFS : 








    a. -NI = dans, sur
Exemple : ƊAGO + NI
-> Ɗagoni
= dans / à la maison.

 

    b. -JU = sur
Exemple : MEZA + JU
-> Mezaju
= sur la table.


 2. LES PRÉPOSITIONS  


ATA  =  à, jusqu'à
Wanatsa wa maha sita ata upara saɓa.        Les enfants de six ans jusqu'à sept ans.
ƁAÃDA YA  =  après
Arudi ɗagoni ɓaãda ya udzazi.        Elle est rentrée à la maison après l'accouchement.
ƁAINA YA   =  entre
Tsiketsi ɓaina ya ɓaɓa na mama.    Je suis assis entre papa et maman.
HA =  par, au moyen de, chez
Nisendra ha mwandzani wangu.      Je vais chez mon ami.
Aendre ha mindru.        Il est allé à pieds.
HARIMWA   =  dans, sur, contre, au milieu de, au sujet de
Alala harimwa mtsanga.       Il est couché sur le sable.
Arongoa harimwa trongo ya serikali.     Il a parlé de l'affaire du gouvernement.
KABLA (YA) = avant (de)
Awaswili kabla ya vua unya.      Il est arrivé avant qu'il pleuve.
KARIƁU (NA)   =  près (de), proche (de)
Aketsi kariɓu na wami.       Il est assis près de moi.
A kariɓu na moro.        Il est près du feu.
MBALI (NA) = loin (de)

Wami uketsi mbali na ɓaharini.       J'habite loin de la mer.
MBELI (ZA / NA)   =  devant, en face de
Gari langu la mbeli na laho.       Ma voiture est devant la tienne.
Ipuhu izia mbeli na ipaha.       Le rat s'est arrêté en face du chat.
MENGONI (HA / MWA)  =  derrière, parmi
Adzama mengoni mwa inyumba.        Il s'est caché derrière la maison.
Waili mengoni wasi.        Deux parmi nous.
Aɓaki mengoni ha ɓaɓahe.       Il reste dans le dos de son père.
MONI (MWA / NA)   =  dans, à l'intérieur de
Angia moni mwa ligari.       Il est entré dans la voiture.
Watru mama wa moni na inyumba.     Les femmes sont dans la maison.
MPAKA   =  jusqu'à
Tsiendre mpaka mupakani.       Je suis allé jusqu'au bout.
NDRANI   =  à l'intérieur
Wanatsa wa ndrani.       Les jeunes sont à l'intérieur.
NYUMA (NA / YA)   =  derrière, après
Endra nyuma na wasi.       Marche derrière nous.
PANI   =  à l'intérieur, dans la maison, dans les chambres
Tria zitrandra pani.       Mets les lits dans les chambres.
UJU (MWA / NA)   =  sur, au-dessus (de)
Alala uju mwa mutsanga.      Il est couché sur le sable.
Nyumba yangu ya uju na lapitali.       Ma maison est au-dessus de l'hôpital.
USONI  =  de l'avant
Misomo yasendra usoni.        Les leçons vont de l'avant.
UTSINI (MWA / NA)   =  sous, au-dessous (de)
Mwana asindzia utsini mwa umwiri.      L'enfant s'est endormi sous l'arbre.
Muro uvira utsini na idaradja.      La rivière passe sous le pont.
V̄WAMOJA NA   =  avec
Atayarisha umusomo v̄wamoja na wami.        Il a préparé la leçon avec moi.

PROVERBE : 


Ɓaãda dhiki faradji.Après les difficultés, le bonheur.Après la pluie le beau temps.


EXERCICES

EXERCICE 1 : Traduisez en shimaore :


Derrière la maison, devant l'hôpital,  à l'intérieur de la maison, derrière l'école, au-dessous de l'arbre,   près de la porte, derrière son père, loin de la mer, près du village, chez mon père, chez ma femme, près de moi, sur le sable, en face de la mosquée, derrière la porte, dans le sac, sous le pont, sur le pont, près du feu,  devant moi.


EXERCICE 2 : Traduisez en français :



Aendre mpaka nyumbani ha mayahe.
Mwana asindzia utsini na mwiri.
Aketsi kariɓu na umoro.
Alala harimwa ndzia.
Usiendre mbali.
Adzama nyuma ya umwiri.
Nyumba yahe ya mbeli na ilapitali.
Ngalia moni mwa mukoɓa.
Mwana a nyuma na ɓaɓahe.
Nisuendra ha mushe wangu.




Chapitre précédentChapitre suivantTable des matières | a. -NI = dans, sur | Exemple : ƊAGO + NI
-> Ɗagoni | = dans / à la maison. |  | b. -JU = sur | Exemple : MEZA + JU
-> Mezaju | = sur la table. | Chapitre précédent | Chapitre suivant | Table des matières
a. -NI = dans, sur | Exemple : ƊAGO + NI
-> Ɗagoni | = dans / à la maison.

b. -JU = sur | Exemple : MEZA + JU
-> Mezaju | = sur la table.
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 26,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 26.",
    content: `

Chapitre 27 - Les Présentatifs

Il existe en shimaore une catégorie distincte de démonstratifs que nous appellerons des présentatifs. Les présentatifs du shimaore sont l'équivalent des prépositions françaises "voici" et "voilà", ou encore : "le voici", "la voici", "les voici", et : "le voilà", "la voilà", "les voilà".
Comme pour les démonstratifs, il y a trois degrés de présentatifs :

 1. LE PRÉSENTATIF DE PROXIMITÉ : 


Il correspond au français : voici ..., le voici, la voici, les voici.
Il est construit de la façon suivante :



 PRÉFIXE TS- + (CONNECTIF A +) DÉMONSTRATIF DE PROXIMITÉ 

 2. LE PRÉSENTATIF DE DISTANCE : 


Il correspond au français : voilà ..., le voilà, la voilà, les voilà.
Il est construit de la façon suivante :

 PRÉFIXE TS- + (CONNECTIF A +) DÉMONSTRATIF DE DISTANCE 

 3. LE PRÉSENTATIF DE RÉFÉRENCE : 


Il peut se traduire en français par : "le /la /les voici" ou "le /la /les voilà".
Il s'emploie la plupart du temps comme pronom, en réponse à une question où le nom de la personne ou de l'objet en question a déjà été évoqué. Par exemple :

Niv̄e marike ! 
- Tsiyo.
Donne-moi l'argent !
- Le voici.
Tike unazo ? - Tsizo.As-tu les billets ?- Les voilà.


Il se construit de la façon suivante :

 PRÉFIXE ACTUALISATEUR TS- + (CONNECTIF A +) DÉMONSTRATIF DE RÉFÉRENCE 

 4. LES PRONOMS PRÉSENTATIFS  : 

Cette catégorie de présentatifs est formée avec le préfixe actualisateur TS- suivi du pronom personnel
autonome. Elle existe pour les 1ères et les 2èmes personnes du singulier et du pluriel.



TSAMI
=  me voici
TSASI
=  nous voici
TSAWE
=  te voici
TSANYU
=  vous voici
TSAYE
=  le / la voici
TSAWO
= les voici



TABLEAU COMPLET DES PRÉSENTATIFS
Nous donnons dans ce tableau deux réalisations de chaque présentatif, qui correspondent :

à la prononciation de Mtsamboro sur la côte Ouest de la Grande Terre.
à la prononciation de Mamoudzou sur la côte Est.










CLASSES
PRÉSENTATIFS

PROXIMITÉ
DISTANCE
RÉFÉRENCE
Classe 1  Sing
Classe 2        Plur
Tsunu / Tsuwanu
Tswanu / Tsawanu
Tsule / Tsuwale
Tswale / Tsawale
Tsuwo / Tsiwo
Tswao / Tsawo
Classe 3       Sing
Classe 4       Plur
Tsunu / Tsuwanu
Tsini / Tsiyanu
Tsule / Tsuwale
Tsile / Tsayale
Tsuwo / Tsiwo
Tsiyo
Classe 5        Sing
Classe 6        Plur
Tsilini / Tsilani
Tsiyanu / Tsayani
Tsilile / Tsilale
Tsiyale / Tsayale
Tsililo / Tsilo
Tsayo
Classe 7        Sing
Classe 8        Plur
Tsini / Tsiyani
Tsizini / Tsizani
Tsile / Tsiyale
Tsizile / Tsizale
Tsiyo
Tsizo
Classe 9       Sing
Classe 10     Plur
Tsini / Tsiyani
Tsizini / Tsizani
Tsile / Tsiyale
Tsizile / Tsizale
Tsiyo
Tsizo
Classe 11     Sing
Tsunu / Tsuwanu
Tsule / Tsuwale
Tsuwo / Tsiwo


 5.  EXEMPLES D'EMPLOI DES PRÉSENTATIFS : 



Tsunu mwanangu.
Voici mon enfant.
Tsawanu wananya wangu.Voici mes frères et sœurs.
Tsule mulango wa nyumba.Voilà la porte de la maison.
Tsile menge ya liɗago.Voilà les lumières de la ville.
Tsilani gari langu.Voici ma voiture.
Tsayani magoshi yangu.Voici mes chaussures.
Tsini shiri yaho.Voici ta chaise.
Tsizani zitru bole.Voici des grandes choses.



Devinette : 

Tsina wana wangu tsawo, wami uwaona ɗe uku tu.
- Wawo mbani ? - "Nyora"
J'ai mes enfants là, je ne les vois que la nuit.
- De qui s'agit-il ? - "Les étoiles".


VOCABULAIRE


Ɓakuli, ma-
un récipient, des --
Fursheti, ma-
une fourchette, des --
Ɓao, ma-
une planche, des -- 
Gazeti, ma-
un journal, des --
Ɓavu, ma-
un côté, des --
Kofia, ma-un bonnet, des --
Dirisha, ma-
une fenêtre, des --
Sembea, ma-
un couteau, des --
Djeshi, ma-
une armée, des --
Shamba, maz-
un champ, des --
Dzina, ma-
un nom, des -- 
Sutru, ma-
une cuillère, des --


EXERCICES

EXERCICE 1 : Traduisez en shimaore :


Voici ma fiancée, voici mes camarades, voici le grand baobab, voici les brochettes,  voici ta fourchette, voici la fenêtre de la maison, voici le propriétaire, voici les voyageurs,  voici la moustiquaire, voici mes bagages, voici ma voiture, voici tes chaussures.
Voilà mon père, voilà mes frères et sœurs,   voilà ma femme, voilà mes amis anglais, voilà notre quartier, voilà la colline de Combani, voilà la porte de la maison, voilà des grands clous, voilà l'armée française, voilà les couteaux et les fourchettes, voilà une lettre de ton frère, voilà de la bonne eau.


EXERCICE 2 : Traduisez en français :


Tsunu mwanangu, tsiyanu madjirani wangu, tsawanu wadzade watru, tsunu mwandzani wahe, tsunu muɓuyu muɓole, tsunu mutsolola muzuri, tsini midzo yangu, tsini miri mititi, tsilani gari la ɓaɓa, tsayani madirisha ya nyumba, tsilini sembea laho,     tsayani majwayi ya kuhu.
Tsule ɓaɓaho, tsawale madjirani watru, tsule mwanazaza, tsawale wanangu, tsule mutsuzi muzuri, tsile miri ya shamba langu, tsule mudzo waho, tsile mipaka ya shamba, tsilile kofia langu, tsayale maɓavu ya ligari, tsilile duka la ɓaɓangu, tsayale mav̄uhu mai.



Chapitre précédentChapitre suivantTable des matières | PRÉFIXE TS- + (CONNECTIF A +) DÉMONSTRATIF DE PROXIMITÉ | PRÉFIXE TS- + (CONNECTIF A +) DÉMONSTRATIF DE DISTANCE | Niv̄e marike ! | - Tsiyo. | Donne-moi l'argent ! | - Le voici. | Tike unazo ? | - Tsizo. | As-tu les billets ? | - Les voilà. | PRÉFIXE ACTUALISATEUR TS- + (CONNECTIF A +) DÉMONSTRATIF DE RÉFÉRENCE | TSAMI | =  me voici | TSASI | =  nous voici | TSAWE | =  te voici | TSANYU | =  vous voici | TSAYE | =  le / la voici | TSAWO | = les voici | CLASSES | PRÉSENTATIFS | PROXIMITÉ | DISTANCE | RÉFÉRENCE | Classe 1  Sing
Classe 2        Plur | Tsunu / Tsuwanu
Tswanu / Tsawanu | Tsule / Tsuwale
Tswale / Tsawale | Tsuwo / Tsiwo
Tswao / Tsawo | Classe 3       Sing
Classe 4       Plur | Tsunu / Tsuwanu
Tsini / Tsiyanu | Tsule / Tsuwale
Tsile / Tsayale | Tsuwo / Tsiwo
Tsiyo | Classe 5        Sing
Classe 6        Plur | Tsilini / Tsilani
Tsiyanu / Tsayani | Tsilile / Tsilale
Tsiyale / Tsayale | Tsililo / Tsilo
Tsayo | Classe 7        Sing
Classe 8        Plur | Tsini / Tsiyani
Tsizini / Tsizani | Tsile / Tsiyale
Tsizile / Tsizale | Tsiyo
Tsizo | Classe 9       Sing
Classe 10     Plur | Tsini / Tsiyani
Tsizini / Tsizani | Tsile / Tsiyale
Tsizile / Tsizale | Tsiyo
Tsizo | Classe 11     Sing | Tsunu / Tsuwanu | Tsule / Tsuwale | Tsuwo / Tsiwo | Tsunu mwanangu. | Voici mon enfant. | Tsawanu wananya wangu. | Voici mes frères et sœurs. | Tsule mulango wa nyumba. | Voilà la porte de la maison. | Tsile menge ya liɗago. | Voilà les lumières de la ville. | Tsilani gari langu. | Voici ma voiture. | Tsayani magoshi yangu. | Voici mes chaussures. | Tsini shiri yaho. | Voici ta chaise. | Tsizani zitru bole. | Voici des grandes choses. | Ɓakuli, ma- | un récipient, des -- | Fursheti, ma- | une fourchette, des -- | Ɓao, ma- | une planche, des -- | Gazeti, ma- | un journal, des -- | Ɓavu, ma- | un côté, des -- | Kofia, ma- | un bonnet, des -- | Dirisha, ma- | une fenêtre, des -- | Sembea, ma- | un couteau, des -- | Djeshi, ma- | une armée, des -- | Shamba, maz- | un champ, des -- | Dzina, ma- | un nom, des -- | Sutru, ma- | une cuillère, des -- | Chapitre précédent | Chapitre suivant | Table des matières
PRÉFIXE TS- + (CONNECTIF A +) DÉMONSTRATIF DE PROXIMITÉ
PRÉFIXE TS- + (CONNECTIF A +) DÉMONSTRATIF DE DISTANCE
Niv̄e marike ! | - Tsiyo. | Donne-moi l'argent ! | - Le voici.
Tike unazo ? | - Tsizo. | As-tu les billets ? | - Les voilà.
PRÉFIXE ACTUALISATEUR TS- + (CONNECTIF A +) DÉMONSTRATIF DE RÉFÉRENCE
TSAMI | =  me voici | TSASI | =  nous voici
TSAWE | =  te voici | TSANYU | =  vous voici
TSAYE | =  le / la voici | TSAWO | = les voici
CLASSES | PRÉSENTATIFS
PROXIMITÉ | DISTANCE | RÉFÉRENCE
Classe 1  Sing
Classe 2        Plur | Tsunu / Tsuwanu
Tswanu / Tsawanu | Tsule / Tsuwale
Tswale / Tsawale | Tsuwo / Tsiwo
Tswao / Tsawo
Classe 3       Sing
Classe 4       Plur | Tsunu / Tsuwanu
Tsini / Tsiyanu | Tsule / Tsuwale
Tsile / Tsayale | Tsuwo / Tsiwo
Tsiyo
Classe 5        Sing
Classe 6        Plur | Tsilini / Tsilani
Tsiyanu / Tsayani | Tsilile / Tsilale
Tsiyale / Tsayale | Tsililo / Tsilo
Tsayo
Classe 7        Sing
Classe 8        Plur | Tsini / Tsiyani
Tsizini / Tsizani | Tsile / Tsiyale
Tsizile / Tsizale | Tsiyo
Tsizo
Classe 9       Sing
Classe 10     Plur | Tsini / Tsiyani
Tsizini / Tsizani | Tsile / Tsiyale
Tsizile / Tsizale | Tsiyo
Tsizo
Classe 11     Sing | Tsunu / Tsuwanu | Tsule / Tsuwale | Tsuwo / Tsiwo
Tsunu mwanangu. | Voici mon enfant.
Tsawanu wananya wangu. | Voici mes frères et sœurs.
Tsule mulango wa nyumba. | Voilà la porte de la maison.
Tsile menge ya liɗago. | Voilà les lumières de la ville.
Tsilani gari langu. | Voici ma voiture.
Tsayani magoshi yangu. | Voici mes chaussures.
Tsini shiri yaho. | Voici ta chaise.
Tsizani zitru bole. | Voici des grandes choses.
Ɓakuli, ma- | un récipient, des -- | Fursheti, ma- | une fourchette, des --
Ɓao, ma- | une planche, des -- | Gazeti, ma- | un journal, des --
Ɓavu, ma- | un côté, des -- | Kofia, ma- | un bonnet, des --
Dirisha, ma- | une fenêtre, des -- | Sembea, ma- | un couteau, des --
Djeshi, ma- | une armée, des -- | Shamba, maz- | un champ, des --
Dzina, ma- | un nom, des -- | Sutru, ma- | une cuillère, des --
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 27,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 27.",
    content: `

Chapitre 28 - Le Lieu

 1. LE SUFFIXE LOCATIF : 

Il existe en shimaore un suffixe locatif qui peut être ajouté à pratiquement tous les noms communs concrets (excepté les noms d'animés). Ce suffixe est  -NI  et donne le sens de : dans, sur, à, en, là où il y a, etc...

EXEMPLES : 




Ɓahari
la mer
Ɓaharini
en mer
Barjila bargeBarjinisur la barge
Ɗagola maison, la villeƊagonien ville, chez soi
Hazila travailHaziniau travail, du travail
Malavudes herbesMalavunià la campagne
Masiwaun archipelMasiwanidans l'archipel (des Comores)
Matsoles yeuxMatsonidans les yeux / au fond des yeux



Ce système a donné des noms de lieux-dits ou de villages :



Muɓuyu
un baobab
-> Ɓuyuni
là où il y a des baobabs


Ɗongoargile rouge-> Longonilà où il y a de l'argile rouge


Kombaun maki-> Kombanilà où il y a des makis


Kaweargile blanche-> Kawenilà où il y a de l'argile blanche


Marindrides bananiers-> Marindrinilà où il y a des bananiers




Mais les noms propres de villes, pays, ainsi que certains lieux très fréquentés ne prennent pas ce suffixe, ainsi :



Nisuendra Momoju.
Je vais à Mamoudzou.
(Je vais Mamoudzou.)


Wasuja Ngazidja.
Ils arrivent à la Grande Comore.
(Ils arrivent Grande Comore)


Wanatsa wasuendra likoli.
Les enfants vont à l'école.
(Les enfants vont école.)


Nisuendra ɓazari.
Je vais au marché.
(Je vais marché.)




 2. OÙ ? : 

Pour demander : "où ?", on utilise l'adverbe interrogatif : HAV̄I ?

L'adverbe se place en fin de phrase :


Usuendra hav̄i ?
Où vas-tu ?
Asishuka hav̄i ?Où descend-il ?
Ulaa hav̄i ? - Tsilaa hazini.D'où viens-tu ? - Je viens du travail.


L'adverbe se place en début de phrase, avec ƊE et le verbe à un temps relatif :


Hav̄i ɗe uendrao ?
Où est-ce que tu vas ?
Hav̄i ɗe ashukao ?Où est-ce qu'il descend ?


Lorsqu' un nom propre de lieu est mentionné, on utilise  ƊE HAV̄I en fin de phrase :


Mtsangamuji ɗe hav̄i ?
Mtsangamouji, où est-ce ?
Farantsa ɗe hav̄i ?La France, où est-ce ?




 3. LE DÉMONSTRATIF DE LIEU : 

Il se place en général après le nom, sauf construction avec ɗe.
Il y a 6 démonstratifs de lieu, selon le degré de proximité et de précision du lieu :


 DÉMONSTRATIFS DE LIEU

PROXIMITÉ
DISTANCE
RÉFÉRENCE

LIEU DÉFINI
V̄ANU = ici
V̄ALE = là-bas
V̄AV̄O = là

LIEU IMPRÉCIS
HUNU = par ici
HULE = par là-bas
OHO = par là


EXEMPLES : 



Duniani v̄anu
En ce bas monde
V̄av̄o ɗe hanguLà, c'est chez moi 
Hunu ɗe fuko la watru ɓaɓaPar ici c'est la chambre des hommes
Na oho ɗe fuko la watru mamaEt par là c'est la chambre des femmes
Watru ununua lesãsi v̄anuLes gens achètent de l'essence ici
Laposte ya Kaweni ya v̄aleLa poste de Kaweni est là-bas
Zitaksi za v̄av̄oLes taxis sont là



 4. LE LOCATIF A THEME POSSESSIF : 

type : "Dzangu", "Hangu".
Voir : Chapitre 29.

VOCABULAIRE


Uduburiya
faire le nécessaire
Urema mbio
faire vite
Uendreleacontinuer
Ushindrapouvoir, vaincre
Ufauluréussir
Ushuka mujinidescendre en ville
Uforoatrouer
Ushukuriaremercier
Uheya lijumonter en brousse
Uvinga gariconduire une voiture
Ujiviwase réjouir
Uzingatourner


EXERCICES

EXERCICE 1 : Traduisez en shimaore :


Où vas-tu ?  Où va-t-elle ?  Où est-ce qu'elle va ?  Où allez-vous ?  Où descends-tu ?  Où descend-il ?  Où descendez-vous ?  Où est Combani ?  Où est Mamoudzou ?  Maman, où est-elle ?  Je descends là,  je vais à Mtsangamouji, nous allons à la mer,  elle est à la
boutique, je vais à la campagne, les voitures sont sur la barge,  quelles sont les nouvelles de la maison ?  Ils retournent à la maison, les poissons sont dans la mer, il va au travail.


EXERCICE 2 : Traduisez en français :


Mutsangani, dukani, nyumbani, fukoni, pareni, dziani, malavuni, shambani, shitswani, mulangoni, duniani, ɗagoni, mulimani, ɓaharini, barjini, shisimani, hazini, mezani, ɓangani, ɗomoni.


EXERCICE 3 : Traduisez en français :



Usuendra hav̄i ?
Usishuka hav̄i ?
Kahani ɗe hav̄i ?
Risushuka v̄av̄o.
Mayangu uketsi Ɓuyuni.
Saɓu wanyu uketsi harimwa shisiwa ya Maore ?
Ãhã, wasi uketsi masiwani.
Walozi waendre ɓaharini.
Afa usuheya liju ?
Ãhã, nisushuka mujini.




Chapitre précédentChapitre suivantTable des matières | Ɓahari | la mer | Ɓaharini | en mer | Barji | la barge | Barjini | sur la barge | Ɗago | la maison, la ville | Ɗagoni | en ville, chez soi | Hazi | la travail | Hazini | au travail, du travail | Malavu | des herbes | Malavuni | à la campagne | Masiwa | un archipel | Masiwani | dans l'archipel (des Comores) | Matso | les yeux | Matsoni | dans les yeux / au fond des yeux | Muɓuyu | un baobab | -> Ɓuyuni | là où il y a des baobabs | Ɗongo | argile rouge | -> Longoni | là où il y a de l'argile rouge | Komba | un maki | -> Kombani | là où il y a des makis | Kawe | argile blanche | -> Kaweni | là où il y a de l'argile blanche | Marindri | des bananiers | -> Marindrini | là où il y a des bananiers | Nisuendra Momoju. | Je vais à Mamoudzou. | (Je vais Mamoudzou.) | Wasuja Ngazidja. | Ils arrivent à la Grande Comore. | (Ils arrivent Grande Comore) | Wanatsa wasuendra likoli. | Les enfants vont à l'école. | (Les enfants vont école.) | Nisuendra ɓazari. | Je vais au marché. | (Je vais marché.) | Usuendra hav̄i ? | Où vas-tu ? | Asishuka hav̄i ? | Où descend-il ? | Ulaa hav̄i ? - Tsilaa hazini. | D'où viens-tu ? - Je viens du travail. | Hav̄i ɗe uendrao ? | Où est-ce que tu vas ? | Hav̄i ɗe ashukao ? | Où est-ce qu'il descend ? | Mtsangamuji ɗe hav̄i ? | Mtsangamouji, où est-ce ? | Farantsa ɗe hav̄i ? | La France, où est-ce ? |  | DÉMONSTRATIFS DE LIEU | PROXIMITÉ | DISTANCE | RÉFÉRENCE | LIEU DÉFINI | V̄ANU = ici | V̄ALE = là-bas | V̄AV̄O = là | LIEU IMPRÉCIS | HUNU = par ici | HULE = par là-bas | OHO = par là | Duniani v̄anu | En ce bas monde | V̄av̄o ɗe hangu | Là, c'est chez moi | Hunu ɗe fuko la watru ɓaɓa | Par ici c'est la chambre des hommes | Na oho ɗe fuko la watru mama | Et par là c'est la chambre des femmes | Watru ununua lesãsi v̄anu | Les gens achètent de l'essence ici | Laposte ya Kaweni ya v̄ale | La poste de Kaweni est là-bas | Zitaksi za v̄av̄o | Les taxis sont là | Uduburiya | faire le nécessaire | Urema mbio | faire vite | Uendrelea | continuer | Ushindra | pouvoir, vaincre | Ufaulu | réussir | Ushuka mujini | descendre en ville | Uforoa | trouer | Ushukuria | remercier | Uheya liju | monter en brousse | Uvinga gari | conduire une voiture | Ujiviwa | se réjouir | Uzinga | tourner | Chapitre précédent | Chapitre suivant | Table des matières
Ɓahari | la mer | Ɓaharini | en mer
Barji | la barge | Barjini | sur la barge
Ɗago | la maison, la ville | Ɗagoni | en ville, chez soi
Hazi | la travail | Hazini | au travail, du travail
Malavu | des herbes | Malavuni | à la campagne
Masiwa | un archipel | Masiwani | dans l'archipel (des Comores)
Matso | les yeux | Matsoni | dans les yeux / au fond des yeux
Muɓuyu | un baobab | -> Ɓuyuni | là où il y a des baobabs
Ɗongo | argile rouge | -> Longoni | là où il y a de l'argile rouge
Komba | un maki | -> Kombani | là où il y a des makis
Kawe | argile blanche | -> Kaweni | là où il y a de l'argile blanche
Marindri | des bananiers | -> Marindrini | là où il y a des bananiers
Nisuendra Momoju. | Je vais à Mamoudzou. | (Je vais Mamoudzou.)
Wasuja Ngazidja. | Ils arrivent à la Grande Comore. | (Ils arrivent Grande Comore)
Wanatsa wasuendra likoli. | Les enfants vont à l'école. | (Les enfants vont école.)
Nisuendra ɓazari. | Je vais au marché. | (Je vais marché.)
Usuendra hav̄i ? | Où vas-tu ?
Asishuka hav̄i ? | Où descend-il ?
Ulaa hav̄i ? - Tsilaa hazini. | D'où viens-tu ? - Je viens du travail.
Hav̄i ɗe uendrao ? | Où est-ce que tu vas ?
Hav̄i ɗe ashukao ? | Où est-ce qu'il descend ?
Mtsangamuji ɗe hav̄i ? | Mtsangamouji, où est-ce ?
Farantsa ɗe hav̄i ? | La France, où est-ce ?
 | DÉMONSTRATIFS DE LIEU
PROXIMITÉ | DISTANCE | RÉFÉRENCE
LIEU DÉFINI | V̄ANU = ici | V̄ALE = là-bas | V̄AV̄O = là
LIEU IMPRÉCIS | HUNU = par ici | HULE = par là-bas | OHO = par là
Duniani v̄anu | En ce bas monde
V̄av̄o ɗe hangu | Là, c'est chez moi
Hunu ɗe fuko la watru ɓaɓa | Par ici c'est la chambre des hommes
Na oho ɗe fuko la watru mama | Et par là c'est la chambre des femmes
Watru ununua lesãsi v̄anu | Les gens achètent de l'essence ici
Laposte ya Kaweni ya v̄ale | La poste de Kaweni est là-bas
Zitaksi za v̄av̄o | Les taxis sont là
Uduburiya | faire le nécessaire | Urema mbio | faire vite
Uendrelea | continuer | Ushindra | pouvoir, vaincre
Ufaulu | réussir | Ushuka mujini | descendre en ville
Uforoa | trouer | Ushukuria | remercier
Uheya liju | monter en brousse | Uvinga gari | conduire une voiture
Ujiviwa | se réjouir | Uzinga | tourner
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 28,
    title: "Leçon 28",
    description: "Contenu du chapitre 28.",
    content: `

Chapitre 29 - La Possession

 1. LE CONNECTIF "-A" : 

Le "de" (de la, de l', du, des) français se traduit en shimaore par un mot dont la racine est  -A. Le connectif  -A doit s'accorder avec la classe nominale de l'objet ou de la personne possédée. Les connectifs sont de fait identiques aux formes de la 3ème personne du présent affirmatif du verbe UKA
(= être), sauf en Classe 1 (WA au lieu de A).








Cl 1
WA
Mwana wa ɓaɓa.
L'enfant du père.
Cl 2
WA
Wana wa ɓaɓa.
Les enfants du père.
Cl 3WA
Muhono wa ɓaɓa.
La main du père.
Cl 4YA
Mihono ya ɓaɓa.
Les mains du père.
Cl 5LA
Gari la ɓaɓa.
La voiture du père.
Cl 6YA
Magari ya ɓaɓa.
Les voitures du père.
Cl 7YA
Shiri ya ɓaɓa.
La chaise du père.
Cl 8ZA
Ziri za ɓaɓa.
Les chaises du père.
Cl 9YA
Nguo ya ɓaɓa.
Le vêtement du père.
Cl 10ZA
Nguo za ɓaɓa.
Les vêtements du père.
Cl 11/14WA
Uso wa ɓaɓa.
Le visage du père.


ORDRE DES MOTS ET EXEMPLES : 
Celui-ci est semblable à l'ordre des mots français, à la seule condition que l'adjectif suive le nom qu'il qualifie.



Mwana mutiti wa mama.
Le petit enfant de Maman.
Mihono miɓole ya umwana mutiti.Les grosses mains du petit enfant.
Magoshi mav̄ia ya ɓaɓa.Les chaussures neuves de Papa.



 2. LES ADJECTIFS ET PRONOMS POSSESSIFS : 

 A. Le possesseur est une personne : 

Les adjectifs ou pronoms possessifs s'accordent en classe avec le nom de l'objet possédé. Les préfixes
de classe, identiques aux connectifs, seront suivis des thèmes possessifs suivants :



-ANGUmon, ma, mesle mien, la mienne, les miens, les miennes
-AHOton, ta, tesle tien, la tienne, les tiens, les tiennes
-AHEson, sa, sesle sien; la sienne, les siens, les siennes
-ATRUnotre, nosle nôtre, la nôtre, les nôtres
-ANYUvotre, vosle vôtre, la vôtre, les vôtres
-AOleur, leursle leur, la leur, les leurs











AVEC LES NOMS DU GENRE  MU-/WA- (Classes 1/2) :
SingulierPluriel
Mwana wangumon enfant
Wana wangumes enfants
Mwana wahoton enfant
Wana wahotes enfants
Mwana waheson enfant
Wana waheses enfants
Mwana watrunotre enfant
Wana watrunos enfants
Mwana wanyuvotre enfant
Wana wanyuvos enfants
Mwana waoleur enfant
Wana waoleurs enfants
AVEC LES NOMS DU GENRE  MU-/MI- (Classes 3/4) :
SingulierPluriel
Muhono wanguma main
Mihono yangumes mains
Muhono wahota main
Mihono yahotes mains
Muhono wahesa main
Mihono yaheses mains
Muhono watrunotre main
Mihono yatrunos mains
Muhono wanyuvotre main
Mihono yanyuvos mains
Muhono waoleur main
Mihono yaoleurs mains
AVEC LES NOMS DU GENRE MA- (Classes 5/6) :
SingulierPluriel
Gari languma voiture
Magari yangumes voitures
Gari lahota voiture
Magari yahotes voitures
Gari lahesa voiture
Magari yaheses voitures
Gari latrunotre voiture
Magari yatrunos voitures
Gari lanyuvotre voiture
Magari yanyuvos voitures
Gari laoleur voiture
Magari yaoleurs voitures
AVEC LES NOMS DU GENRE SHI-/ZI- (Classes 7/8) :
SingulierPluriel
Shiri yanguma chaise
Ziri zangumes chaises
Shiri yahota chaise 
Ziri zahotes chaises
Shiri yahesa chaise
Ziri zaheses chaises
Shiri yatrunotre chaise
Ziri zatrunos chaises
Shiri yanyuvotre chaise
Ziri zanyuvos chaises
Shiri yaoleur chaise
Ziri zaoleurs chaises
AVEC LES NOMS DU GENRE N- (Classes 9/10) :
SingulierPluriel
Nguo yangumon vêtement
Nguo zangumes vêtements
Nguo yahoton vêtement
Nguo zahotes vêtements
Nguo yaheson vêtement
Nguo zaheses vêtements
Nguo yatrunotre vêtement
Nguo zatrunos vêtements
Nguo yanyuvotre vêtement
Nguo zanyuvos vêtements
Nguo yaoleur vêtement
Nguo zaoleurs vêtements
AVEC LES NOMS DU GENRE U- (Classes 11, 14) :
SingulierPluriel
Uku wanguma nuit
Uku wahota nuit
Uku wahesa nuit
Uku watrunotre nuit
Uku wanyuvotre nuit
Uku waoleur nuit



 B. Le possesseur est une chose : 

Il existe une série de thèmes possessifs propres aux classes nominales représentant des objets :


GENRE / Classes
SINGULIER
PLURIEL
MU-/MI-  (Cl 3/4)
-AO
-AYO
MA-  (Cl 5/6)
-ALO
-AYO
SHI-/ZI-  (Cl 7/8)
-AYO
-AZO
N-  (Cl 9/10)
-AYO
-AZO
U-  (Cl 11, 14)
-AO
 
Classes locatives
-AV̄O


EXEMPLE : 


Zitru za hatwari za ɗagoni zilazimu zihetsiwe uju, moni mwa zipambo zazo. (zipambo za zitru).
Les objets dangereux de la maison doivent être placés en haut, dans leurs emballages. (les emballages des choses).

Harimwa ikomini ya Momoju likoli mbili mpia ɗe zitsoɓuao milango yazo mwaha hunu. (milango ya likoli).
Dans la communue de Mamoudzou ce sont deux écoles qui ouvriront leurs portes. (les portes des écoles).



 3. CONTRACTIONS : NOMS DE PERSONNES + ADJ. POSSESSIFS : 



Mwana wanguMwanangu=  mon enfant
Mwana waheMwanahe=  son enfant
Wana wahoWanaho =  tes enfants
Ɓaɓa wanguƁaɓangu=  mon père
Ɓaɓa waheƁaɓahe=  son père
Mama wanguMayangu=  ma mère
Mama wahoMayaho=  ta mère
Koko wanguKokwangu=  ma grand-mère
Zama wanguZamangu=  mon oncle
Mwananya wanguMwananyangu=  mon frère, ma sœur
Mwananya wahoMwananyaho=  ton frère, ta sœur
Munyawe wanguMunyangu =  mon ami, mon camarade




 4. DEUX PRONOMS POSSESSIFS "LOCATIFS" : 


La particule réflexive  DZI- associée aux thèmes possessifs prend le sens de "s'en aller" et donne la
série de pronoms possessifs suivants :


Nisuendra  DZANGUJe m'en vais
Usuendra  DZAHOTu t'en vas
Asuendra  DZAHEIl / elle s'en va
Risuendra  DZATRUNous nous en allons
Musuendra  DZANYUVous vous en allez
Wasuendra  DZAOIls / elles s'en vont


La particule prépositionnelle  HA-  associée aux thèmes possessifs prend le sens de "chez soi" et donne la série de pronoms possessifs suivants :


HANGUchez moi
HAHOchez toi
HAHEchez lui / chez elle
HATRUchez nous
HANYUchez vous
HAOchez eux / chez elles


Cette dernière série de pronoms possessifs s'utilise aussi comme adjectifs possessifs après  les noms suffixés en  -NI  (= à, dans, sur) :


ɗagoni hangudans mon villageɗagoni hatrudans notre village
ɗagoni hahodans ton villageɗagoni hanyudans votre village
ɗagoni hahedans son villageɗagoni haodans leur village





WAMI WAHO WAWE WANGUJe suis à toi, tu es à moi


EXERCICES

EXERCICE 1 : Traduisez en shimaore :


L'enfant du père, les enfants de la mère,      le sac de ma mère, la maison de ma mère, la chaise de l'enfant, les chaises des enfants, un bol d'eau, les outils de mon frère, les vêtements de tes sœurs,  la maison du père,   la voiture de son père, une assiette de bananes vertes, un village de pêcheurs, les rues de Mamoudzou, les yeux du chat.
Mon enfant, ma chaise, mes mains, ma voiture, ma maison, mes vêtements, mon chat, mon travail, sa beauté, son oncle (maternel),  sa tante (paternelle), sa joie, sa colère, sa robe, son argent,        nos travaux, nos moutons, notre voiture, notre maison, tes assiettes,      ton cheval, tes draps, ton café, tes chaussures, vos enfants,
votre voiture, vos vaches,  votre table, votre maison, vos chiens,       votre père, ses dents, tes oreilles, leurs yeux, ton bras.
Le sien (son bol), la sienne (sa mère), les siens (ses vêtements), les siennes (ses fautes), le mien (mon père), la mienne (mon assiette), les miens (mes yeux), les miennes (mes robes), le tien (ton livre), les tiens (tes sacs).


EXERCICE 2 : Traduisez en français :


Gari la ɓaɓa, nyumba ya mama, magoshi ya mwandzani wangu, shiri ya djirani, sahani za djirani, mafulera ya mama, ɓakuli la mwana zaza, pwapwaya la mwana, maɓawa ya kuhu, mushia wa nyombe, malangadzo ya zisiwa za bahari ya Hindi.
Kosa langu, ɗagoni hahe, shiri yahe, ɗomo langu, damu yaho, nguo zangu, mihono yawo, mihono yaho, uzuri wahe, mwanangu, fikira yaho, djirani langu, madjirani yangu, buledi wahe, duka lawo.



Chapitre précédentChapitre suivantTable des matières | Cl 1 | WA | Mwana wa ɓaɓa. | L'enfant du père. | Cl 2 | WA | Wana wa ɓaɓa. | Les enfants du père. | Cl 3 | WA | Muhono wa ɓaɓa. | La main du père. | Cl 4 | YA | Mihono ya ɓaɓa. | Les mains du père. | Cl 5 | LA | Gari la ɓaɓa. | La voiture du père. | Cl 6 | YA | Magari ya ɓaɓa. | Les voitures du père. | Cl 7 | YA | Shiri ya ɓaɓa. | La chaise du père. | Cl 8 | ZA | Ziri za ɓaɓa. | Les chaises du père. | Cl 9 | YA | Nguo ya ɓaɓa. | Le vêtement du père. | Cl 10 | ZA | Nguo za ɓaɓa. | Les vêtements du père. | Cl 11/14 | WA | Uso wa ɓaɓa. | Le visage du père. | Mwana mutiti wa mama. | Le petit enfant de Maman. | Mihono miɓole ya umwana mutiti. | Les grosses mains du petit enfant. | Magoshi mav̄ia ya ɓaɓa. | Les chaussures neuves de Papa. | -ANGU | mon, ma, mes | le mien, la mienne, les miens, les miennes | -AHO | ton, ta, tes | le tien, la tienne, les tiens, les tiennes | -AHE | son, sa, ses | le sien; la sienne, les siens, les siennes | -ATRU | notre, nos | le nôtre, la nôtre, les nôtres | -ANYU | votre, vos | le vôtre, la vôtre, les vôtres | -AO | leur, leurs | le leur, la leur, les leurs | AVEC LES NOMS DU GENRE  MU-/WA- (Classes 1/2) : | Singulier | Pluriel | Mwana wangu | mon enfant | Wana wangu | mes enfants | Mwana waho | ton enfant | Wana waho | tes enfants | Mwana wahe | son enfant | Wana wahe | ses enfants | Mwana watru | notre enfant | Wana watru | nos enfants | Mwana wanyu | votre enfant | Wana wanyu | vos enfants | Mwana wao | leur enfant | Wana wao | leurs enfants | AVEC LES NOMS DU GENRE  MU-/MI- (Classes 3/4) : | Singulier | Pluriel | Muhono wangu | ma main | Mihono yangu | mes mains | Muhono waho | ta main | Mihono yaho | tes mains | Muhono wahe | sa main | Mihono yahe | ses mains | Muhono watru | notre main | Mihono yatru | nos mains | Muhono wanyu | votre main | Mihono yanyu | vos mains | Muhono wao | leur main | Mihono yao | leurs mains | AVEC LES NOMS DU GENRE MA- (Classes 5/6) : | Singulier | Pluriel | Gari langu | ma voiture | Magari yangu | mes voitures | Gari laho | ta voiture | Magari yaho | tes voitures | Gari lahe | sa voiture | Magari yahe | ses voitures | Gari latru | notre voiture | Magari yatru | nos voitures | Gari lanyu | votre voiture | Magari yanyu | vos voitures | Gari lao | leur voiture | Magari yao | leurs voitures | AVEC LES NOMS DU GENRE SHI-/ZI- (Classes 7/8) : | Singulier | Pluriel | Shiri yangu | ma chaise | Ziri zangu | mes chaises | Shiri yaho | ta chaise | Ziri zaho | tes chaises | Shiri yahe | sa chaise | Ziri zahe | ses chaises | Shiri yatru | notre chaise | Ziri zatru | nos chaises | Shiri yanyu | votre chaise | Ziri zanyu | vos chaises | Shiri yao | leur chaise | Ziri zao | leurs chaises | AVEC LES NOMS DU GENRE N- (Classes 9/10) : | Singulier | Pluriel | Nguo yangu | mon vêtement | Nguo zangu | mes vêtements | Nguo yaho | ton vêtement | Nguo zaho | tes vêtements | Nguo yahe | son vêtement | Nguo zahe | ses vêtements | Nguo yatru | notre vêtement | Nguo zatru | nos vêtements | Nguo yanyu | votre vêtement | Nguo zanyu | vos vêtements | Nguo yao | leur vêtement | Nguo zao | leurs vêtements | AVEC LES NOMS DU GENRE U- (Classes 11, 14) : | Singulier | Pluriel | Uku wangu | ma nuit | Uku waho | ta nuit | Uku wahe | sa nuit | Uku watru | notre nuit | Uku wanyu | votre nuit | Uku wao | leur nuit | GENRE / Classes | SINGULIER | PLURIEL | MU-/MI-  (Cl 3/4) | -AO | -AYO | MA-  (Cl 5/6) | -ALO | -AYO | SHI-/ZI-  (Cl 7/8) | -AYO | -AZO | N-  (Cl 9/10) | -AYO | -AZO | U-  (Cl 11, 14) | -AO |  | Classes locatives | -AV̄O | Zitru za hatwari za ɗagoni zilazimu zihetsiwe uju, moni mwa zipambo zazo. (zipambo za zitru). | Les objets dangereux de la maison doivent être placés en haut, dans leurs emballages. (les emballages des choses). | Harimwa ikomini ya Momoju likoli mbili mpia ɗe zitsoɓuao milango yazo mwaha hunu. (milango ya likoli). | Dans la communue de Mamoudzou ce sont deux écoles qui ouvriront leurs portes. (les portes des écoles). | Mwana wangu | Mwanangu | =  mon enfant | Mwana wahe | Mwanahe | =  son enfant | Wana waho | Wanaho | =  tes enfants | Ɓaɓa wangu | Ɓaɓangu | =  mon père | Ɓaɓa wahe | Ɓaɓahe | =  son père | Mama wangu | Mayangu | =  ma mère | Mama waho | Mayaho | =  ta mère | Koko wangu | Kokwangu | =  ma grand-mère | Zama wangu | Zamangu | =  mon oncle | Mwananya wangu | Mwananyangu | =  mon frère, ma sœur | Mwananya waho | Mwananyaho | =  ton frère, ta sœur | Munyawe wangu | Munyangu | =  mon ami, mon camarade | Nisuendra  DZANGU | Je m'en vais | Usuendra  DZAHO | Tu t'en vas | Asuendra  DZAHE | Il / elle s'en va | Risuendra  DZATRU | Nous nous en allons | Musuendra  DZANYU | Vous vous en allez | Wasuendra  DZAO | Ils / elles s'en vont | HANGU | chez moi | HAHO | chez toi | HAHE | chez lui / chez elle | HATRU | chez nous | HANYU | chez vous | HAO | chez eux / chez elles | ɗagoni hangu | dans mon village | ɗagoni hatru | dans notre village | ɗagoni haho | dans ton village | ɗagoni hanyu | dans votre village | ɗagoni hahe | dans son village | ɗagoni hao | dans leur village | Chapitre précédent | Chapitre suivant | Table des matières
Cl 1 | WA | Mwana wa ɓaɓa. | L'enfant du père.
Cl 2 | WA | Wana wa ɓaɓa. | Les enfants du père.
Cl 3 | WA | Muhono wa ɓaɓa. | La main du père.
Cl 4 | YA | Mihono ya ɓaɓa. | Les mains du père.
Cl 5 | LA | Gari la ɓaɓa. | La voiture du père.
Cl 6 | YA | Magari ya ɓaɓa. | Les voitures du père.
Cl 7 | YA | Shiri ya ɓaɓa. | La chaise du père.
Cl 8 | ZA | Ziri za ɓaɓa. | Les chaises du père.
Cl 9 | YA | Nguo ya ɓaɓa. | Le vêtement du père.
Cl 10 | ZA | Nguo za ɓaɓa. | Les vêtements du père.
Cl 11/14 | WA | Uso wa ɓaɓa. | Le visage du père.
Mwana mutiti wa mama. | Le petit enfant de Maman.
Mihono miɓole ya umwana mutiti. | Les grosses mains du petit enfant.
Magoshi mav̄ia ya ɓaɓa. | Les chaussures neuves de Papa.
-ANGU | mon, ma, mes | le mien, la mienne, les miens, les miennes
-AHO | ton, ta, tes | le tien, la tienne, les tiens, les tiennes
-AHE | son, sa, ses | le sien; la sienne, les siens, les siennes
-ATRU | notre, nos | le nôtre, la nôtre, les nôtres
-ANYU | votre, vos | le vôtre, la vôtre, les vôtres
-AO | leur, leurs | le leur, la leur, les leurs
AVEC LES NOMS DU GENRE  MU-/WA- (Classes 1/2) :
Singulier | Pluriel
Mwana wangu | mon enfant | Wana wangu | mes enfants
Mwana waho | ton enfant | Wana waho | tes enfants
Mwana wahe | son enfant | Wana wahe | ses enfants
Mwana watru | notre enfant | Wana watru | nos enfants
Mwana wanyu | votre enfant | Wana wanyu | vos enfants
Mwana wao | leur enfant | Wana wao | leurs enfants
AVEC LES NOMS DU GENRE  MU-/MI- (Classes 3/4) :
Singulier | Pluriel
Muhono wangu | ma main | Mihono yangu | mes mains
Muhono waho | ta main | Mihono yaho | tes mains
Muhono wahe | sa main | Mihono yahe | ses mains
Muhono watru | notre main | Mihono yatru | nos mains
Muhono wanyu | votre main | Mihono yanyu | vos mains
Muhono wao | leur main | Mihono yao | leurs mains
AVEC LES NOMS DU GENRE MA- (Classes 5/6) :
Singulier | Pluriel
Gari langu | ma voiture | Magari yangu | mes voitures
Gari laho | ta voiture | Magari yaho | tes voitures
Gari lahe | sa voiture | Magari yahe | ses voitures
Gari latru | notre voiture | Magari yatru | nos voitures
Gari lanyu | votre voiture | Magari yanyu | vos voitures
Gari lao | leur voiture | Magari yao | leurs voitures
AVEC LES NOMS DU GENRE SHI-/ZI- (Classes 7/8) :
Singulier | Pluriel
Shiri yangu | ma chaise | Ziri zangu | mes chaises
Shiri yaho | ta chaise | Ziri zaho | tes chaises
Shiri yahe | sa chaise | Ziri zahe | ses chaises
Shiri yatru | notre chaise | Ziri zatru | nos chaises
Shiri yanyu | votre chaise | Ziri zanyu | vos chaises
Shiri yao | leur chaise | Ziri zao | leurs chaises
AVEC LES NOMS DU GENRE N- (Classes 9/10) :
Singulier | Pluriel
Nguo yangu | mon vêtement | Nguo zangu | mes vêtements
Nguo yaho | ton vêtement | Nguo zaho | tes vêtements
Nguo yahe | son vêtement | Nguo zahe | ses vêtements
Nguo yatru | notre vêtement | Nguo zatru | nos vêtements
Nguo yanyu | votre vêtement | Nguo zanyu | vos vêtements
Nguo yao | leur vêtement | Nguo zao | leurs vêtements
AVEC LES NOMS DU GENRE U- (Classes 11, 14) :
Singulier | Pluriel
Uku wangu | ma nuit
Uku waho | ta nuit
Uku wahe | sa nuit
Uku watru | notre nuit
Uku wanyu | votre nuit
Uku wao | leur nuit
GENRE / Classes | SINGULIER | PLURIEL
MU-/MI-  (Cl 3/4) | -AO | -AYO
MA-  (Cl 5/6) | -ALO | -AYO
SHI-/ZI-  (Cl 7/8) | -AYO | -AZO
N-  (Cl 9/10) | -AYO | -AZO
U-  (Cl 11, 14) | -AO | 
Classes locatives | -AV̄O
Zitru za hatwari za ɗagoni zilazimu zihetsiwe uju, moni mwa zipambo zazo. (zipambo za zitru). | Les objets dangereux de la maison doivent être placés en haut, dans leurs emballages. (les emballages des choses).
Harimwa ikomini ya Momoju likoli mbili mpia ɗe zitsoɓuao milango yazo mwaha hunu. (milango ya likoli). | Dans la communue de Mamoudzou ce sont deux écoles qui ouvriront leurs portes. (les portes des écoles).
Mwana wangu | Mwanangu | =  mon enfant
Mwana wahe | Mwanahe | =  son enfant
Wana waho | Wanaho | =  tes enfants
Ɓaɓa wangu | Ɓaɓangu | =  mon père
Ɓaɓa wahe | Ɓaɓahe | =  son père
Mama wangu | Mayangu | =  ma mère
Mama waho | Mayaho | =  ta mère
Koko wangu | Kokwangu | =  ma grand-mère
Zama wangu | Zamangu | =  mon oncle
Mwananya wangu | Mwananyangu | =  mon frère, ma sœur
Mwananya waho | Mwananyaho | =  ton frère, ta sœur
Munyawe wangu | Munyangu | =  mon ami, mon camarade
Nisuendra  DZANGU | Je m'en vais
Usuendra  DZAHO | Tu t'en vas
Asuendra  DZAHE | Il / elle s'en va
Risuendra  DZATRU | Nous nous en allons
Musuendra  DZANYU | Vous vous en allez
Wasuendra  DZAO | Ils / elles s'en vont
HANGU | chez moi
HAHO | chez toi
HAHE | chez lui / chez elle
HATRU | chez nous
HANYU | chez vous
HAO | chez eux / chez elles
ɗagoni hangu | dans mon village | ɗagoni hatru | dans notre village
ɗagoni haho | dans ton village | ɗagoni hanyu | dans votre village
ɗagoni hahe | dans son village | ɗagoni hao | dans leur village
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 29,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 29.",
    content: `

Chapitre 30 - Les Infixes Compléments

Il n'existe pas de pronom complément d'objet  ou de pronom  attribut   autonome  en   shimaore. De la même façon que le pronom sujet est intégré à la construction verbale sous forme de préfixe sujet, le pronom complément d'objet ou le pronom attribut se réalise comme un infixe à  l'intérieur du verbe. Il est situé juste avant la racine verbale.
Voici d'abord quelques exemples, pour bien comprendre ce phénomène :


1. U-SI-NI-ONA
->  Usiniona
=   tu me vois.
Compl. d'objet
2. TSI-HU-AMBIA
-> Tsihuambia
=   je te dis.
Attribut
3. A-MU-REME
-> Amureme
=   il / elle l'a frappé(e).
Compl. d'objet
4. A-SI-MU-V̄A-NI
-> Asimuv̄ani
= il / elle vous donne.
Attribut


Les infixes compléments d'objet existent pour toutes les classes nominales, avec une série spéciale d'infixes pour le genre  MU-/WA-,  qui servent indifféremment de pronoms compléments d'objet ou de pronoms d'attribution (= complément d'objet indirect).

 1. LES INFIXES COMPLÉMENTS DES ANIMÉS ET INANIMÉS : 



GENRES / Classes
SINGULIER
Equivalent
PLURIEL
Equivalent

12MU-/WA- (Cl 1 / 2)
3
-NI-
-HU-
-MU- / -MW-
me, moi
te, toi
le, la , l', lui
-RI-
-MU- ... -NI
-WA-
nous
vous
les, leur
MU-/MI-  (Cl 3 / 4)
-U-
le, la , l'
-I-
les
MA-  (Cl 5 / 6)
-LI-
le, la , l'
-YA-
les
SHI-/ZI-  (Cl
7 / 8)
-I-
le, la , l'
-ZI-
les
N- (Cl 9 / 10)
-I-
le, la , l'
-ZI-
les
U-  (Cl 11,
14)
-U-
le, la , l'
 
 
Classes Locatives
-V̄WA-
y, en
 
 


On remarque le risque de confusion entre l'infixe complément de la 3ème personne du singulier (Classe 1) et celui de la 2ème personne du pluriel qui sont tous les deux  -MU-.
Ainsi : Tsimuambia peut signifier : "je lui dis" ou "je vous dis".

Pour éviter ce risque de confusion, on ajoute habituellement la terminaison plurielle  -NI  à la fin du verbe lorsqu'il s'agit de l'infixe complément de la 2ème personne du pluriel. Ainsi :


Tsimuambiani
=  je vous dis.    ("vous" pluriel)
Tsimuambia
=  je lui dis.



 2. EMPLOI DE l'INFIXE PRONOM COMPLÉMENT : 

L'infixe complément remplace (ou renforce), soit un nom complément d'objet direct, soit un nom attribut. De même que le préfixe sujet s'utilise en même temps que le nom sujet, l'infixe complément, inséré dans le verbe, s'emploie même lorsque le nom attribut ou le nom complément d'objet est présent
dans la phrase.  Il renforce alors celui-ci.

EXEMPLES : 


1. Risuhuvulikia.
Nous t' écoutons.
2. Ɓaɓa, Mama, musinilishe weke !
Papa, Maman, ne me laissez pas seul !
3. Tsina midzo.  - Ivahidze ɓasi !
J'ai des bagages.  - Montez-les alors !
4. Mwanangu a hav̄i ? - Tsimuono pareni.
Où est mon enfant ?  - Je l'ai vu sur la route.
5. Muhire !
Appelle-le !
   Muhire Ali !      (et non : Hira Ali !)
Appelle (-le) Ali !
6. Waye umuria ha nguvu.
Il le craint beaucoup.
   Waye umuria ɓaɓahe ha nguvu.
Il (le) craint beaucoup son père.
7. Maji muhimu, nariyahifadhi !
L'eau est importante, protégeons-la !


 3. REMARQUES : 


A l'IMPÉRATIF, la présence d'un infixe complément  entraîne une modification de la voyelle finale
-A  en  -E. Ainsi :

Ambia !
= dis ! 
Mwambie !
= dis-lui !
V̄a !    (inusité)
= donne !Niv̄e / Nimbe !
= donne-moi !
Saidia !
= aide !
Nisaidie !
= aide-moi !
Ngalia !
= regarde !
Zingalie !
= regarde-les !



Le shimaore n'accepte qu'un seul infixe complément par verbe. Ainsi :

Tsina zombo mbili. Nitsohuazima imoja.
J'ai deux coupe-coupes. Je t'(en) prêterai un.




Dans cet exemple, c'est le pronom attribut -HU- qui occupe la place de l'infixe complément, le complément d'objet direct est sous-entendu. L'attribut a toujours priorité sur le complément d'objet direct pour occuper la place de l'infixe complément à l'intérieur du verbe.
Lorsque 2 pronoms (attribut + complément d'objet) sont absolument nécessaires, on pourra ajouter un suffixe complément d'objet, ou "-O" de référence, à la fin du verbe.


VOCABULAIRE


Mimea (Cl 4)
des plantes
Munyamba, mi-
un badamier, des --
Muɓa, mi-
une épine, des --
Mupwera, mi-
un goyavier, des --
Muhaju, mi-
un tamarin, des --
Murandra, mi-
un dattier sauvage, des --
Muhõko, mi-
un palétuvier, des --
Murindri, mi-
un bananier, des --
Mukonokono, mi-
un corossolier, des --
Mutseve, mi-
feuille de cocotier
Mukungu, mi-
régime de bananes
Muzi, mi-
une racine, des --


EXERCICES

EXERCICE 1 : Traduisez en shimaore :


Appelle-le ! Aide-moi ! Regarde-les (les enfants) !  Regarde-les (les choses) ! Donne-moi !  Dis-moi ! Dis-nous !  Je t'ai vu, il l'a vu, je vous ai vus, ils nous ont dit, il m'a dit, je t'ai dit,  je te l'ai donné, il m'a appelé,  je les ai appelés (les enfants),  je l'ai lu (le livre),  l'as-tu lu (le livre) ?  L'a-t-elle pris (le livre) ?  Les a-t-elle pris (les livres) ?


EXERCICE 2 : Traduisez en français :



Tsihuambia.
Tsahuelewa.
Sembea langu la hav̄i ? - Tsiliono mezani.
Mudzo wangu wa hav̄i ? - Tsiuono nyumbani.
 Nisumuhira Ali.
Tsimuono zamangu.
Namumsaidie mama na zihazi zahe.
Tsamuona Rukia.
Wami umuria ha nguvu ɓaɓangu.
Mama amureme mwanahe.




Chapitre précédentChapitre suivantTable des matières | 1. U-SI-NI-ONA | ->  Usiniona | =   tu me vois. | Compl. d'objet | 2. TSI-HU-AMBIA | -> Tsihuambia | =   je te dis. | Attribut | 3. A-MU-REME | -> Amureme | =   il / elle l'a frappé(e). | Compl. d'objet | 4. A-SI-MU-V̄A-NI | -> Asimuv̄ani | = il / elle vous donne. | Attribut | GENRES / Classes | SINGULIER | Equivalent | PLURIEL | Equivalent | 12MU-/WA- (Cl 1 / 2)
3 | -NI-
-HU-
-MU- / -MW- | me, moi
te, toi
le, la , l', lui | -RI-
-MU- ... -NI
-WA- | nous
vous
les, leur | MU-/MI-  (Cl 3 / 4) | -U- | le, la , l' | -I- | les | MA-  (Cl 5 / 6) | -LI- | le, la , l' | -YA- | les | SHI-/ZI-  (Cl
7 / 8) | -I- | le, la , l' | -ZI- | les | N- (Cl 9 / 10) | -I- | le, la , l' | -ZI- | les | U-  (Cl 11,
14) | -U- | le, la , l' |  |  | Classes Locatives | -V̄WA- | y, en |  |  | Tsimuambiani | =  je vous dis.    ("vous" pluriel) | Tsimuambia | =  je lui dis. | 1. Risuhuvulikia. | Nous t' écoutons. | 2. Ɓaɓa, Mama, musinilishe weke ! | Papa, Maman, ne me laissez pas seul ! | 3. Tsina midzo.  - Ivahidze ɓasi ! | J'ai des bagages.  - Montez-les alors ! | 4. Mwanangu a hav̄i ? - Tsimuono pareni. | Où est mon enfant ?  - Je l'ai vu sur la route. | 5. Muhire ! | Appelle-le ! | Muhire Ali !      (et non : Hira Ali !) | Appelle (-le) Ali ! | 6. Waye umuria ha nguvu. | Il le craint beaucoup. | Waye umuria ɓaɓahe ha nguvu. | Il (le) craint beaucoup son père. | 7. Maji muhimu, nariyahifadhi ! | L'eau est importante, protégeons-la ! | Ambia ! | = dis ! | Mwambie ! | = dis-lui ! | V̄a !    (inusité) | = donne ! | Niv̄e / Nimbe ! | = donne-moi ! | Saidia ! | = aide ! | Nisaidie ! | = aide-moi ! | Ngalia ! | = regarde ! | Zingalie ! | = regarde-les ! | Mimea (Cl 4) | des plantes | Munyamba, mi- | un badamier, des -- | Muɓa, mi- | une épine, des -- | Mupwera, mi- | un goyavier, des -- | Muhaju, mi- | un tamarin, des -- | Murandra, mi- | un dattier sauvage, des -- | Muhõko, mi- | un palétuvier, des -- | Murindri, mi- | un bananier, des -- | Mukonokono, mi- | un corossolier, des -- | Mutseve, mi- | feuille de cocotier | Mukungu, mi- | régime de bananes | Muzi, mi- | une racine, des -- | Chapitre précédent | Chapitre suivant | Table des matières
1. U-SI-NI-ONA | ->  Usiniona | =   tu me vois. | Compl. d'objet
2. TSI-HU-AMBIA | -> Tsihuambia | =   je te dis. | Attribut
3. A-MU-REME | -> Amureme | =   il / elle l'a frappé(e). | Compl. d'objet
4. A-SI-MU-V̄A-NI | -> Asimuv̄ani | = il / elle vous donne. | Attribut
GENRES / Classes | SINGULIER | Equivalent | PLURIEL | Equivalent
12MU-/WA- (Cl 1 / 2)
3 | -NI-
-HU-
-MU- / -MW- | me, moi
te, toi
le, la , l', lui | -RI-
-MU- ... -NI
-WA- | nous
vous
les, leur
MU-/MI-  (Cl 3 / 4) | -U- | le, la , l' | -I- | les
MA-  (Cl 5 / 6) | -LI- | le, la , l' | -YA- | les
SHI-/ZI-  (Cl
7 / 8) | -I- | le, la , l' | -ZI- | les
N- (Cl 9 / 10) | -I- | le, la , l' | -ZI- | les
U-  (Cl 11,
14) | -U- | le, la , l' |  | 
Classes Locatives | -V̄WA- | y, en |  | 
Tsimuambiani | =  je vous dis.    ("vous" pluriel)
Tsimuambia | =  je lui dis.
1. Risuhuvulikia. | Nous t' écoutons.
2. Ɓaɓa, Mama, musinilishe weke ! | Papa, Maman, ne me laissez pas seul !
3. Tsina midzo.  - Ivahidze ɓasi ! | J'ai des bagages.  - Montez-les alors !
4. Mwanangu a hav̄i ? - Tsimuono pareni. | Où est mon enfant ?  - Je l'ai vu sur la route.
5. Muhire ! | Appelle-le !
Muhire Ali !      (et non : Hira Ali !) | Appelle (-le) Ali !
6. Waye umuria ha nguvu. | Il le craint beaucoup.
Waye umuria ɓaɓahe ha nguvu. | Il (le) craint beaucoup son père.
7. Maji muhimu, nariyahifadhi ! | L'eau est importante, protégeons-la !
Ambia ! | = dis ! | Mwambie ! | = dis-lui !
V̄a !    (inusité) | = donne ! | Niv̄e / Nimbe ! | = donne-moi !
Saidia ! | = aide ! | Nisaidie ! | = aide-moi !
Ngalia ! | = regarde ! | Zingalie ! | = regarde-les !
Mimea (Cl 4) | des plantes | Munyamba, mi- | un badamier, des --
Muɓa, mi- | une épine, des -- | Mupwera, mi- | un goyavier, des --
Muhaju, mi- | un tamarin, des -- | Murandra, mi- | un dattier sauvage, des --
Muhõko, mi- | un palétuvier, des -- | Murindri, mi- | un bananier, des --
Mukonokono, mi- | un corossolier, des -- | Mutseve, mi- | feuille de cocotier
Mukungu, mi- | régime de bananes | Muzi, mi- | une racine, des --
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 30,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 30.",
    content: `

Chapitre 31 - Le Suffixe "-O" de référence

Le "-O" de référence possède de nombreux emplois, le point commun entre tous ces emplois étant qu'il fait toujours référence à un nom implicitement présent dans le discours.

Il sert à former le démonstratif de référence. (Voir : Chapitre 15.)
Il sert à former le présentatif de référence.  (Voir : Chapitre 27.)
Il joue le rôle de pronom complément d'objet lorsqu'il est suffixé à un verbe.
Il peut être suffixé à la particule associative  NA (= et, avec).
Le "-O" seul suffixé au verbe correspond à un pronom relatif. (Voir : Chapitre 52.)


Le suffixe "-O" de référence s'accorde en classe au nom auquel il se rapporte en utilisant la série des
préfixes pronominaux. Cependant le suffixe  -O  pronom relatif ne prend pas d'accord.



GENRE / Classes
SINGULIER
PLURIEL

MU-/WA- (Cl 1/2)
-WO
-WO
MU-/MI-  (Cl 3/4)
-WO
-YO
MA-  (Cl 5/6)
-LO
-YO
SHI-/ZI-  (Cl 7/8)
-YO
-ZO
N-  (Cl 9/10)
-YO
-ZO
U-  (Cl 11, 14)
-WO
 
Classes locatives
-V̄O



 1. LE SUFFIXE "-O"  DE RÉFÉRENCE COMPLÉMENT D'OBJET : 

Comme en français,  la plupart des verbes n'admettent qu'un seul pronom complément. Cependant, un petit nombre de verbes : UV̄A (donner), UV̄ELESHEA (envoyer), UONESA (montrer),  UAMBIA (dire à), UAZIMA  (prêter), etc.. peuvent se construire avec deux pronoms compléments : un complément d'attribution et un complément d'objet.
Nous examinons ici deux cas bien distincts d'emploi de ces verbes :


AVEC LES VERBES A LA VOIX ACTIVE :

Lorsque 2  pronoms compléments sont nécessaires,  le complément d'attribution occupe la position d'infixe à l'intérieur du verbe,  tandis que le complément d'objet direct est représenté par le "-O" de référence, suffixé à la fin du verbe. Ainsi :


Uva = donner
amba
il lui a donné.
 
 
ambayo
il le lui a donné.
(Cl 9)
 
niv̄e !
donne-moi !
 
 
niv̄ezo !
donne-les moi !
(Cl 10)
 
Udzisa  = demander
dzisa !
demande !
 
 
mudzise !
demande-lui !
 
 
mudziseyo !
demande-le lui !
(Cl 9)
 
amudzisezo
qu'il les lui demande.
(Cl 10)
 
Uambia  = dire à
mwambie !
dis-lui !
 
 
mwambieyo !
dis-le lui !
(Cl 9)


AVEC LES VERBES A LA VOIX PASSIVE :

Les verbes à 2 compléments qui se construisent à la voix passive avec un sujet personnel (construction impossible en français) utilisent le "-O" de référence comme complément d'objet. Ainsi :


1. Marike tsiv̄olwazo na ɓaɓangu.
De l'argent m'a été donné par mon père.
 
(Anglais : I was given money by my father.)
2. Hadisi naambilwayo.
L'histoire que l'on m'a racontée.
 
(Anglais : I have been told the story.)



 2. LA PARTICULE "NA" SUIVIE DU "-O" DE RÉFÉRENCE : 

Le "-O"  de référence s'accroche à la particule  NA, en respectant les accords de classe.
Il en va de même avec le verbe  UKA NA (avoir), constitué de  UKA+NA  (= être avec), qui n'admet pas d'infixe complément. Dans ce cas on utilise le suffixe "-O" de référence comme pronom complément d'objet.

EXEMPLES : 


1. Aja nayo ɗagoni.
Il est venu avec au village.
(Cl 9)
2. Barji ilawa nawo.
La barge est partie avec eux.
(Cl 10)
3. Gari wasendrao nalo.
La voiture qu'ils emportent.
(Cl 5)
 
4. Ana umukoɓa ?  - Anawo.
A-t-elle le sac ?
- Elle l'a.
5. Una shio yaho ?  - Tsinayo.
As-tu ton cahier ?
- Je l'ai.
6. Wana kalamu zao ? - Wanazo.
Ils ont leurs stylos ?
- Ils les ont.
7. Una gari laho ?  - Tsinalo.
As-tu ta voiture ?
- Je l'ai.




VOCABULAIRE


aeroplani
avion
latablu, meza
table
ɓakuli
bol
marikabu
bateau
bwati
boîte
nguo
vêtement
kabwa
chaussure, sandale
nyungu
marmite
kalamu, stilo
stylo
robo
robe
kuni
bois de chauffage
sinia
plateau


EXERCICES

EXERCICE 1 : Traduisez en shimaore :


Donne-moi !  donne-le moi (le livre) !  donne-les moi (les stylos) !  il le lui a donné (le livre),  elle les lui a donné (les stylos),  demande-la lui (la chose) !  demande-les lui (les livres),  qu'il les lui demande (les livres) !  dis-la lui (la chose) !  il la lui dit (la chose).
Il est venu avec (les amis),  il est venu avec (le sac),  ils sont partis avec (les livres),  ils sont allés avec (la voiture),  elle est allée avec (les assiettes).
Elle l'a (la voiture),  ils les ont (les passeports),  je les ai (les papiers), je l'ai (la permission),  vous l'avez (la maison).


EXERCICE 2 : Traduisez en français :



Aja nawo harimwa liɗago.
Alawa nalo (ligari.)
Walawa nazo (zimarike.)
Aendre nayo (ibarji.)
Una pasiporo ? - Tsinayo.
Una mukoɓa waho ? - Tsisi nawo.
Wana makaratasi yawo ? - Wanayo.
Ana gari lahe leo ? - Kasi nalo.
Muna zio zanyu ? - Rinazo.
Wana zinguo zawo mpia ? - Wanazo.




Chapitre précédentChapitre suivantTable des matières | GENRE / Classes | SINGULIER | PLURIEL | MU-/WA- (Cl 1/2) | -WO | -WO | MU-/MI-  (Cl 3/4) | -WO | -YO | MA-  (Cl 5/6) | -LO | -YO | SHI-/ZI-  (Cl 7/8) | -YO | -ZO | N-  (Cl 9/10) | -YO | -ZO | U-  (Cl 11, 14) | -WO |  | Classes locatives | -V̄O | Uva = donner | amba | il lui a donné. |  |  | ambayo | il le lui a donné. | (Cl 9) |  | niv̄e ! | donne-moi ! |  |  | niv̄ezo ! | donne-les moi ! | (Cl 10) |  | Udzisa  = demander | dzisa ! | demande ! |  |  | mudzise ! | demande-lui ! |  |  | mudziseyo ! | demande-le lui ! | (Cl 9) |  | amudzisezo | qu'il les lui demande. | (Cl 10) |  | Uambia  = dire à | mwambie ! | dis-lui ! |  |  | mwambieyo ! | dis-le lui ! | (Cl 9) | 1. Marike tsiv̄olwazo na ɓaɓangu. | De l'argent m'a été donné par mon père. |  | (Anglais : I was given money by my father.) | 2. Hadisi naambilwayo. | L'histoire que l'on m'a racontée. |  | (Anglais : I have been told the story.) | 1. Aja nayo ɗagoni. | Il est venu avec au village. | (Cl 9) | 2. Barji ilawa nawo. | La barge est partie avec eux. | (Cl 10) | 3. Gari wasendrao nalo. | La voiture qu'ils emportent. | (Cl 5) |  | 4. Ana umukoɓa ?  - Anawo. | A-t-elle le sac ? | - Elle l'a. | 5. Una shio yaho ?  - Tsinayo. | As-tu ton cahier ? | - Je l'ai. | 6. Wana kalamu zao ? - Wanazo. | Ils ont leurs stylos ? | - Ils les ont. | 7. Una gari laho ?  - Tsinalo. | As-tu ta voiture ? | - Je l'ai. | aeroplani | avion | latablu, meza | table | ɓakuli | bol | marikabu | bateau | bwati | boîte | nguo | vêtement | kabwa | chaussure, sandale | nyungu | marmite | kalamu, stilo | stylo | robo | robe | kuni | bois de chauffage | sinia | plateau | Chapitre précédent | Chapitre suivant | Table des matières
GENRE / Classes | SINGULIER | PLURIEL
MU-/WA- (Cl 1/2) | -WO | -WO
MU-/MI-  (Cl 3/4) | -WO | -YO
MA-  (Cl 5/6) | -LO | -YO
SHI-/ZI-  (Cl 7/8) | -YO | -ZO
N-  (Cl 9/10) | -YO | -ZO
U-  (Cl 11, 14) | -WO | 
Classes locatives | -V̄O
Uva = donner | amba | il lui a donné. | 
 | ambayo | il le lui a donné. | (Cl 9)
 | niv̄e ! | donne-moi ! | 
 | niv̄ezo ! | donne-les moi ! | (Cl 10)

Udzisa  = demander | dzisa ! | demande ! | 
 | mudzise ! | demande-lui ! | 
 | mudziseyo ! | demande-le lui ! | (Cl 9)
 | amudzisezo | qu'il les lui demande. | (Cl 10)

Uambia  = dire à | mwambie ! | dis-lui ! | 
 | mwambieyo ! | dis-le lui ! | (Cl 9)
1. Marike tsiv̄olwazo na ɓaɓangu. | De l'argent m'a été donné par mon père.
 | (Anglais : I was given money by my father.)
2. Hadisi naambilwayo. | L'histoire que l'on m'a racontée.
 | (Anglais : I have been told the story.)
1. Aja nayo ɗagoni. | Il est venu avec au village. | (Cl 9)
2. Barji ilawa nawo. | La barge est partie avec eux. | (Cl 10)
3. Gari wasendrao nalo. | La voiture qu'ils emportent. | (Cl 5)

4. Ana umukoɓa ?  - Anawo. | A-t-elle le sac ? | - Elle l'a.
5. Una shio yaho ?  - Tsinayo. | As-tu ton cahier ? | - Je l'ai.
6. Wana kalamu zao ? - Wanazo. | Ils ont leurs stylos ? | - Ils les ont.
7. Una gari laho ?  - Tsinalo. | As-tu ta voiture ? | - Je l'ai.
aeroplani | avion | latablu, meza | table
ɓakuli | bol | marikabu | bateau
bwati | boîte | nguo | vêtement
kabwa | chaussure, sandale | nyungu | marmite
kalamu, stilo | stylo | robo | robe
kuni | bois de chauffage | sinia | plateau
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 31,
    title: "Leçon 31",
    description: "Contenu du chapitre 31.",
    content: `

Chapitre 32 - Les Verbes : Le Subjonctif

Tout comme en français, le subjonctif est fréquemment employé après une idée d'obligation, ou pour faire une suggestion, etc.. mais aussi à la suite d'un premier verbe, que celui-ci exprime une volonté ou non, là où le français utilise habituellement un infinitif.

 1. FORME AFFIRMATIVE : 

 PRÉFIXE SUJET + RACINE VERBALE - E 

MODÈLE :          USOMA = lire, étudier







NI-SOME    
-> nisome
que je lise
U-SOME    
-> usome
que tu lises
A-SOME    
-> asome
qu'il / elle lise
RI-SOME    
-> risome
que nous lisions
MU-SOME    
-> musome
que vous lisiez
WA-SOME    
-> wasome
qu'ils / elles lisent


EXEMPLES : 

Risome trini ?
Que faut-il que nous lisions ?
 
Nifanye hazi na mbani ?
Avec qui faut-il que je travaille ?
 
Atsaha alole mutru mushe.
Il veut épouser une femme.
(Il veut qu'il épouse ...)
Ko uketsi.
Viens t'asseoir.
(Viens que tu t'asseyes)


 2. FORME NÉGATIVE : 

 PRÉFIXE SUJET + SI + RACINE VERBALE - E 

MODÈLE :          USOMA = lire, étudier






NI-SI-SOME    
-> nisisome
que je ne lise pas
U-SI-SOME    
-> usisome
que tu ne lises pas
A-SI-SOME    
-> asisome
qu'il /elle ne lise pas
RI-SI-SOME    
-> risisome
que nous ne lisions pas
MU-SI-SOME    
-> musisome
que vous ne lisiez pas
WA-SI-SOME    
-> wasisome
qu'ils / elles ne lisent pas


On constate que le SUBJONCTIF NÉGATIF est identique à l'IMPÉRATIF NÉGATIF.

 3. LE SUBJONCTIF APRÈS "ENDRA" : 

En français on dit habituellement : "Je vais (il va / vous allez /elles vont / etc...) faire."
On constate que le verbe qui suit "aller" est à l'infinitif.
En shimaore, le verbe qui suit  ENDRA (= aller) se conjugue au subjonctif, avec l'addition d'un infixe de contingence  -A-  placé entre le préfixe sujet et le radical verbal :

 PRÉFIXE SUJET + A + RACINE VERBALE - E 

MODÈLE :          UENDRA UNUNUA TROVI = aller acheter des bananes



Nisendra nanunue trovi.
Je vais acheter des bananes.
Usendra uanunue trovi.
Tu vas acheter des bananes.
Asendra anunue trovi.
Il / elle va acheter des bananes.
Risendra ranunue trovi.
Nous allons acheter des bananes.
Musendra mwanunue trovi.
Vous allez acheter des bananes.
Wasendra wanunue trovi.
Ils / elles vont acheter des bananes.



EXEMPLES : 


Nisutsaha nendre narare !
Je veux aller me promener !
Rendre rale shahula ha mayangu !
Allons manger chez ma mère !
Ɓaɓa endra uamlole !
Papa, va l'épouser !



 4. MOTS EXPRIMANT L'OBLIGATION, SUIVIS D'UN SUBJONCTIF : 


Ilazimu, Lazima
il faut
Afudhwali
il vaut mieux
Ulazimisha
obliger quelqu'un
Bora / Borwa
cela vaut mieux
Sharuti
il est obligatoire
Ile, Pare
afin de
Hairi
il vaut mieux 
Yafarudhwi
c'est obligé


EXEMPLES : 


1. Afudhwali uje.
Il vaut mieux que tu viennes.
2. Bora niendre dzangu.
Mieux vaut que je retourne chez moi.
3. Alazimishwa amuliv̄e.
On l'a obligé à le payer.
4. Hairi uendre dzaho.
Il vaut mieux que tu retournes chez toi.
5. Mwanadamu imlazimu afanye hazi ile ayeshi.
L'homme est obligé de travailler pour vivre.(L'homme il lui faut qu'il travaille pour qu'il vive.)


Campagne de protection des tortues sur RFO Mayotte : 

Narizilishe zinyamba ziyeshi.
Laissons vivre les tortues.
(Laissons les tortues qu'elles vivent)


EXERCICES

EXERCICE 1 : Traduisez en shimaore :


Que je lise, que tu lises, qu'il parte, que tu fasses, qu'elle raconte, que nous fassions, que j'aille, que nous allions, que je sache,  que vous sachiez, que tu puisses, qu'elles puissent, que nous écrivions, que tu continues, que vous mangiez, que nous nous promenions,   que tu te dépêches, qu'il ose, qu'ils préparent,       qu'elle se repose.
Que je ne vienne pas, que tu ne manges pas, qu'il n'entende pas,      qu'elle ne paye pas, que vous ne le frappiez pas (l'enfant), qu'il ne le prenne pas (le stylo), que nous ne lisions pas, qu'elle ne voie pas,      que vous ne restiez pas, qu'elle ne cuisine pas, que tu ne traverses pas,
qu'il n'écrive pas, qu'ils ne se fatiguent pas, qu'ils ne montent pas, qu'il ne conduise pas, que tu n'oublies pas, que vous ne soyez pas étonnés, qu'ils n'enlèvent pas, qu'elle n'accepte pas,
que vous ne prêtiez pas.


EXERCICE 2 : Traduisez en français :


Nireme, afanye, uendre, waje, risome, muliv̄e, adzise, afue zinguo, wahose zia, mupindre, waregeye, avangue zia, nione, warenge,  niendre hangu.
Nisifanye, asishie, wasizie, usiɓadili, asifikiri, musiɗele, wasiaswili, asinunue, musilale, musivulikie, nisingadze, asirongoe, wasisome, wasiendre, asijue.


EXERCICE 3 : Conjuguez le verbe au subjonctif et traduisez :



Lazima  (ufanya)  hazi yaho.
Afudhwali  (uvulikia)  ɓaɓaho.
Nisufanya hazi ile  (uliv̄a)  shahula.
Bora  (uendra)  dzanyu.
Ilazimu  (uliv̄a)  deni zahe.
Afudhwali  (uja.)
Nisutsaha (upara) putu.
Endra (urenga) trovi.
Risiendra (ununua) nyama.
Nisiendra uju oho (uona) mutru.




Chapitre précédentChapitre suivantTable des matières | NI-SOME | -> nisome | que je lise | U-SOME | -> usome | que tu lises | A-SOME | -> asome | qu'il / elle lise | RI-SOME | -> risome | que nous lisions | MU-SOME | -> musome | que vous lisiez | WA-SOME | -> wasome | qu'ils / elles lisent | Risome trini ? | Que faut-il que nous lisions ? |  | Nifanye hazi na mbani ? | Avec qui faut-il que je travaille ? |  | Atsaha alole mutru mushe. | Il veut épouser une femme. | (Il veut qu'il épouse ...) | Ko uketsi. | Viens t'asseoir. | (Viens que tu t'asseyes) | NI-SI-SOME | -> nisisome | que je ne lise pas | U-SI-SOME | -> usisome | que tu ne lises pas | A-SI-SOME | -> asisome | qu'il /elle ne lise pas | RI-SI-SOME | -> risisome | que nous ne lisions pas | MU-SI-SOME | -> musisome | que vous ne lisiez pas | WA-SI-SOME | -> wasisome | qu'ils / elles ne lisent pas | Nisendra nanunue trovi. | Je vais acheter des bananes. | Usendra uanunue trovi. | Tu vas acheter des bananes. | Asendra anunue trovi. | Il / elle va acheter des bananes. | Risendra ranunue trovi. | Nous allons acheter des bananes. | Musendra mwanunue trovi. | Vous allez acheter des bananes. | Wasendra wanunue trovi. | Ils / elles vont acheter des bananes. | Nisutsaha nendre narare ! | Je veux aller me promener ! | Rendre rale shahula ha mayangu ! | Allons manger chez ma mère ! | Ɓaɓa endra uamlole ! | Papa, va l'épouser ! | Ilazimu, Lazima | il faut | Afudhwali | il vaut mieux | Ulazimisha | obliger quelqu'un | Bora / Borwa | cela vaut mieux | Sharuti | il est obligatoire | Ile, Pare | afin de | Hairi | il vaut mieux | Yafarudhwi | c'est obligé | 1. Afudhwali uje. | Il vaut mieux que tu viennes. | 2. Bora niendre dzangu. | Mieux vaut que je retourne chez moi. | 3. Alazimishwa amuliv̄e. | On l'a obligé à le payer. | 4. Hairi uendre dzaho. | Il vaut mieux que tu retournes chez toi. | 5. Mwanadamu imlazimu afanye hazi ile ayeshi. | L'homme est obligé de travailler pour vivre.(L'homme il lui faut qu'il travaille pour qu'il vive.) | Chapitre précédent | Chapitre suivant | Table des matières
NI-SOME | -> nisome | que je lise
U-SOME | -> usome | que tu lises
A-SOME | -> asome | qu'il / elle lise
RI-SOME | -> risome | que nous lisions
MU-SOME | -> musome | que vous lisiez
WA-SOME | -> wasome | qu'ils / elles lisent
Risome trini ? | Que faut-il que nous lisions ? | 
Nifanye hazi na mbani ? | Avec qui faut-il que je travaille ? | 
Atsaha alole mutru mushe. | Il veut épouser une femme. | (Il veut qu'il épouse ...)
Ko uketsi. | Viens t'asseoir. | (Viens que tu t'asseyes)
NI-SI-SOME | -> nisisome | que je ne lise pas
U-SI-SOME | -> usisome | que tu ne lises pas
A-SI-SOME | -> asisome | qu'il /elle ne lise pas
RI-SI-SOME | -> risisome | que nous ne lisions pas
MU-SI-SOME | -> musisome | que vous ne lisiez pas
WA-SI-SOME | -> wasisome | qu'ils / elles ne lisent pas
Nisendra nanunue trovi. | Je vais acheter des bananes.
Usendra uanunue trovi. | Tu vas acheter des bananes.
Asendra anunue trovi. | Il / elle va acheter des bananes.
Risendra ranunue trovi. | Nous allons acheter des bananes.
Musendra mwanunue trovi. | Vous allez acheter des bananes.
Wasendra wanunue trovi. | Ils / elles vont acheter des bananes.
Nisutsaha nendre narare ! | Je veux aller me promener !
Rendre rale shahula ha mayangu ! | Allons manger chez ma mère !
Ɓaɓa endra uamlole ! | Papa, va l'épouser !
Ilazimu, Lazima | il faut | Afudhwali | il vaut mieux
Ulazimisha | obliger quelqu'un | Bora / Borwa | cela vaut mieux
Sharuti | il est obligatoire | Ile, Pare | afin de
Hairi | il vaut mieux | Yafarudhwi | c'est obligé
1. Afudhwali uje. | Il vaut mieux que tu viennes.
2. Bora niendre dzangu. | Mieux vaut que je retourne chez moi.
3. Alazimishwa amuliv̄e. | On l'a obligé à le payer.
4. Hairi uendre dzaho. | Il vaut mieux que tu retournes chez toi.
5. Mwanadamu imlazimu afanye hazi ile ayeshi. | L'homme est obligé de travailler pour vivre.(L'homme il lui faut qu'il travaille pour qu'il vive.)
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 32,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 32.",
    content: `

Chapitre 33 - Les Verbes : L'Imparfait

Ce temps comporte une idée de durée de l'action dans le passé, et se traduira en général par un IMPARFAIT en français. (Il correspond au PAST CONTINUOUS de l'anglais.)
La marque de temps de l'imparfait est l'infixe -KO-, dérivé du verbe  UKA  = être.
De plus, un infixe de contingence -A- se place entre le pronom sujet et le marqueur de temps, transformant les préfixes sujets de la façon suivante : 



Classe
Forme affirmative
Equivalence
Forme négative
Equivalence

 
 
Cl 1
 
 
Cl 2
 NI + A-  :    NA-
 U + A-    :    UA-
 A + A-    :    A-
 RI + A-   :    RA-
 MU + A-   :    MWA-
 WA + A-   :    WA-
= je
= tu
= il / elle
= nous
= vous
= ils / elles
 TSI + A-   : TSA-
 KU + A-     : KWA-
 KA + A-     : KA-
 KARI + A-   : KARA-
 KAMU + A-   : KAMWA-
 KAWA + A-   : KAWA-
= je ne ......... pas
= tu ne ......... pas
= il / elle ne .... pas
= nous ne ...... pas
= vous ne ....... pas
= ils/elles ne ... pas

Cl 3, 11
Cl 4
 U + A-    :   UA-
 I + A-     :   YA-
= il / elle
= ils / elles
 KAU + A- : KAUA-
 KAI + A- : KAYA-
= il /elle ne ... pas
= ils/elles ne ... pas

Cl 5
Cl 6
 LI + A- : LA-
 I + A-  :   YA-
= il / elle
= ils / elles
 KALI + A- : KALA-
 KAI + A- : KAYA-
= il /elle ne ... pas
= ils/elles ne ... pas

Cl 7, 9
Cl 8, 10
 I + A-  :   YA-
 ZI + A- :  ZA-
= il / elle
= ils / elles
 KAI + A- : KAYA-
 KAZI + A- : KAZA-
= il /elle ne ... pas
= ils/elles ne ... pas


 1. L'IMPARFAIT - FORME AFFIRMATIVE : 

 PRÉFIXE SUJET + A + KO + RACINE VERBALE 

MODÈLE :          UFANYA = faire


NA-KO-FANYA    
-> nakofanya
je faisais
UA-KO-FANYA    
-> uakofanya
tu faisais
A-KO-FANYA    
-> akofanya
il /elle faisait
RA-KO-FANYA    
-> rakofanya
nous faisions
MWA-KO-FANYA    
-> mwakofanya
vous faisiez
WA-KO-FANYA    
-> wakofanya
ils / elles faisaient


 2. L'IMPARFAIT - FORME NÉGATIVE : 

 PRÉF. NÉGATIF + PRÉ. SUJET + A + KO + RACINE VERBALE 

MODÈLE :          UFANYA = faire


TSA-KO-FANYA    
-> tsakofanya
je ne faisais pas
KWA-KO-FANYA    
-> kwakofanya
tu ne faisais pas
KA-KO-FANYA    
-> kakofanya
il / elle ne faisait pas
KARA-KO-FANYA    
-> karakofanya
nous ne faisions pas
KAMWA-KO-FANYA    
-> kamwakofanya
vous ne faisiez pas
KAWA-KO-FANYA    
-> kawakofanya
ils / elles ne faisaient pas


 3. EXEMPLES : 



Uakorongoa trini ?
Que disais-tu ?
Nakokatra mwiri.
Je coupais du bois.
Wasi rakotembea oho.
Nous nous promenions au loin.
Nakohuona.
Je te voyais.
Mwana kakola shahula.
L'enfant ne mangeait pas la nourriture.



VOCABULAIRE


Uɓarikishiha
prospérer
Uola
pourrir
Ufereshea
féliciter
Urongodza
saluer
Uhora
rêver
Urumia
utiliser
Uliya
pleurer
Utseha
rire
Unuka fetre
sentir bon
Uv̄uma
souffler
Unuka nai
sentir mauvais
Uwula
tuer


EXERCICES

EXERCICE 1 : Traduisez en shimaore :


J'écrivais, tu faisais, il continuait, nous continuions,     nous nous promenions, vous étiez d'accord, ils riaient, je rêvais, tu pleurais, elle utilisait, elle préparait, ils se promenaient,
il cultivait, tu étais d'accord, vous laviez le linge.
Il ne faisait pas, ils ne jouaient pas, tu n'écrivais pas,     elle n'écoutait pas, nous ne nous reposions pas, vous ne compreniez pas, je n'osais pas, il ne remerciait pas, nous ne lisions pas,
je ne pouvais pas.


EXERCICE 2 : Traduisez en français :


Nakofanya, akofanya, wakofanya, wakosoma, rakosoma, akowona,
wakonirongodza, mwakorenga, mwakorema mbio, rakotembea, nakomalidza,
akoliya, wakonifereshea, ikonuka nai, akotayarisha.
Tsakofanya,  tsakov̄umua,   kwakopiha,    kwakoregeya,    kakohima,  kakoliv̄a,   karakovulikia,       karakosoma,      kakoliya,  kamwakokuɓali,  kawakoangiha,  kakonirongodza,  kawakotseha,  kawakoshindra,  tsakohora.


EXERCICE 3 : Conjuguez les verbes à l'imparfait et traduisez :



Mwana asufanya haraka.
Mwana masikini asuliya.
Wanatsa wasuangiha.
Wawe uangalia.
Mama asupiha shahula asuɓuhi.
Nyombe ula malavu.
Wami uelewa.
Wasiudza zitru zao ɓazari.
Nisuhosa zisahani.
Tsasomesa shifarantsa.




Chapitre précédentChapitre suivantTable des matières | Classe | Forme affirmative | Equivalence | Forme négative | Equivalence | Cl 1
 
 
Cl 2 | NI + A-  :    NA-
 U + A-    :    UA-
 A + A-    :    A-
 RI + A-   :    RA-
 MU + A-   :    MWA-
 WA + A-   :    WA- | = je
= tu
= il / elle
= nous
= vous
= ils / elles | TSI + A-   : TSA-
 KU + A-     : KWA-
 KA + A-     : KA-
 KARI + A-   : KARA-
 KAMU + A-   : KAMWA-
 KAWA + A-   : KAWA- | = je ne ......... pas
= tu ne ......... pas
= il / elle ne .... pas
= nous ne ...... pas
= vous ne ....... pas
= ils/elles ne ... pas | Cl 3, 11
Cl 4 | U + A-    :   UA-
 I + A-     :   YA- | = il / elle
= ils / elles | KAU + A- : KAUA-
 KAI + A- : KAYA- | = il /elle ne ... pas
= ils/elles ne ... pas | Cl 5
Cl 6 | LI + A- : LA-
 I + A-  :   YA- | = il / elle
= ils / elles | KALI + A- : KALA-
 KAI + A- : KAYA- | = il /elle ne ... pas
= ils/elles ne ... pas | Cl 7, 9
Cl 8, 10 | I + A-  :   YA-
 ZI + A- :  ZA- | = il / elle
= ils / elles | KAI + A- : KAYA-
 KAZI + A- : KAZA- | = il /elle ne ... pas
= ils/elles ne ... pas | NA-KO-FANYA | -> nakofanya | je faisais | UA-KO-FANYA | -> uakofanya | tu faisais | A-KO-FANYA | -> akofanya | il /elle faisait | RA-KO-FANYA | -> rakofanya | nous faisions | MWA-KO-FANYA | -> mwakofanya | vous faisiez | WA-KO-FANYA | -> wakofanya | ils / elles faisaient | TSA-KO-FANYA | -> tsakofanya | je ne faisais pas | KWA-KO-FANYA | -> kwakofanya | tu ne faisais pas | KA-KO-FANYA | -> kakofanya | il / elle ne faisait pas | KARA-KO-FANYA | -> karakofanya | nous ne faisions pas | KAMWA-KO-FANYA | -> kamwakofanya | vous ne faisiez pas | KAWA-KO-FANYA | -> kawakofanya | ils / elles ne faisaient pas | Uakorongoa trini ? | Que disais-tu ? | Nakokatra mwiri. | Je coupais du bois. | Wasi rakotembea oho. | Nous nous promenions au loin. | Nakohuona. | Je te voyais. | Mwana kakola shahula. | L'enfant ne mangeait pas la nourriture. | Uɓarikishiha | prospérer | Uola | pourrir | Ufereshea | féliciter | Urongodza | saluer | Uhora | rêver | Urumia | utiliser | Uliya | pleurer | Utseha | rire | Unuka fetre | sentir bon | Uv̄uma | souffler | Unuka nai | sentir mauvais | Uwula | tuer | Chapitre précédent | Chapitre suivant | Table des matières
Classe | Forme affirmative | Equivalence | Forme négative | Equivalence
Cl 1
 
 
Cl 2 | NI + A-  :    NA-
 U + A-    :    UA-
 A + A-    :    A-
 RI + A-   :    RA-
 MU + A-   :    MWA-
 WA + A-   :    WA- | = je
= tu
= il / elle
= nous
= vous
= ils / elles | TSI + A-   : TSA-
 KU + A-     : KWA-
 KA + A-     : KA-
 KARI + A-   : KARA-
 KAMU + A-   : KAMWA-
 KAWA + A-   : KAWA- | = je ne ......... pas
= tu ne ......... pas
= il / elle ne .... pas
= nous ne ...... pas
= vous ne ....... pas
= ils/elles ne ... pas
Cl 3, 11
Cl 4 | U + A-    :   UA-
 I + A-     :   YA- | = il / elle
= ils / elles | KAU + A- : KAUA-
 KAI + A- : KAYA- | = il /elle ne ... pas
= ils/elles ne ... pas
Cl 5
Cl 6 | LI + A- : LA-
 I + A-  :   YA- | = il / elle
= ils / elles | KALI + A- : KALA-
 KAI + A- : KAYA- | = il /elle ne ... pas
= ils/elles ne ... pas
Cl 7, 9
Cl 8, 10 | I + A-  :   YA-
 ZI + A- :  ZA- | = il / elle
= ils / elles | KAI + A- : KAYA-
 KAZI + A- : KAZA- | = il /elle ne ... pas
= ils/elles ne ... pas
NA-KO-FANYA | -> nakofanya | je faisais
UA-KO-FANYA | -> uakofanya | tu faisais
A-KO-FANYA | -> akofanya | il /elle faisait
RA-KO-FANYA | -> rakofanya | nous faisions
MWA-KO-FANYA | -> mwakofanya | vous faisiez
WA-KO-FANYA | -> wakofanya | ils / elles faisaient
TSA-KO-FANYA | -> tsakofanya | je ne faisais pas
KWA-KO-FANYA | -> kwakofanya | tu ne faisais pas
KA-KO-FANYA | -> kakofanya | il / elle ne faisait pas
KARA-KO-FANYA | -> karakofanya | nous ne faisions pas
KAMWA-KO-FANYA | -> kamwakofanya | vous ne faisiez pas
KAWA-KO-FANYA | -> kawakofanya | ils / elles ne faisaient pas
Uakorongoa trini ? | Que disais-tu ?
Nakokatra mwiri. | Je coupais du bois.
Wasi rakotembea oho. | Nous nous promenions au loin.
Nakohuona. | Je te voyais.
Mwana kakola shahula. | L'enfant ne mangeait pas la nourriture.
Uɓarikishiha | prospérer | Uola | pourrir
Ufereshea | féliciter | Urongodza | saluer
Uhora | rêver | Urumia | utiliser
Uliya | pleurer | Utseha | rire
Unuka fetre | sentir bon | Uv̄uma | souffler
Unuka nai | sentir mauvais | Uwula | tuer
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 33,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 33.",
    content: `

Chapitre 34 - Les Verbes : Le Futur

La marque de temps du FUTUR est l'infixe -TSO-.

 1. LE FUTUR - FORME AFFIRMATIVE : 

La marque de temps -TSO- est placée entre le préfixe sujet, identique à celui du présent, et la racine verbale :

 PRÉFIXE SUJET + TSO + RACINE VERBALE 

MODÈLE :           UFANYA = faire


NI-TSO-FANYA    
-> nitsofanya
je ferai
U-TSO-FANYA    
-> utsofanya
tu feras
A-TSO-FANYA    
-> atsofanya
il / elle fera
RI-TSO-FANYA    
-> ritsofanya
nous ferons
MU-TSO-FANYA    
-> mutsofanya
vous ferez
WA-TSO-FANYA    
-> watsofanya
ils / elles feront


 2. LE FUTUR - FORME NÉGATIVE : 

La marque de temps -TSO- est placée entre le préfixe sujet négatif, identique à celui du présent, et la racine verbale :

 PRÉFIXE SUJET NÉGATIF + TSO + RACINE VERBALE 

MODÈLE :          UFANYA = faire


TSI-TSO-FANYA    
-> tsitsofanya
je ne ferai pas
KU-TSO-FANYA    
-> kutsofanya
tu ne feras pas
KA-TSO-FANYA    
-> katsofanya
il / elle ne fera pas
KARI-TSO-FANYA    
-> karitsofanya
nous ne ferons pas
KAMU-TSO-FANYA    
-> kamutsofanya
vous ne ferez pas
KAWA-TSO-FANYA    
-> kawatsofanya
ils / elles ne feront pas


VOCABULAIRE


Uɓuɓua
battre, frapper
Usia
conseiller
Uɓuriha
se taire
Usonga
harceler
Uyenga
haïr, détester
Usuka
tresser, coiffer
Uhondra
maigrir
Utrala
se sauver
Ukura
être rassasié
Utsunga
élever, garder (bêtes)
Urara
flâner, vagabonder
Uzunguha
chercher


EXERCICES

EXERCICE 1 : Traduisez en shimaore :


Je finirai,  je remplirai,  je continuerai,  tu laveras,  tu écriras,  tu te reposeras,  il se dépêchera,   elle expliquera,  elle pleurera,   nous vaincrons,   vous aurez peur,   je remercierai, ils riront,  ils continueront,   vous lirez.
Je n'aurai pas peur,  tu ne pleureras pas,  nous ne vaincrons pas,  ils ne finiront pas, elle ne rira pas,      je ne continuerai pas,    il ne se reposera pas,  ils ne marcheront pas,  tu ne viendras pas,   ils ne partiront pas.


EXERCICE 2 : Traduisez en français :


Nitsofanya,  mutsofanya,   tsitsofanya,   kawatsofanya,   utsohoa,  kutsopashia, watsoangiha,  ritsolima,  karitsoheya,  atsojadza,  utsovinga gari,  watsoshuka mjini,  kawatsoheya liju,  watsorema  mbio,  nitsotayarisha.



Chapitre précédentChapitre suivantTable des matières | NI-TSO-FANYA | -> nitsofanya | je ferai | U-TSO-FANYA | -> utsofanya | tu feras | A-TSO-FANYA | -> atsofanya | il / elle fera | RI-TSO-FANYA | -> ritsofanya | nous ferons | MU-TSO-FANYA | -> mutsofanya | vous ferez | WA-TSO-FANYA | -> watsofanya | ils / elles feront | TSI-TSO-FANYA | -> tsitsofanya | je ne ferai pas | KU-TSO-FANYA | -> kutsofanya | tu ne feras pas | KA-TSO-FANYA | -> katsofanya | il / elle ne fera pas | KARI-TSO-FANYA | -> karitsofanya | nous ne ferons pas | KAMU-TSO-FANYA | -> kamutsofanya | vous ne ferez pas | KAWA-TSO-FANYA | -> kawatsofanya | ils / elles ne feront pas | Uɓuɓua | battre, frapper | Usia | conseiller | Uɓuriha | se taire | Usonga | harceler | Uyenga | haïr, détester | Usuka | tresser, coiffer | Uhondra | maigrir | Utrala | se sauver | Ukura | être rassasié | Utsunga | élever, garder (bêtes) | Urara | flâner, vagabonder | Uzunguha | chercher | Chapitre précédent | Chapitre suivant | Table des matières
NI-TSO-FANYA | -> nitsofanya | je ferai
U-TSO-FANYA | -> utsofanya | tu feras
A-TSO-FANYA | -> atsofanya | il / elle fera
RI-TSO-FANYA | -> ritsofanya | nous ferons
MU-TSO-FANYA | -> mutsofanya | vous ferez
WA-TSO-FANYA | -> watsofanya | ils / elles feront
TSI-TSO-FANYA | -> tsitsofanya | je ne ferai pas
KU-TSO-FANYA | -> kutsofanya | tu ne feras pas
KA-TSO-FANYA | -> katsofanya | il / elle ne fera pas
KARI-TSO-FANYA | -> karitsofanya | nous ne ferons pas
KAMU-TSO-FANYA | -> kamutsofanya | vous ne ferez pas
KAWA-TSO-FANYA | -> kawatsofanya | ils / elles ne feront pas
Uɓuɓua | battre, frapper | Usia | conseiller
Uɓuriha | se taire | Usonga | harceler
Uyenga | haïr, détester | Usuka | tresser, coiffer
Uhondra | maigrir | Utrala | se sauver
Ukura | être rassasié | Utsunga | élever, garder (bêtes)
Urara | flâner, vagabonder | Uzunguha | chercher
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 34,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 34.",
    content: `

Chapitre 35 - L'Infixe Réfléchi  "-DJI-"

En français, on utilise le pronom réfléchi "se" devant le verbe pour marquer qu'une action est réfléchie,
c'est-à-dire dirigée vers celui qui la fait.
Par exemple :  Il se voit  =  il se voit lui-même (dans un miroir, ou en imagination, etc...)
En shimaore, on utilise un INFIXE COMPLÉMENT D'OBJET particulier : -DJI-  (ou  -DZI-) placé
entre le marqueur de temps et la racine verbale. Cet infixe reste le même à toutes les personnes.

EXEMPLE :     UONA = voir    UDJIONA =  se voir, se  croire, s'enorgueillir


Nisidjiona      
je me vois
Usidjiona      tu te vois
Asidjiona      il / elle se voit
Risidjiona      nous nous voyons
Musidjiona      vous vous voyez
Wasidjiona      ils / elles se voient


La forme réfléchie peut être utilisée à tous les temps, y compris l'infinitif, et à toutes les formes, affirmatives et négatives :


Présent habituel :
Wami udjiona
je me vois
Présent habituel négatif :
Wami tsidjiono
je ne me vois pas
Présent actuel :
Nisudjiona
je me vois
Présent actuel négatif :
Tsisudjiona
je ne me vois pas
Accompli :
Tsidjiono
je me suis vu
Accompli négatif :
Tsadjiona
je ne me suis pas vu
Imparfait :
Nakodjiona
je me voyais
Imparfait négatif :
Tsakodjiona
je ne me voyais pas
Futur :
Nitsodjiona
je me verrai
Futur négatif :
Tsitsodjiona
je ne me verrai pas
Conditionnel :
Natsodjiona
je me verrais
Conditionnel négatif :
Tsatsodjiona
je ne me verrais pas
Impératif :
Djione !
vois-toi !
Impératif négatif :
Usidjione !
ne te vois pas !


REMARQUE : 
Tous les pronoms réfléchis français ne se traduisent pas par -DJI- :


Il est fréquent qu'un verbe pronominal français corresponde à un verbe ordinaire en shimaore :


Uketsi
=  s'asseoir
Upotea
=  se perdre
Uhima
= se lever
Utembea
= se promener
Upindra
= s'habiller
Uv̄umua
= se reposer


Le verbe pronominal français est rendu par un verbe à la forme passive en shimaore :


Uhiriwa
= s'appeler
Ulolwa
= se marier  (la femme)


Le verbe pronominal français est rendu par un verbe à la forme stative en shimaore :


Ufundriha
= s'instruire
Upasuha
= se casser


Le verbe pronominal correspond à une forme réciproque en français et en shimaore :


Udungana
= se suivre
Uhonana
= se voir (l'un l'autre)



 QUELQUES VERBES COURANTS A LA FORME RÉFLÉCHIE : 


Udjiduburia
se débrouiller
Udjikia
se sentir
Udjidzisa
se demander, s'interroger
Udjinyongoha
s'étirer
Udjihada
se tromper
Udjipara
se trouver, se retrouver
Udjihifadhwi
se protéger
Udjirema
se frapper, se mordre
Udjihodza
se faire mal
Udjisifu
se vanter
Udjihosa
se laver
Udjitayarisha
se préparer
Udjikaza
se croire fort
Udjitria hamu
se faire du soucis
Udzisomedza
s'apprendre
 
 


VOCABULAIRE


daruba
cyclone
mwamba
barrière de corail
kashikazi
saison des pluies
pev̄o
vent
kibula
Nord
sikloni
cyclone, tempête
kusi
saison sèche
swilihi
Sud
maharibi
Ouest
trotro
terre, saleté
mashariki
Est
tsi
terre, pays


EXERCICES 
EXERCICE 1 : Traduisez en shimaore :


Je me vois,   il se voit,   vous vous voyez,   je me suis mordu,    il s'est mordu,     je me suis trompé,   il s'est trompé,     nous nous sommes trompés,    je me sens,    elle se sent,  je m'interroge,    elle s'interroge,    nous nous interrogeons,     tu t'es fait mal,    il se débrouille,    je me débrouille,   débrouille-toi !    Protège-toi !    Je me suis protégé,    tu te fais du soucis,    elle se vante,    je me retrouve,  prépare-toi ! Lave-toi ! Il s'étire.
Ne te fais pas de soucis !    Ne te trompe pas !    Ne te vante pas !    Ne te fais pas mal !    Elle ne se demande pas,    ils ne se protègent pas,    ils ne se lavent pas,    je ne me fais pas de soucis,    je ne me sens pas,     tu ne te vois pas,    nous ne nous voyons pas,     ils ne se sont pas fait mal,    tu ne t'es pas débrouillé, je ne me crois pas fort, je ne me suis pas vu.


EXERCICE 2 : Traduisez en français :


Wasudjirema, udjikaza, wakodjihada, kwakodjihada, adjipara,     utsodjihodza, watsodjihodza, nisudjiona, adjirema, musudjiona,        adjihoso, uakodjirema, usudjinyongoha, atsodjipara,  nakodjihodza,     atsodjiduburia, tsidjiduburia, udjitria hamu, tsidjidzisa,      ridjidzisa, djitayarishe ! Djiduburie ! Asudjisifu, kadjisifu, tsidjihifadhwi.



Chapitre précédentChapitre suivantTable des matières | Nisidjiona | je me vois | Usidjiona | tu te vois | Asidjiona | il / elle se voit | Risidjiona | nous nous voyons | Musidjiona | vous vous voyez | Wasidjiona | ils / elles se voient | Présent habituel : | Wami udjiona | je me vois | Présent habituel négatif : | Wami tsidjiono | je ne me vois pas | Présent actuel : | Nisudjiona | je me vois | Présent actuel négatif : | Tsisudjiona | je ne me vois pas | Accompli : | Tsidjiono | je me suis vu | Accompli négatif : | Tsadjiona | je ne me suis pas vu | Imparfait : | Nakodjiona | je me voyais | Imparfait négatif : | Tsakodjiona | je ne me voyais pas | Futur : | Nitsodjiona | je me verrai | Futur négatif : | Tsitsodjiona | je ne me verrai pas | Conditionnel : | Natsodjiona | je me verrais | Conditionnel négatif : | Tsatsodjiona | je ne me verrais pas | Impératif : | Djione ! | vois-toi ! | Impératif négatif : | Usidjione ! | ne te vois pas ! | Uketsi | =  s'asseoir | Upotea | =  se perdre | Uhima | = se lever | Utembea | = se promener | Upindra | = s'habiller | Uv̄umua | = se reposer | Uhiriwa | = s'appeler | Ulolwa | = se marier  (la femme) | Ufundriha | = s'instruire | Upasuha | = se casser | Udungana | = se suivre | Uhonana | = se voir (l'un l'autre) | Udjiduburia | se débrouiller | Udjikia | se sentir | Udjidzisa | se demander, s'interroger | Udjinyongoha | s'étirer | Udjihada | se tromper | Udjipara | se trouver, se retrouver | Udjihifadhwi | se protéger | Udjirema | se frapper, se mordre | Udjihodza | se faire mal | Udjisifu | se vanter | Udjihosa | se laver | Udjitayarisha | se préparer | Udjikaza | se croire fort | Udjitria hamu | se faire du soucis | Udzisomedza | s'apprendre |  |  | daruba | cyclone | mwamba | barrière de corail | kashikazi | saison des pluies | pev̄o | vent | kibula | Nord | sikloni | cyclone, tempête | kusi | saison sèche | swilihi | Sud | maharibi | Ouest | trotro | terre, saleté | mashariki | Est | tsi | terre, pays | Chapitre précédent | Chapitre suivant | Table des matières
Nisidjiona | je me vois
Usidjiona | tu te vois
Asidjiona | il / elle se voit
Risidjiona | nous nous voyons
Musidjiona | vous vous voyez
Wasidjiona | ils / elles se voient
Présent habituel : | Wami udjiona | je me vois
Présent habituel négatif : | Wami tsidjiono | je ne me vois pas
Présent actuel : | Nisudjiona | je me vois
Présent actuel négatif : | Tsisudjiona | je ne me vois pas
Accompli : | Tsidjiono | je me suis vu
Accompli négatif : | Tsadjiona | je ne me suis pas vu
Imparfait : | Nakodjiona | je me voyais
Imparfait négatif : | Tsakodjiona | je ne me voyais pas
Futur : | Nitsodjiona | je me verrai
Futur négatif : | Tsitsodjiona | je ne me verrai pas
Conditionnel : | Natsodjiona | je me verrais
Conditionnel négatif : | Tsatsodjiona | je ne me verrais pas
Impératif : | Djione ! | vois-toi !
Impératif négatif : | Usidjione ! | ne te vois pas !
Uketsi | =  s'asseoir | Upotea | =  se perdre
Uhima | = se lever | Utembea | = se promener
Upindra | = s'habiller | Uv̄umua | = se reposer
Uhiriwa | = s'appeler | Ulolwa | = se marier  (la femme)
Ufundriha | = s'instruire | Upasuha | = se casser
Udungana | = se suivre | Uhonana | = se voir (l'un l'autre)
Udjiduburia | se débrouiller | Udjikia | se sentir
Udjidzisa | se demander, s'interroger | Udjinyongoha | s'étirer
Udjihada | se tromper | Udjipara | se trouver, se retrouver
Udjihifadhwi | se protéger | Udjirema | se frapper, se mordre
Udjihodza | se faire mal | Udjisifu | se vanter
Udjihosa | se laver | Udjitayarisha | se préparer
Udjikaza | se croire fort | Udjitria hamu | se faire du soucis
Udzisomedza | s'apprendre |  | 
daruba | cyclone | mwamba | barrière de corail
kashikazi | saison des pluies | pev̄o | vent
kibula | Nord | sikloni | cyclone, tempête
kusi | saison sèche | swilihi | Sud
maharibi | Ouest | trotro | terre, saleté
mashariki | Est | tsi | terre, pays
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 35,
    title: "Leçon 35",
    description: "Contenu du chapitre 35.",
    content: `

Chapitre 36 - La Dérivation Verbale

 1. EMPLOI DE LA DÉRIVATION VERBALE : 

Il est courant en shimaore de modifier les verbes par l'adjonction de différents suffixes à la fin du radical. On appelle ce phénomène la DÉRIVATION VERBALE.
A titre de comparaison, on peut en français modifier le sens d'un verbe en lui adjoignant certains préfixes. Par exemple :





 prendre
comprendre
apprendre
surprendre
reprendre

Ce procédé atteint malgré tout rapidement ses limites, car il ne s'applique qu'à un petit nombre de verbes, et ne modifie que l'aspect lexical du verbe, sans en modifier la fonction.


En shimaore, la dérivation verbale a pour résultat de modifier, non seulement le sens du verbe, mais aussi son emploi grammatical dans la phrase.

Cela se traduira en français par différents procédés : pronominalisation, adjonction d'un autre verbe (faire, être), ajout d'une préposition, changement de verbe, etc.. Par exemple :





 manger
êtremangé
êtremangeable
fairemanger
faire àmanger à / pour
semanger

Nous avons choisi de donner le nom de "FORME" aux différentes dérivations verbales.

 2. LES MÉCANISMES DE LA DÉRIVATION VERBALE : 

La dérivation verbale est une forme particulière de l'agglutination verbale. Elle s'effectue en ajoutant un ou plusieurs suffixes au radical verbal selon les modalités suivantes :

Chaque suffixe de dérivation a une forme et une fonction précise.
La forme du suffixe peut être modifiée par l'entourage phonétique du verbe.
Un même radical verbal peut accepter jusqu'à 3 suffixes de dérivations.
Les différents suffixes de dérivation se placent toujours dans un ordre pré-établi.


 3. LES PRINCIPALES DÉRIVATIONS VERBALES : 







1. La forme PASSIVEsuffixe  -WA
2. La forme STATIVEsuffixe  -HA


Exemple type :
URUMA = employer
-> URUMWA = être employé
Exemple type :
UPASUA = casser
-> UPASUHA = se fendre, être cassable


3. La forme PRÉPOSITIONNELLEsuffixe  -IA, -EA
4. La forme CAUSATIVE : suffixe-ISA, -ESA, -IDZA, -EDZA, -ISHA, -ESHA


Exemple type :
ULISHA = laisser
-> ULISHIA = laisser à, pour
Exemple type :
ULA = manger
-> ULISA = nourrir, faire manger


5. La forme RÉCIPROQUEsuffixe  -ANA
6. La forme RÉVERSIVE EXTRACTIVEsuffixe  -UA, -OA


Exemple type :
USAIDIA = aider
-> USAIDIANA = s'entraider
Exemple type :
UFUNGA = lier
-> UFUNGUA = délier



 4. DOUBLE ET TRIPLE DÉRIVATION : 

Certains verbes admettent une double, voire une triple dérivation, c'est-à-dire l'adjonction simultanée de 2 ou 3 suffixes dérivatifs à la fin du radical verbal.
Ces doubles ou triples dérivations s'effectuent toujours dans un ordre précis :


(1)
Prépositionnel + Passif
suffixe : -IWA, -ILWA, -ALIWA
 
Prépositionnel + Prépositionnel
suffixe : -ELEA
 
Prépositionnel + Causatif
suffixe : -IDZA
 
Prépositionnel + Statif
suffixe : -IHA
 
Prépositionnel + Réciproque
suffixe : -IANA
 
(2)
Causatif + Passif
suffixe : -ESIWA, -ISEWA, -UDZIWA
 
Causatif + Prépositionnel
suffixe : -ESHEA, -ISHIA
 
Causatif + Statif
suffixe : -ESHEHA, -ISHIHA
 
Causatif + Prépositionnel + Passif
suffixe : -ESHEWA, -ISHIWA


 5. QUELQUES EXEMPLES : 








(1) Udzaa donner naissance
Udzalwa
Ps
être né
 
Udzalia
Prép
donner un enfant à
 
Udzaliwa
Prép+Ps
avoir un enfant (homme)
 
Udzalisa
Caus
accoucher une femme
 
Udzalikana
Stat
 être engendré par
 
(2) Uelea  être clair pour
Ueledza
Causfaire comprendre
 
Uelewa
Ps
comprendre, saisir
 
Ueledzewa
Caus+Ps
se faire expliquer
 
(3) Ufanya faire
Ufanyiwa
Ps
être fait, fabriqué
 
Ufanyia
Prép
faire pour
 
Ufanyishiha
Prép+Stat
être faisable, se faire
 
Ufanyisa
Caus
faire faire
 
Ufanyisiwa
Caus+Ps
avoir fait faire
 
(4) Ufurahi  se réjouir, être content
Ufurahisha
Caus
faire plaisir
 
Ufereshea
Caus+Prép
féliciter, congratuler
 
Ufereshewa
Caus+Prép+Ps
être félicité
 
(5) Ujiva  contenter, être agréable
Ujivia
Prép
plaire à, être agréable à
 
Ujiviwa
Prép+Ps
être content
 
Ujividza
Prép+Caus
faire plaisir à
 
(6) Ujua savoir, connaître
Ujulwa
Ps
être connu
 
Ujudza
Caus
informer, faire savoir
 
Ujudziwa
Caus+Ps
être informé, prévenu
 
Ujidzana
Réc
s'informer l'un l'autre
 
Ujiliana
Prép+Réc
faire connaissance
 
Ujilihana
Stat
être connu
 
(7) Uona voir
Uonesa
Caus
faire voir
 
Uonea
Prép
mépriser, dédaigner
 
Uonewa
Prép+Ps
être méprisé, dédaigné
 
Uonana
Réc
se voir l'un l'autre
 
Uonehana
Stat
se voir, être visible
 
(8) Uv̄endza aimer
Uv̄endzewaPs
être aimé
 
Uv̄endzelea
Prép+Prépfavoriser, avantager
 
Uv̄endzelewa
Prép+Prép+Ps
être favorisé
 
Uv̄endzesa
Caus
plaire
 
Uv̄endzana
Réc
s'aimer l'un l'autre


Ceci n'est qu'un bref aperçu du phénomène de dérivation. Nous allons consacrer les 6 prochains chapitres à l'étude détaillée de ces formes verbales dérivées.


Chapitre précédentChapitre suivantTable des matières |  | prendre | com | prendre | ap | prendre | sur | prendre | re | prendre |  | En shimaore, la dérivation verbale a pour résultat de modifier, non seulement le sens du verbe, mais aussi son emploi grammatical dans la phrase. |  | manger | être | mangé | être | mangeable | faire | manger | faire à | manger à / pour | se | manger | 1. La forme PASSIVEsuffixe  -WA | 2. La forme STATIVEsuffixe  -HA | Exemple type :
URUMA = employer
-> URUMWA = être employé | Exemple type :
UPASUA = casser
-> UPASUHA = se fendre, être cassable | 3. La forme PRÉPOSITIONNELLEsuffixe  -IA, -EA | 4. La forme CAUSATIVE : suffixe-ISA, -ESA, -IDZA, -EDZA, -ISHA, -ESHA | Exemple type :
ULISHA = laisser
-> ULISHIA = laisser à, pour | Exemple type :
ULA = manger
-> ULISA = nourrir, faire manger | 5. La forme RÉCIPROQUEsuffixe  -ANA | 6. La forme RÉVERSIVE EXTRACTIVEsuffixe  -UA, -OA | Exemple type :
USAIDIA = aider
-> USAIDIANA = s'entraider | Exemple type :
UFUNGA = lier
-> UFUNGUA = délier | (1) | Prépositionnel + Passif | suffixe : -IWA, -ILWA, -ALIWA |  | Prépositionnel + Prépositionnel | suffixe : -ELEA |  | Prépositionnel + Causatif | suffixe : -IDZA |  | Prépositionnel + Statif | suffixe : -IHA |  | Prépositionnel + Réciproque | suffixe : -IANA |  | (2) | Causatif + Passif | suffixe : -ESIWA, -ISEWA, -UDZIWA |  | Causatif + Prépositionnel | suffixe : -ESHEA, -ISHIA |  | Causatif + Statif | suffixe : -ESHEHA, -ISHIHA |  | Causatif + Prépositionnel + Passif | suffixe : -ESHEWA, -ISHIWA | (1) Udzaa donner naissance | Udzalwa | Ps | être né |  | Udzalia | Prép | donner un enfant à |  | Udzaliwa | Prép+Ps | avoir un enfant (homme) |  | Udzalisa | Caus | accoucher une femme |  | Udzalikana | Stat | être engendré par |  | (2) Uelea  être clair pour | Ueledza | Caus | faire comprendre |  | Uelewa | Ps | comprendre, saisir |  | Ueledzewa | Caus+Ps | se faire expliquer |  | (3) Ufanya faire | Ufanyiwa | Ps | être fait, fabriqué |  | Ufanyia | Prép | faire pour |  | Ufanyishiha | Prép+Stat | être faisable, se faire |  | Ufanyisa | Caus | faire faire |  | Ufanyisiwa | Caus+Ps | avoir fait faire |  | (4) Ufurahi  se réjouir, être content | Ufurahisha | Caus | faire plaisir |  | Ufereshea | Caus+Prép | féliciter, congratuler |  | Ufereshewa | Caus+Prép+Ps | être félicité |  | (5) Ujiva  contenter, être agréable | Ujivia | Prép | plaire à, être agréable à |  | Ujiviwa | Prép+Ps | être content |  | Ujividza | Prép+Caus | faire plaisir à |  | (6) Ujua savoir, connaître | Ujulwa | Ps | être connu |  | Ujudza | Caus | informer, faire savoir |  | Ujudziwa | Caus+Ps | être informé, prévenu |  | Ujidzana | Réc | s'informer l'un l'autre |  | Ujiliana | Prép+Réc | faire connaissance |  | Ujilihana | Stat | être connu |  | (7) Uona voir | Uonesa | Caus | faire voir |  | Uonea | Prép | mépriser, dédaigner |  | Uonewa | Prép+Ps | être méprisé, dédaigné |  | Uonana | Réc | se voir l'un l'autre |  | Uonehana | Stat | se voir, être visible |  | (8) Uv̄endza aimer | Uv̄endzewa | Ps | être aimé |  | Uv̄endzelea | Prép+Prép | favoriser, avantager |  | Uv̄endzelewa | Prép+Prép+Ps | être favorisé |  | Uv̄endzesa | Caus | plaire |  | Uv̄endzana | Réc | s'aimer l'un l'autre | Chapitre précédent | Chapitre suivant | Table des matières
 | prendre
com | prendre
ap | prendre
sur | prendre
re | prendre
 | En shimaore, la dérivation verbale a pour résultat de modifier, non seulement le sens du verbe, mais aussi son emploi grammatical dans la phrase.
 | manger
être | mangé
être | mangeable
faire | manger
faire à | manger à / pour
se | manger
1. La forme PASSIVEsuffixe  -WA | 2. La forme STATIVEsuffixe  -HA
Exemple type :
URUMA = employer
-> URUMWA = être employé | Exemple type :
UPASUA = casser
-> UPASUHA = se fendre, être cassable
3. La forme PRÉPOSITIONNELLEsuffixe  -IA, -EA | 4. La forme CAUSATIVE : suffixe-ISA, -ESA, -IDZA, -EDZA, -ISHA, -ESHA
Exemple type :
ULISHA = laisser
-> ULISHIA = laisser à, pour | Exemple type :
ULA = manger
-> ULISA = nourrir, faire manger
5. La forme RÉCIPROQUEsuffixe  -ANA | 6. La forme RÉVERSIVE EXTRACTIVEsuffixe  -UA, -OA
Exemple type :
USAIDIA = aider
-> USAIDIANA = s'entraider | Exemple type :
UFUNGA = lier
-> UFUNGUA = délier
(1) | Prépositionnel + Passif | suffixe : -IWA, -ILWA, -ALIWA
 | Prépositionnel + Prépositionnel | suffixe : -ELEA
 | Prépositionnel + Causatif | suffixe : -IDZA
 | Prépositionnel + Statif | suffixe : -IHA
 | Prépositionnel + Réciproque | suffixe : -IANA

(2) | Causatif + Passif | suffixe : -ESIWA, -ISEWA, -UDZIWA
 | Causatif + Prépositionnel | suffixe : -ESHEA, -ISHIA
 | Causatif + Statif | suffixe : -ESHEHA, -ISHIHA
 | Causatif + Prépositionnel + Passif | suffixe : -ESHEWA, -ISHIWA
(1) Udzaa donner naissance | Udzalwa | Ps | être né
 | Udzalia | Prép | donner un enfant à
 | Udzaliwa | Prép+Ps | avoir un enfant (homme)
 | Udzalisa | Caus | accoucher une femme
 | Udzalikana | Stat | être engendré par

(2) Uelea  être clair pour | Ueledza | Caus | faire comprendre
 | Uelewa | Ps | comprendre, saisir
 | Ueledzewa | Caus+Ps | se faire expliquer

(3) Ufanya faire | Ufanyiwa | Ps | être fait, fabriqué
 | Ufanyia | Prép | faire pour
 | Ufanyishiha | Prép+Stat | être faisable, se faire
 | Ufanyisa | Caus | faire faire
 | Ufanyisiwa | Caus+Ps | avoir fait faire

(4) Ufurahi  se réjouir, être content | Ufurahisha | Caus | faire plaisir
 | Ufereshea | Caus+Prép | féliciter, congratuler
 | Ufereshewa | Caus+Prép+Ps | être félicité

(5) Ujiva  contenter, être agréable | Ujivia | Prép | plaire à, être agréable à
 | Ujiviwa | Prép+Ps | être content
 | Ujividza | Prép+Caus | faire plaisir à

(6) Ujua savoir, connaître | Ujulwa | Ps | être connu
 | Ujudza | Caus | informer, faire savoir
 | Ujudziwa | Caus+Ps | être informé, prévenu
 | Ujidzana | Réc | s'informer l'un l'autre
 | Ujiliana | Prép+Réc | faire connaissance
 | Ujilihana | Stat | être connu

(7) Uona voir | Uonesa | Caus | faire voir
 | Uonea | Prép | mépriser, dédaigner
 | Uonewa | Prép+Ps | être méprisé, dédaigné
 | Uonana | Réc | se voir l'un l'autre
 | Uonehana | Stat | se voir, être visible

(8) Uv̄endza aimer | Uv̄endzewa | Ps | être aimé
 | Uv̄endzelea | Prép+Prép | favoriser, avantager
 | Uv̄endzelewa | Prép+Prép+Ps | être favorisé
 | Uv̄endzesa | Caus | plaire
 | Uv̄endzana | Réc | s'aimer l'un l'autre
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 36,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 36.",
    content: `

Chapitre 37 - La Forme Passive

En français, il est courant de mettre un verbe à la voix passive en le faisant précéder de l'auxiliaire "être", le verbe principal se mettant alors au participe passé.

Ainsi :
Il fait
-> Il est fait
Il prend
-> Il est pris
 
Il frappe
-> Il est frappé
Il bat
-> Il est battu


On obtient le même résultat en shimaore en remplaçant la terminaison  -A  du verbe par le suffixe  -WA
(ou -IWA, -LWA, -LIWA, -OLWA).

(1) Lorsque le radical verbal se termine par une consonne : -A remplacé par le suffixe  -WA :


Uɓala
fermer
-> Uɓalwa
être fermé
Uhira
appeler
-> Uhirwa
être appelé (par qq'un)
 
-> Uhiriwa
être nommé, s'appeler
Uiɓa
voler
-> Uiɓwa
être volé (chose)
 
-> Uiɓiwaêtre volé (parlant de qq'un)
Ulisha
laisser-> Ulishwa
être laissé
Uliv̄a
payer 
-> Uliv̄wa
être payé
Ulola
marier
-> Ulolowa
être épousée
Urema
frapper
-> Uremwa
être frappé
Uruma
employer
-> Urumwa
être employé
Ushindra
battre, gagner
-> Ushindrwa
être battu, vaincu
Usika
attraper
-> Usikwa
être attrapé



(2) Lorsque le radical verbal se termine par une voyelle : -A remplacé par -LWA  ou -LIWA :


Udzaa
accoucher
-> Udzalwa
être né, naître
Ufungua
détacher, délier
-> Ufunguliwa
divorcer, être répudiée
Ujua
savoir, connaître
-> Ujuliwa
être connu
Urongoa
dire, parler
-> Urongolwa
être dit
Utria
mettre
-> Utrilwa
être mis
Utsahua
choisir
-> Utsahulwa
être choisi



(3) Les verbes d'origine arabe terminés en  -I  et  -U  prennent le suffixe  -IWA  :


Uɓadili
changer
-> Uɓadiliwa
être changé
Uhetsi
déposer, laisser
-> Uhetsiwa
être déposé
Uruhusu
autoriser
-> Uruhusiwa
être autorisé



(4) Cas des verbes monosyllabiques : suffixe  -IWA  ou  -OLWA  :


Ula
manger
-> Uliwa
être mangé
Unwa
boire
-> Unolwa
être bu
Urwa
piler
-> Urolwa
être pilé
Uv̄a
donner
-> Uv̄olwa
être donné



REMARQUE : 
Certains verbes ont déjà un sens passif dans leur forme simple :

Ulemewa
être fatigué
Ulewa
être ivre
Uwa
tomber, être tombé



EXEMPLES : 

Shahula yontsi piya iliwa.
Toute la nourriture a été mangée.
Mwana av̄olwa zawadi.
On a donné un cadeau à l'enfant. (L'enfant a été donné...)
Aremwa na ɓaɓahe.
Il a été battu par son père.
Waye uhiriwa Ali.
Il s'appelle Ali. (Il est appelé Ali.)
Duka lahe uhiriwa "Océane Fashion".
Sa boutique s'appelle "Océane Fashion"
Tsirongolwa amba Fatima alolwa.
On m'a dit que Fatima s'est mariée.(J'ai été dit que Fatima a été épousée.)


VOCABULAIRE


Uɗuha
vieillir
Ukohola
tousser
Ueledza
expliquer
Ulowa
être trempé
Uelewa
comprendre
Unahana
se souvenir
Uhiɓa
voler
Uzihira
soigner
Uhodza
faire mal, blesser
Uziliya
refroidir
Ukodza
avoir mal, souffrir
Uzima
éteindre


EXERCICES

EXERCICE 1 : Traduisez en shimaore :



La porte a été fermée.
Tout le plat de bananes vertes a été mangé.
Le mauvais enfant a été frappé.
La chèvre a été attrapée.
Le bébé est né.
La nourriture sera mangée par les invités.
On donnera les vieux vêtements aux pauvres.
Ma sœur a été épousée.
Je m'appelle Ali.
Il s'appelle Said.
Les portes de la voiture sont fermées par le chauffeur.
Les poulets ont été attrapés par les enfants.
Le sac a été laissé par l'homme blanc.
Le manioc a été pilé par les femmes au village.
La lettre a été écrite par ma petite amie.



EXERCICE 2 : Traduisez en français :



Wawe uhiriwa mbani ? - Wami uhiriwa Muhamadi.
Umuzungu ahiɓiwa nyumbani jana usiku.
Mukoɓa muɓole uhiɓwa na mwidzi.
Puhu lisikwa na paha.
Marike zini tsiv̄olwazo na ɓaɓangu.
Zama za hale wana zioni wakoremwa na fundi likoli.
Fi ɓole ini isikwa na mulozi.
Mbwa muhali iremwa na muzungu.
Mwana zaza adzalwa mwaha jana.
Shahula iliwa piya na mbwa.




Chapitre précédentChapitre suivantTable des matières | Ainsi : | Il fait | -> Il est fait | Il prend | -> Il est pris |  | Il frappe | -> Il est frappé | Il bat | -> Il est battu | Uɓala | fermer | -> Uɓalwa | être fermé | Uhira | appeler | -> Uhirwa | être appelé (par qq'un) |  | -> Uhiriwa | être nommé, s'appeler | Uiɓa | voler | -> Uiɓwa | être volé (chose) |  | -> Uiɓiwa | être volé (parlant de qq'un) | Ulisha | laisser | -> Ulishwa | être laissé | Uliv̄a | payer | -> Uliv̄wa | être payé | Ulola | marier | -> Ulolowa | être épousée | Urema | frapper | -> Uremwa | être frappé | Uruma | employer | -> Urumwa | être employé | Ushindra | battre, gagner | -> Ushindrwa | être battu, vaincu | Usika | attraper | -> Usikwa | être attrapé | Udzaa | accoucher | -> Udzalwa | être né, naître | Ufungua | détacher, délier | -> Ufunguliwa | divorcer, être répudiée | Ujua | savoir, connaître | -> Ujuliwa | être connu | Urongoa | dire, parler | -> Urongolwa | être dit | Utria | mettre | -> Utrilwa | être mis | Utsahua | choisir | -> Utsahulwa | être choisi | Uɓadili | changer | -> Uɓadiliwa | être changé | Uhetsi | déposer, laisser | -> Uhetsiwa | être déposé | Uruhusu | autoriser | -> Uruhusiwa | être autorisé | Ula | manger | -> Uliwa | être mangé | Unwa | boire | -> Unolwa | être bu | Urwa | piler | -> Urolwa | être pilé | Uv̄a | donner | -> Uv̄olwa | être donné | Ulemewa | être fatigué | Ulewa | être ivre | Uwa | tomber, être tombé | Shahula yontsi piya iliwa. | Toute la nourriture a été mangée. | Mwana av̄olwa zawadi. | On a donné un cadeau à l'enfant. (L'enfant a été donné...) | Aremwa na ɓaɓahe. | Il a été battu par son père. | Waye uhiriwa Ali. | Il s'appelle Ali. (Il est appelé Ali.) | Duka lahe uhiriwa "Océane Fashion". | Sa boutique s'appelle "Océane Fashion" | Tsirongolwa amba Fatima alolwa. | On m'a dit que Fatima s'est mariée.(J'ai été dit que Fatima a été épousée.) | Uɗuha | vieillir | Ukohola | tousser | Ueledza | expliquer | Ulowa | être trempé | Uelewa | comprendre | Unahana | se souvenir | Uhiɓa | voler | Uzihira | soigner | Uhodza | faire mal, blesser | Uziliya | refroidir | Ukodza | avoir mal, souffrir | Uzima | éteindre | Chapitre précédent | Chapitre suivant | Table des matières
Ainsi : | Il fait | -> Il est fait | Il prend | -> Il est pris
 | Il frappe | -> Il est frappé | Il bat | -> Il est battu
Uɓala | fermer | -> Uɓalwa | être fermé
Uhira | appeler | -> Uhirwa | être appelé (par qq'un)
 | -> Uhiriwa | être nommé, s'appeler
Uiɓa | voler | -> Uiɓwa | être volé (chose)
 | -> Uiɓiwa | être volé (parlant de qq'un)
Ulisha | laisser | -> Ulishwa | être laissé
Uliv̄a | payer | -> Uliv̄wa | être payé
Ulola | marier | -> Ulolowa | être épousée
Urema | frapper | -> Uremwa | être frappé
Uruma | employer | -> Urumwa | être employé
Ushindra | battre, gagner | -> Ushindrwa | être battu, vaincu
Usika | attraper | -> Usikwa | être attrapé
Udzaa | accoucher | -> Udzalwa | être né, naître
Ufungua | détacher, délier | -> Ufunguliwa | divorcer, être répudiée
Ujua | savoir, connaître | -> Ujuliwa | être connu
Urongoa | dire, parler | -> Urongolwa | être dit
Utria | mettre | -> Utrilwa | être mis
Utsahua | choisir | -> Utsahulwa | être choisi
Uɓadili | changer | -> Uɓadiliwa | être changé
Uhetsi | déposer, laisser | -> Uhetsiwa | être déposé
Uruhusu | autoriser | -> Uruhusiwa | être autorisé
Ula | manger | -> Uliwa | être mangé
Unwa | boire | -> Unolwa | être bu
Urwa | piler | -> Urolwa | être pilé
Uv̄a | donner | -> Uv̄olwa | être donné
Ulemewa | être fatigué
Ulewa | être ivre
Uwa | tomber, être tombé
Shahula yontsi piya iliwa. | Toute la nourriture a été mangée.
Mwana av̄olwa zawadi. | On a donné un cadeau à l'enfant. (L'enfant a été donné...)
Aremwa na ɓaɓahe. | Il a été battu par son père.
Waye uhiriwa Ali. | Il s'appelle Ali. (Il est appelé Ali.)
Duka lahe uhiriwa "Océane Fashion". | Sa boutique s'appelle "Océane Fashion"
Tsirongolwa amba Fatima alolwa. | On m'a dit que Fatima s'est mariée.(J'ai été dit que Fatima a été épousée.)
Uɗuha | vieillir | Ukohola | tousser
Ueledza | expliquer | Ulowa | être trempé
Uelewa | comprendre | Unahana | se souvenir
Uhiɓa | voler | Uzihira | soigner
Uhodza | faire mal, blesser | Uziliya | refroidir
Ukodza | avoir mal, souffrir | Uzima | éteindre
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 37,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 37.",
    content: `

Chapitre 38 - La Forme Stative

Un verbe à la forme stative est assez semblable par le sens à un verbe à la forme passive, sauf qu'il ne dit pas par qui ou par quoi l'action a été faite. Il implique invariablement un état résultant ou latent, d'où le nom de STATIF, ou de FORME STATIVE, donné à cette dérivation.
EXEMPLE : 

Comparez :
Mwiri upasuwa na mwanamtsa unu
= L'arbre a été cassé par ce jeune
forme passive
Mwiri upasuha
= L'arbre est cassé
forme stative


La dérivation stative a pour autre particularité de faire passer un verbe de la catégorie transitive à la catégorie intransitive, c'est-à-dire d'empêcher le verbe dérivé d'avoir un complément d'objet direct. En français, ce changement de catégorie s'effectue en plaçant un pronom réfléchi devant le verbe afin d'obtenir un verbe pronominal intransitif.
EXEMPLE : 

Upasua
fendre, casser (qq chose)
Upasuha
se fendre, se casser
Ufundra
instruire, enseigner (qq'un)
Ufundriha
s'instruire


La dérivation stative s'obtient en remplaçant la terminaison  -A du radical par le suffixe  -HA (ou -IHA,
-EHA). Certains verbes prennent la terminaison  -NA après le suffixe  -HA.

 1. QUELQUES VERBES A LA FORME STATIVE : 


Lorsque le radical verbal se termine par une consonne :
(a) si la voyelle du radical est  A, I ou U, la finale -A est remplacée par le suffixe  -IHA

Uɓala
fermer
-> Uɓaliha
se fermer
Udanganya
tromper
-> Udanganyiha
se tromper
Ufanyisa
faire faire
-> Ufanyishiha
être faisable
Ufundra
instruire
-> Ufundriha
s'instruire, étudier
Ula
manger
-> Uliha
être mangeable, se manger
Ulatsa
jeter, perdre
-> Ulatsiha
se perdre, s'égarer
Upara
avoir, obtenir
-> Uparihana
se trouver


(b) si la voyelle du radical est  E ou O, la finale -A est remplacée par le suffixe  -EHA

Uengedza
 augmenter
-> Uengedzeha
s'ajouter, s'élargir
Umenya
détruire
-> Umenyeha
s'abîmer, tomber en panne
Unwa
boire
-> Unweha
être potable, se boire
Uona
voir
-> Uonehana
être visible


Lorsque le radical verbal se termine par une voyelle : -A est remplacé par  -HA :

Uɓua
ouvrir
-> Uɓuha
s'ouvrir
Uenea
se répandre
-> Ueneha
être lépreux, avoir la lèpre
Upasua
fendre
-> Upasuha
se casser
Uvua
brûler
-> Uvuha
se brûler
Uv̄ungua
diminuer
-> Uv̄unguha
diminuer, se réduire



REMARQUES : 


Certains verbes statifs ne sont dérivés d'aucune forme simple. C'est le cas pour :

Uɗuha
vieillir
Ugauha
changer
Ukamiliha
être complet, en pleine possession de ses moyens
Ulamuha
se réveiller, se déchaîner
Umaruha
se réveiller, sursauter
Usikitiha
avoir le cœur serré, souffrir


Quelques verbes, terminés en  -HA n'ont rien à voir avec la forme stative :

Uhangiha
écrire
Ulaliha
inviter, lancer une invitation publique
Upiha
cuisiner, faire la cuisine
Utsaha
vouloir
Utseha
rire, se moquer
Uv̄eleha
envoyer, expédier




 2. EXEMPLES D'EMPLOI : 


1. Gari langu umenyeha daima.
Ma voiture tombe toujours en panne.
2. Marikabu ionehana oho baharini.
Le bateau était visible au loin sur la mer.
3. Trongo iyo kaitsofanyishiha.
Ça ne pourra pas se faire.
4. Narifundrihe shimaore.
Instruisons-nous en shimaore.


VOCABULAIRE


bako
bonhomme
ntseso / tseso
rire
kasia
pagaie, rame
ntshari / tshari
achards
malaika
ange
nye
foie
masala
épices
tsindzi
sommeil
nahuda
capitaine
tsumu
jeûne
nanga
ancre
vule
grillade, pique-nique



Chapitre précédentChapitre suivantTable des matières | Mwiri upasuwa na mwanamtsa unu | = L'arbre a été cassé par ce jeune | forme passive | Mwiri upasuha | = L'arbre est cassé | forme stative | Upasua | fendre, casser (qq chose) | Upasuha | se fendre, se casser | Ufundra | instruire, enseigner (qq'un) | Ufundriha | s'instruire | Uɓala | fermer | -> Uɓaliha | se fermer | Udanganya | tromper | -> Udanganyiha | se tromper | Ufanyisa | faire faire | -> Ufanyishiha | être faisable | Ufundra | instruire | -> Ufundriha | s'instruire, étudier | Ula | manger | -> Uliha | être mangeable, se manger | Ulatsa | jeter, perdre | -> Ulatsiha | se perdre, s'égarer | Upara | avoir, obtenir | -> Uparihana | se trouver | Uengedza | augmenter | -> Uengedzeha | s'ajouter, s'élargir | Umenya | détruire | -> Umenyeha | s'abîmer, tomber en panne | Unwa | boire | -> Unweha | être potable, se boire | Uona | voir | -> Uonehana | être visible | Uɓua | ouvrir | -> Uɓuha | s'ouvrir | Uenea | se répandre | -> Ueneha | être lépreux, avoir la lèpre | Upasua | fendre | -> Upasuha | se casser | Uvua | brûler | -> Uvuha | se brûler | Uv̄ungua | diminuer | -> Uv̄unguha | diminuer, se réduire | Uɗuha | vieillir | Ugauha | changer | Ukamiliha | être complet, en pleine possession de ses moyens | Ulamuha | se réveiller, se déchaîner | Umaruha | se réveiller, sursauter | Usikitiha | avoir le cœur serré, souffrir | Uhangiha | écrire | Ulaliha | inviter, lancer une invitation publique | Upiha | cuisiner, faire la cuisine | Utsaha | vouloir | Utseha | rire, se moquer | Uv̄eleha | envoyer, expédier | 1. Gari langu umenyeha daima. | Ma voiture tombe toujours en panne. | 2. Marikabu ionehana oho baharini. | Le bateau était visible au loin sur la mer. | 3. Trongo iyo kaitsofanyishiha. | Ça ne pourra pas se faire. | 4. Narifundrihe shimaore. | Instruisons-nous en shimaore. | bako | bonhomme | ntseso / tseso | rire | kasia | pagaie, rame | ntshari / tshari | achards | malaika | ange | nye | foie | masala | épices | tsindzi | sommeil | nahuda | capitaine | tsumu | jeûne | nanga | ancre | vule | grillade, pique-nique | Chapitre précédent | Chapitre suivant | Table des matières
Mwiri upasuwa na mwanamtsa unu | = L'arbre a été cassé par ce jeune | forme passive
Mwiri upasuha | = L'arbre est cassé | forme stative
Upasua | fendre, casser (qq chose) | Upasuha | se fendre, se casser
Ufundra | instruire, enseigner (qq'un) | Ufundriha | s'instruire
Uɓala | fermer | -> Uɓaliha | se fermer
Udanganya | tromper | -> Udanganyiha | se tromper
Ufanyisa | faire faire | -> Ufanyishiha | être faisable
Ufundra | instruire | -> Ufundriha | s'instruire, étudier
Ula | manger | -> Uliha | être mangeable, se manger
Ulatsa | jeter, perdre | -> Ulatsiha | se perdre, s'égarer
Upara | avoir, obtenir | -> Uparihana | se trouver
Uengedza | augmenter | -> Uengedzeha | s'ajouter, s'élargir
Umenya | détruire | -> Umenyeha | s'abîmer, tomber en panne
Unwa | boire | -> Unweha | être potable, se boire
Uona | voir | -> Uonehana | être visible
Uɓua | ouvrir | -> Uɓuha | s'ouvrir
Uenea | se répandre | -> Ueneha | être lépreux, avoir la lèpre
Upasua | fendre | -> Upasuha | se casser
Uvua | brûler | -> Uvuha | se brûler
Uv̄ungua | diminuer | -> Uv̄unguha | diminuer, se réduire
Uɗuha | vieillir
Ugauha | changer
Ukamiliha | être complet, en pleine possession de ses moyens
Ulamuha | se réveiller, se déchaîner
Umaruha | se réveiller, sursauter
Usikitiha | avoir le cœur serré, souffrir
Uhangiha | écrire
Ulaliha | inviter, lancer une invitation publique
Upiha | cuisiner, faire la cuisine
Utsaha | vouloir
Utseha | rire, se moquer
Uv̄eleha | envoyer, expédier
1. Gari langu umenyeha daima. | Ma voiture tombe toujours en panne.
2. Marikabu ionehana oho baharini. | Le bateau était visible au loin sur la mer.
3. Trongo iyo kaitsofanyishiha. | Ça ne pourra pas se faire.
4. Narifundrihe shimaore. | Instruisons-nous en shimaore.
bako | bonhomme | ntseso / tseso | rire
kasia | pagaie, rame | ntshari / tshari | achards
malaika | ange | nye | foie
masala | épices | tsindzi | sommeil
nahuda | capitaine | tsumu | jeûne
nanga | ancre | vule | grillade, pique-nique
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 38,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 38.",
    content: `

Chapitre 39 - La Forme Prépositionnelle

La dérivation prépositionnelle a une valeur attributive, instrumentale ou locative.
Elle permet aussi à un verbe transitif, c'est-à-dire un verbe qui possède déjà un complément d'objet direct, de recevoir un 2ème complément (ou "complément d'attribution"). Celui-ci sera alors présent en tant qu'infixe objet à l'intérieur du verbe, et éventuellement doublé par le nom complément d'attribution qui sera placé entre le verbe et le complément d'objet direct.
En français le nom attribut est introduit par une préposition, d'où le terme "PRÉPOSITIONNEL" ou "FORME PRÉPOSITIONNELLE" retenu pour décrire ce type de dérivation. Certains utilisent le terme "APPLICATIF".
La dérivation prépositionnelle se caractérise par l'adjonction du suffixe  -IA  (ou -EA, -LIA, -LEA, -SHIA, -SHEA), à la fin du radical verbal, en remplacement de la terminaison  -A.

 1. QUELQUES VERBES A LA FORME PRÉPOSITIONNELLE : 


Lorsque  le radical verbal se termine par une consonne + -A :
(a) si la voyelle du radical est  A, I ou U, la finale -A est remplacée par le suffixe  -IA :


Uamba
dire
-> Uambia
dire à
Ufanya
faire
-> Ufanyia
faire pour
Ufunga
attacher, lier
-> Ufungia
se marier (l'homme)
Ulisha 
laisser
-> Ulishia
laisser à
Upara
trouver, obtenir
-> Uparia
trouver pour
Uruma
envoyer (qq'un)
-> Urumia
se servir de, utiliser
Uvinga
apporter
-> Uvingia
apporter à
Uvira
passer
-> Uviria
passer par
Uvutsa
jeter
-> Uvutsia
jeter à


(b) si la voyelle du radical est  E ou O, la finale -A est remplacée par le suffixe  -EA :

Ulela
élever (un enfant)
-> Ulelea
élever pour quelqu'un
Ulola
se marier
-> Ulolea
épouser (la fille de qq'un)
Urenga
prendre
-> Urengea
prendre à
Usoma
lire
-> Usomea
lire à
Usona
coudre
-> Usonea
coudre pour


Lorsque  le radical verbal se termine par  -HA :
(a) si la voyelle précédente est  A, I ou U,  -HA  est remplacée par le suffixe  -SHIA :


Uhangiha
écrire
-> Uhangishia
écrire à
Upiha
cuisiner
-> Upishia
cuisiner pour


(b) si la voyelle précédente est  E ou O,  -HA  est remplacée par le suffixe  -SHEA :


Uoha
griller, faire rôtir
-> Uoshea
faire griller pour
Utseha
rire
-> Utseshea
rire de, se moquer de
Uv̄eleha
envoyer
-> Uv̄eleshea
envoyer à


Lorsque le radical verbal se termine par une voyelle + -A :
(a) si la voyelle précédente est  A, I ou U, la finale  -A est remplacée par le suffixe  -LIA :


Uɓua
ouvrir
-> Uɓulia
ouvrir à
Udzaa
donner naissance
-> Udzalia
donner un enfant à
Ununua
acheter
-> Ununulia
acheter pour
Upua
enlever, arracher
-> Upulia
faire tomber
Utsahua
choisir
-> Utsahulia
choisir pour
Uv̄ahua
servir le repas
-> Uv̄ahulia
servir le repas à qq'un


(b) si la voyelle précédente est  E ou O, la finale  -A est remplacée par le suffixe  -LEA :


Uhea
monter
-> Uhelea
monter à
Urongoa
parler
-> Urongolea
parler pour, défendre


Les verbes d'origine arabe terminés en  -I et  -U prennent le préfixe  -IA :


Ukuɓali
être d'accord
-> Ukuɓalia
permettre à
Usalimu
saluer
-> Usalimia
saluer pour



REMARQUE : 
Certains verbes à radical non dérivé ont déjà une valeur prépositionnelle :



Uɓushuria
souhaiter
Ukia
entendre
Ungalia
regarder
Ungia
entrer
Umia
implorer, demander
Upashia
monter, s'embarquer
Usaidia
aider
Usikinia
plaindre, avoir pitié de
Utria
mettre
Uv̄a
donner
Uv̄oshea
dire, reprendre
Uvulikia
écouter, obéir



 2. EXEMPLES D'EMPLOI : 


1. Hangiha ɓarua !
Ecris une lettre !
2. Mwangishie ɓarua !
Ecris-lui une lettre !
3. Mwangishie mayaho ɓarua !
Ecris une lettre à ta mère !
4. Ɓua mulango !
Ouvre la porte !
5. Waɓulie mulango !
Ouvre-leur la porte !
6. Waɓulie wadjeni mulango !   
Ouvre la porte aux invités !
7. Asusoma shio.
Il lit un livre
8. Asumusomea munyahe shio.
Il lit un livre à son copain.
9. Niambie !
Dis-moi !
10. Mwambie !
Dis-lui !
11. Mwambie ɓaɓaho !
Dis(-le) à ton père !
12. Tsihuv̄oshea marahaɓa.
Je te remercie.
13. Halo ɓasi, pashia !
Allez donc, montez !
14. Risuviria Kombani.
Nous passons par Combani.
15. Tsimuɓushuriani mwaha mwema.
Je vous souhaite une bonne année.
16. Waye usonea mume wahe, wandzani wahe na wahe mwenyewe.
Elle coud pour son mari, pour ses amis et pour elle-même.


VOCABULAIRE


Mukabala, mi-
un endroit , des --
Mutsanga, mi-
le sable, une plage
Munyombeni (Cl 3)
un vent fort
Mutsao, mi-
un oreiller, des --
Muraba (Cl 3)
les toilettes
Muvuli, mi-
l'ombre, des --
Musaafu, mi-
le Livre Saint, des --
Muvumbi, mi-
une tornade, des --
Musingi, mi-
le fondement, les -- 
Muzia-kamba, mi-
un arc-en-ciel, des --
Mutihani, mi-
un examen, des --
Muzinga, mi-
un canon, des --


EXERCICES

EXERCICE 1 : Traduisez en shimaore :


Ecrivez-moi ! Salue ton père pour moi ! Fais-moi ce travail pour aujourd'hui ! Lis-moi cette lettre ! Dis-moi ton nom !  Elle écrit une lettre à son père,  elle lui enverra la lettre demain,   la femme cuisine pour son mari, il  permet à son petit frère de partir,  laisse-lui ce livre !  Mon père est entré à la maison, nous sommes passés par Mamoudzou, je vous écoute,  il s'est égaré en brousse,  ne te moque pas de lui !


EXERCICE 2 :  Traduisez en français :



Mama asumupishia mwanahe shahula ndzuzuri.
Av̄asa asumwambia amba shahula ya tayari.
Nitsohufanyia hazi iyo ha uharaka.
Atsomwangishia ɓuledi wahe ɓarua moja kula suku.
Niɓulie mulango wa gari.
Muzungu asuwasomea wana zioni shio ya shifarantsa.
Mwidzi mui amurengea nyombe zahe jana uku.
Tsitsohukuɓalia uendra Momoju meso.
Lishia masikini shahula ini.
Ahamadi av̄eleshea wadzaɗe wahe marike nyengi.
Tsihuv̄oshea marahaɓa.
Halo ɓasi, pashia gari ha uharaka !
Rongoa ɓasi, tsihuv̄ulishia.
Unisalimie Mayaho !
Niambie ukweli !




Chapitre précédentChapitre suivantTable des matières | Uamba | dire | -> Uambia | dire à | Ufanya | faire | -> Ufanyia | faire pour | Ufunga | attacher, lier | -> Ufungia | se marier (l'homme) | Ulisha | laisser | -> Ulishia | laisser à | Upara | trouver, obtenir | -> Uparia | trouver pour | Uruma | envoyer (qq'un) | -> Urumia | se servir de, utiliser | Uvinga | apporter | -> Uvingia | apporter à | Uvira | passer | -> Uviria | passer par | Uvutsa | jeter | -> Uvutsia | jeter à | Ulela | élever (un enfant) | -> Ulelea | élever pour quelqu'un | Ulola | se marier | -> Ulolea | épouser (la fille de qq'un) | Urenga | prendre | -> Urengea | prendre à | Usoma | lire | -> Usomea | lire à | Usona | coudre | -> Usonea | coudre pour | Uhangiha | écrire | -> Uhangishia | écrire à | Upiha | cuisiner | -> Upishia | cuisiner pour | Uoha | griller, faire rôtir | -> Uoshea | faire griller pour | Utseha | rire | -> Utseshea | rire de, se moquer de | Uv̄eleha | envoyer | -> Uv̄eleshea | envoyer à | Uɓua | ouvrir | -> Uɓulia | ouvrir à | Udzaa | donner naissance | -> Udzalia | donner un enfant à | Ununua | acheter | -> Ununulia | acheter pour | Upua | enlever, arracher | -> Upulia | faire tomber | Utsahua | choisir | -> Utsahulia | choisir pour | Uv̄ahua | servir le repas | -> Uv̄ahulia | servir le repas à qq'un | Uhea | monter | -> Uhelea | monter à | Urongoa | parler | -> Urongolea | parler pour, défendre | Ukuɓali | être d'accord | -> Ukuɓalia | permettre à | Usalimu | saluer | -> Usalimia | saluer pour | Uɓushuria | souhaiter | Ukia | entendre | Ungalia | regarder | Ungia | entrer | Umia | implorer, demander | Upashia | monter, s'embarquer | Usaidia | aider | Usikinia | plaindre, avoir pitié de | Utria | mettre | Uv̄a | donner | Uv̄oshea | dire, reprendre | Uvulikia | écouter, obéir | 1. Hangiha ɓarua ! | Ecris une lettre ! | 2. Mwangishie ɓarua ! | Ecris-lui une lettre ! | 3. Mwangishie mayaho ɓarua ! | Ecris une lettre à ta mère ! | 4. Ɓua mulango ! | Ouvre la porte ! | 5. Waɓulie mulango ! | Ouvre-leur la porte ! | 6. Waɓulie wadjeni mulango ! | Ouvre la porte aux invités ! | 7. Asusoma shio. | Il lit un livre | 8. Asumusomea munyahe shio. | Il lit un livre à son copain. | 9. Niambie ! | Dis-moi ! | 10. Mwambie ! | Dis-lui ! | 11. Mwambie ɓaɓaho ! | Dis(-le) à ton père ! | 12. Tsihuv̄oshea marahaɓa. | Je te remercie. | 13. Halo ɓasi, pashia ! | Allez donc, montez ! | 14. Risuviria Kombani. | Nous passons par Combani. | 15. Tsimuɓushuriani mwaha mwema. | Je vous souhaite une bonne année. | 16. Waye usonea mume wahe, wandzani wahe na wahe mwenyewe. | Elle coud pour son mari, pour ses amis et pour elle-même. | Mukabala, mi- | un endroit , des -- | Mutsanga, mi- | le sable, une plage | Munyombeni (Cl 3) | un vent fort | Mutsao, mi- | un oreiller, des -- | Muraba (Cl 3) | les toilettes | Muvuli, mi- | l'ombre, des -- | Musaafu, mi- | le Livre Saint, des -- | Muvumbi, mi- | une tornade, des -- | Musingi, mi- | le fondement, les -- | Muzia-kamba, mi- | un arc-en-ciel, des -- | Mutihani, mi- | un examen, des -- | Muzinga, mi- | un canon, des -- | Chapitre précédent | Chapitre suivant | Table des matières
Uamba | dire | -> Uambia | dire à
Ufanya | faire | -> Ufanyia | faire pour
Ufunga | attacher, lier | -> Ufungia | se marier (l'homme)
Ulisha | laisser | -> Ulishia | laisser à
Upara | trouver, obtenir | -> Uparia | trouver pour
Uruma | envoyer (qq'un) | -> Urumia | se servir de, utiliser
Uvinga | apporter | -> Uvingia | apporter à
Uvira | passer | -> Uviria | passer par
Uvutsa | jeter | -> Uvutsia | jeter à
Ulela | élever (un enfant) | -> Ulelea | élever pour quelqu'un
Ulola | se marier | -> Ulolea | épouser (la fille de qq'un)
Urenga | prendre | -> Urengea | prendre à
Usoma | lire | -> Usomea | lire à
Usona | coudre | -> Usonea | coudre pour
Uhangiha | écrire | -> Uhangishia | écrire à
Upiha | cuisiner | -> Upishia | cuisiner pour
Uoha | griller, faire rôtir | -> Uoshea | faire griller pour
Utseha | rire | -> Utseshea | rire de, se moquer de
Uv̄eleha | envoyer | -> Uv̄eleshea | envoyer à
Uɓua | ouvrir | -> Uɓulia | ouvrir à
Udzaa | donner naissance | -> Udzalia | donner un enfant à
Ununua | acheter | -> Ununulia | acheter pour
Upua | enlever, arracher | -> Upulia | faire tomber
Utsahua | choisir | -> Utsahulia | choisir pour
Uv̄ahua | servir le repas | -> Uv̄ahulia | servir le repas à qq'un
Uhea | monter | -> Uhelea | monter à
Urongoa | parler | -> Urongolea | parler pour, défendre
Ukuɓali | être d'accord | -> Ukuɓalia | permettre à
Usalimu | saluer | -> Usalimia | saluer pour
Uɓushuria | souhaiter
Ukia | entendre
Ungalia | regarder
Ungia | entrer
Umia | implorer, demander
Upashia | monter, s'embarquer
Usaidia | aider
Usikinia | plaindre, avoir pitié de
Utria | mettre
Uv̄a | donner
Uv̄oshea | dire, reprendre
Uvulikia | écouter, obéir
1. Hangiha ɓarua ! | Ecris une lettre !
2. Mwangishie ɓarua ! | Ecris-lui une lettre !
3. Mwangishie mayaho ɓarua ! | Ecris une lettre à ta mère !
4. Ɓua mulango ! | Ouvre la porte !
5. Waɓulie mulango ! | Ouvre-leur la porte !
6. Waɓulie wadjeni mulango ! | Ouvre la porte aux invités !
7. Asusoma shio. | Il lit un livre
8. Asumusomea munyahe shio. | Il lit un livre à son copain.
9. Niambie ! | Dis-moi !
10. Mwambie ! | Dis-lui !
11. Mwambie ɓaɓaho ! | Dis(-le) à ton père !
12. Tsihuv̄oshea marahaɓa. | Je te remercie.
13. Halo ɓasi, pashia ! | Allez donc, montez !
14. Risuviria Kombani. | Nous passons par Combani.
15. Tsimuɓushuriani mwaha mwema. | Je vous souhaite une bonne année.
16. Waye usonea mume wahe, wandzani wahe na wahe mwenyewe. | Elle coud pour son mari, pour ses amis et pour elle-même.
Mukabala, mi- | un endroit , des -- | Mutsanga, mi- | le sable, une plage
Munyombeni (Cl 3) | un vent fort | Mutsao, mi- | un oreiller, des --
Muraba (Cl 3) | les toilettes | Muvuli, mi- | l'ombre, des --
Musaafu, mi- | le Livre Saint, des -- | Muvumbi, mi- | une tornade, des --
Musingi, mi- | le fondement, les -- | Muzia-kamba, mi- | un arc-en-ciel, des --
Mutihani, mi- | un examen, des -- | Muzinga, mi- | un canon, des --
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 39,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 39.",
    content: `

Chapitre 40 - La Forme Causative

Cette forme correspond au français : faire faire. Par exemple : faire travailler, faire construire, faire comprendre (expliquer), faire apprendre (enseigner), faire manger (nourrir), etc..
Elle correspond aussi à la forme transitive de certains verbes intransitifs. Par exemple :
guérir (aller mieux) = forme intransitive,      guérir (soigner quelqu'un) = forme transitive.
La dérivation causative s'obtient en remplaçant la terminaison -A du radical par le suffixe :
-ISHA, -ESHA, -DZA, -IDZA, -EDZA, -ISA, -ESA, ou -OSA.

 1. QUELQUES VERBES A LA FORME CAUSATIVE : 


Suffixe -ISHA, -ESHA :


Uafiki
être d'accord
-> Uafikisha
réconcilier, pacifier
Ufahamu
comprendre
-> Ufahamisha
mettre en garde, avertir
Ufariki
décéder
-> Ufarikisha
désunir, séparer
Ufurahi
être content
-> Ufurahisha
faire plaisir
Ukopa
emprunter
-> Ukopesha
prêter
Ulazimu
devoir
-> Ulazimisha
obliger, forcer
Usikitiha
être mal à l'aise
-> Usikitishachagriner, toucher


Suffixe  -DZA, -IDZA, -EDZA :


Uelea
être clair
-> Ueledza
expliquer
Uhima
se lever
-> Umidza
lever qq'un
Ujaya
être plein
-> Ujadza
remplir
Ujua
savoir
-> Ujudza
prévenir, informer
Ulala
être couché
-> Uladza
coucher qq'un
Uliya
pleurer
-> Ulidza
faire pleurer
Uregea
revenir
-> Uregedza
faire revenir
Urengelea
être en ordre
-> Urengeledza
ranger, arranger
Usafiri
voyager
-> Usafiridza
faire voyager
Ushuka
descendre
-> Ushukidza
baisser, descendre
Uvua
brûler
-> Uvudza
faire brûler, allumer
Uv̄ungua
diminuer
-> Uv̄ungudza
diminuer qq chose, réduire


Suffixe -ISA, -ESA, -OSA :


Ufundra
instruire
-> Ufundrisa
enseigner
Uhoa
se laver
-> Uhosa
laver qq chose
Ukariɓu
être bienvenu
-> Ukariɓisa
accueillir
Uketsi
s'asseoir
-> Uketsisa
faire asseoir
Ula
manger
-> Ulisa
faire manger, nourrir
Unwa
boire
-> Unosa
faire boire
Uona
voir
-> Uonesa
montrer à
Upindra
s'habiller
-> Upindrisa
habiller qq'un
Usoma
lire, apprendre
-> Usomesa
enseigner
Uv̄endza
aimer
-> Uv̄endzesa
plaire
Uv̄ona
guérir
-> Uv̄onesa
guérir, soigner



REMARQUE : 
On trouve aussi quelques verbes dérivés à partir de noms ou d'adjectifs :



Amri
=  un ordre
-> Uamrisha
ordonner, autoriser
-engi
=  beaucoup
-> Uengedza
ajouter, augmenter
Hakika
=  une certitude
-> Uhakikisha
prouver
Tayari
=  prêt
-> Utayarisha
préparer



 2. EXEMPLES D'EMPLOI : 



1. Midza uwana !
Fais lever les enfants !
2. Nionese nyumba yaho !
Montre-moi ta maison !
3. Asuhosa mihono yahe.
Elle se lave les mains.
4. Tsimunosa maji mwanamtsa ule.
J'ai fait boire de l'eau à cet enfant.
5. Shukidza ithamani mwana pav̄i !
Baissez un peu le prix !



VOCABULAIRE


Uɓaguzi wa rangi
le racisme
Ukombozi
la libération
Uɓeɓeru
l'impérialisme
Ulemevu
la fatigue
Uɓinafsi
l'égoïsme
Ulevi
l'ivresse
Uɓishi
la plaisanterie
Umani
la dispute
Udhu 
les ablutions
Ushendzi
la sauvagerie
Ugangi
la sorcellerie
Uvundro
la puanteur


EXERCICES

EXERCICE 1 : Traduisez en shimaore :


Il a lavé ses vêtements, j'enseigne le français, elle a fait manger les enfants, rempli ce récipient d'eau, préviens tes parents, cela me fait plaisir, je regrette ton accident, ils accueillent leurs invités, elle couche les enfants de bonne heure, le docteur a guérit l'enfant malade, il faut le faire boire souvent, range ta chambre tous les matins, explique-moi ton affaire, il a fait pleurer sa petite sœur, prête-moi ton livre, elle n'a pas levé les enfants, ne m'oblige pas à te frapper, cette fille ne me plaît pas, il n'a pas encore allumé le feu ce matin.


EXERCICE 2 : Traduisez en français :



Risuhosa zimihono zatru.
Duktera uv̄onesa watru wengi.
Mama asumidza wana wahe.
Nionese shisiwa ya Maore !
Ladza uwana av̄asa !
Mwanamtsa atrilwa lapitali.
Atsov̄ona haraka.
Mama asulisa mwana zaza wahe.
Shukidza mwana pav̄i thamani ya zitru zaho.
Zia nihueledze !
Ahoso zisahani uisa ula yahe.
Nionese gari pia laho !
Mujudze ɓaɓaho amba mwanahe mutiti asukodza.
Regedza bulu.
Shio ini ueledza trongo nyengi.




Chapitre précédentChapitre suivantTable des matières | Uafiki | être d'accord | -> Uafikisha | réconcilier, pacifier | Ufahamu | comprendre | -> Ufahamisha | mettre en garde, avertir | Ufariki | décéder | -> Ufarikisha | désunir, séparer | Ufurahi | être content | -> Ufurahisha | faire plaisir | Ukopa | emprunter | -> Ukopesha | prêter | Ulazimu | devoir | -> Ulazimisha | obliger, forcer | Usikitiha | être mal à l'aise | -> Usikitisha | chagriner, toucher | Uelea | être clair | -> Ueledza | expliquer | Uhima | se lever | -> Umidza | lever qq'un | Ujaya | être plein | -> Ujadza | remplir | Ujua | savoir | -> Ujudza | prévenir, informer | Ulala | être couché | -> Uladza | coucher qq'un | Uliya | pleurer | -> Ulidza | faire pleurer | Uregea | revenir | -> Uregedza | faire revenir | Urengelea | être en ordre | -> Urengeledza | ranger, arranger | Usafiri | voyager | -> Usafiridza | faire voyager | Ushuka | descendre | -> Ushukidza | baisser, descendre | Uvua | brûler | -> Uvudza | faire brûler, allumer | Uv̄ungua | diminuer | -> Uv̄ungudza | diminuer qq chose, réduire | Ufundra | instruire | -> Ufundrisa | enseigner | Uhoa | se laver | -> Uhosa | laver qq chose | Ukariɓu | être bienvenu | -> Ukariɓisa | accueillir | Uketsi | s'asseoir | -> Uketsisa | faire asseoir | Ula | manger | -> Ulisa | faire manger, nourrir | Unwa | boire | -> Unosa | faire boire | Uona | voir | -> Uonesa | montrer à | Upindra | s'habiller | -> Upindrisa | habiller qq'un | Usoma | lire, apprendre | -> Usomesa | enseigner | Uv̄endza | aimer | -> Uv̄endzesa | plaire | Uv̄ona | guérir | -> Uv̄onesa | guérir, soigner | Amri | =  un ordre | -> Uamrisha | ordonner, autoriser | -engi | =  beaucoup | -> Uengedza | ajouter, augmenter | Hakika | =  une certitude | -> Uhakikisha | prouver | Tayari | =  prêt | -> Utayarisha | préparer | 1. Midza uwana ! | Fais lever les enfants ! | 2. Nionese nyumba yaho ! | Montre-moi ta maison ! | 3. Asuhosa mihono yahe. | Elle se lave les mains. | 4. Tsimunosa maji mwanamtsa ule. | J'ai fait boire de l'eau à cet enfant. | 5. Shukidza ithamani mwana pav̄i ! | Baissez un peu le prix ! | Uɓaguzi wa rangi | le racisme | Ukombozi | la libération | Uɓeɓeru | l'impérialisme | Ulemevu | la fatigue | Uɓinafsi | l'égoïsme | Ulevi | l'ivresse | Uɓishi | la plaisanterie | Umani | la dispute | Udhu | les ablutions | Ushendzi | la sauvagerie | Ugangi | la sorcellerie | Uvundro | la puanteur | Chapitre précédent | Chapitre suivant | Table des matières
Uafiki | être d'accord | -> Uafikisha | réconcilier, pacifier
Ufahamu | comprendre | -> Ufahamisha | mettre en garde, avertir
Ufariki | décéder | -> Ufarikisha | désunir, séparer
Ufurahi | être content | -> Ufurahisha | faire plaisir
Ukopa | emprunter | -> Ukopesha | prêter
Ulazimu | devoir | -> Ulazimisha | obliger, forcer
Usikitiha | être mal à l'aise | -> Usikitisha | chagriner, toucher
Uelea | être clair | -> Ueledza | expliquer
Uhima | se lever | -> Umidza | lever qq'un
Ujaya | être plein | -> Ujadza | remplir
Ujua | savoir | -> Ujudza | prévenir, informer
Ulala | être couché | -> Uladza | coucher qq'un
Uliya | pleurer | -> Ulidza | faire pleurer
Uregea | revenir | -> Uregedza | faire revenir
Urengelea | être en ordre | -> Urengeledza | ranger, arranger
Usafiri | voyager | -> Usafiridza | faire voyager
Ushuka | descendre | -> Ushukidza | baisser, descendre
Uvua | brûler | -> Uvudza | faire brûler, allumer
Uv̄ungua | diminuer | -> Uv̄ungudza | diminuer qq chose, réduire
Ufundra | instruire | -> Ufundrisa | enseigner
Uhoa | se laver | -> Uhosa | laver qq chose
Ukariɓu | être bienvenu | -> Ukariɓisa | accueillir
Uketsi | s'asseoir | -> Uketsisa | faire asseoir
Ula | manger | -> Ulisa | faire manger, nourrir
Unwa | boire | -> Unosa | faire boire
Uona | voir | -> Uonesa | montrer à
Upindra | s'habiller | -> Upindrisa | habiller qq'un
Usoma | lire, apprendre | -> Usomesa | enseigner
Uv̄endza | aimer | -> Uv̄endzesa | plaire
Uv̄ona | guérir | -> Uv̄onesa | guérir, soigner
Amri | =  un ordre | -> Uamrisha | ordonner, autoriser
-engi | =  beaucoup | -> Uengedza | ajouter, augmenter
Hakika | =  une certitude | -> Uhakikisha | prouver
Tayari | =  prêt | -> Utayarisha | préparer
1. Midza uwana ! | Fais lever les enfants !
2. Nionese nyumba yaho ! | Montre-moi ta maison !
3. Asuhosa mihono yahe. | Elle se lave les mains.
4. Tsimunosa maji mwanamtsa ule. | J'ai fait boire de l'eau à cet enfant.
5. Shukidza ithamani mwana pav̄i ! | Baissez un peu le prix !
Uɓaguzi wa rangi | le racisme | Ukombozi | la libération
Uɓeɓeru | l'impérialisme | Ulemevu | la fatigue
Uɓinafsi | l'égoïsme | Ulevi | l'ivresse
Uɓishi | la plaisanterie | Umani | la dispute
Udhu | les ablutions | Ushendzi | la sauvagerie
Ugangi | la sorcellerie | Uvundro | la puanteur
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 40,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 40.",
    content: `

Chapitre 41 - La Forme Réciproque

En français la réciprocité est marquée par l'utilisation d'un pronom réfléchi placé entre le pronom sujet et le verbe : me, te, se, nous, vous, se.

Par exemple :
se battre (l'un l'autre)
nous nous battons.
 
se disputer
vous vous disputez.
 
se suivre
Ils se suivent.


On obtient le même résultat en shimaore en remplaçant la voyelle finale  -A  du verbe par le suffixe : -ANA.

 1. QUELQUES VERBES A LA FORME RÉCIPROQUE : 



Uafiki
être d'accord
-> Uafikana
se mettre d'accord
Uɗunga
suivre
-> Uɗungana
se suivre
Ufana
avoir l'air
-> Ufanana
se ressembler
   (pas de forme simple)
-> Ugombana
se battre, se heurter
Ulawa
partir, quitter
-> Ulawana
se quitter
Uona
voir
-> Uonana
se voir
Upara
obtenir
-> Uparana
se rencontrer
Urema
frapper
-> Uremana
se frapper
Usaidia
aider
-> Usaidiana
s'entraider
Ushindra
pouvoir
-> Ushindrana
se disputer
Uv̄endza
aimer
-> Uv̄endzana
s'aimer



 2. EXEMPLES D'EMPLOI : 



1. Ritsowonana meso.
Nous nous verrons demain.
2. Abdu ashindrana na Saidi.
Abdou s'est disputé avec Saïd.
3. Watru-ɓaɓa waɗungana. 
Les hommes sont allés ensemble.



VOCABULAIRE


adabu
respect
mbia
noyau, cachet
dza
faim
nyora
soif
furaha
joie
range
couleur, peinture
kalite
sorte, qualité
ruhusa
permission
kweli
vérité
shida
paresse, difficulté
lakuru
cour
sirikali
gouvernement


EXERCICES

EXERCICE 1 :  Traduisez en shimaore :


Les amis se sont quittés, ces deux enfants se ressemblent, les hommes se sont disputés,  ils se mettront d'accord, vous vous verrez de temps en temps, les jeunes ne se sont pas rencontrés, les hommes s'entraident en brousse, dis aux enfants de ne pas se frapper, ces gens-là ne s'aiment pas, j'ai rencontré Saïd à Mamoudzou.


EXERCICE 2 : Traduisez en français :



Tsionana naye jana.
Wanatsa wale wasuremana pareni.
Zinyama ziɗungana malavuni.
Mwenyewe duka ashindrana na mwidzi.
Wana zioni uonana kilasini.
Ritsowonana ɗagoni.
Wasi usaidiana.
Ritsoangishiana mwahani.
Karitsoafikana ata suku moja.
Alawana na mutru-mushe wahe.




Chapitre précédentChapitre suivantTable des matières | Par exemple : | se battre (l'un l'autre) | nous nous battons. |  | se disputer | vous vous disputez. |  | se suivre | Ils se suivent. | Uafiki | être d'accord | -> Uafikana | se mettre d'accord | Uɗunga | suivre | -> Uɗungana | se suivre | Ufana | avoir l'air | -> Ufanana | se ressembler | (pas de forme simple) | -> Ugombana | se battre, se heurter | Ulawa | partir, quitter | -> Ulawana | se quitter | Uona | voir | -> Uonana | se voir | Upara | obtenir | -> Uparana | se rencontrer | Urema | frapper | -> Uremana | se frapper | Usaidia | aider | -> Usaidiana | s'entraider | Ushindra | pouvoir | -> Ushindrana | se disputer | Uv̄endza | aimer | -> Uv̄endzana | s'aimer | 1. Ritsowonana meso. | Nous nous verrons demain. | 2. Abdu ashindrana na Saidi. | Abdou s'est disputé avec Saïd. | 3. Watru-ɓaɓa waɗungana. | Les hommes sont allés ensemble. | adabu | respect | mbia | noyau, cachet | dza | faim | nyora | soif | furaha | joie | range | couleur, peinture | kalite | sorte, qualité | ruhusa | permission | kweli | vérité | shida | paresse, difficulté | lakuru | cour | sirikali | gouvernement | Chapitre précédent | Chapitre suivant | Table des matières
Par exemple : | se battre (l'un l'autre) | nous nous battons.
 | se disputer | vous vous disputez.
 | se suivre | Ils se suivent.
Uafiki | être d'accord | -> Uafikana | se mettre d'accord
Uɗunga | suivre | -> Uɗungana | se suivre
Ufana | avoir l'air | -> Ufanana | se ressembler
(pas de forme simple) | -> Ugombana | se battre, se heurter
Ulawa | partir, quitter | -> Ulawana | se quitter
Uona | voir | -> Uonana | se voir
Upara | obtenir | -> Uparana | se rencontrer
Urema | frapper | -> Uremana | se frapper
Usaidia | aider | -> Usaidiana | s'entraider
Ushindra | pouvoir | -> Ushindrana | se disputer
Uv̄endza | aimer | -> Uv̄endzana | s'aimer
1. Ritsowonana meso. | Nous nous verrons demain.
2. Abdu ashindrana na Saidi. | Abdou s'est disputé avec Saïd.
3. Watru-ɓaɓa waɗungana. | Les hommes sont allés ensemble.
adabu | respect | mbia | noyau, cachet
dza | faim | nyora | soif
furaha | joie | range | couleur, peinture
kalite | sorte, qualité | ruhusa | permission
kweli | vérité | shida | paresse, difficulté
lakuru | cour | sirikali | gouvernement
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 41,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 41.",
    content: `

Chapitre 42 - La Forme Réversive - Extractive

Un verbe à la forme réversive-extractive est caractérisé par le suffixe  -UA.
Bien que cette dérivation possède certainement une unité de sens au regard d'un locuteur mahorais, nous  avons choisi, dans l'optique d'un locuteur francophone, de distinguer les verbes à sens "réversif" des verbes à sens "extractif".

 1. VERBES À LA FORME RÉVERSIVE : 

La dérivation réversive ne concerne qu'un petit nombre de verbes, pour lesquels il existe un "contraire". En français, l'équivalent du "RÉVERSIF" consiste à placer un préfixe privatif devant le radical verbal.
EXEMPLES :         lier        :  délier           faire        :  défaire         jeûner       :  déjeuner
En shimaore, la dérivation réversive consiste à remplacer la terminaison  -A du verbe par le suffixe  -UA
(ou  -OA  lorsque la voyelle du radical est  O) :



Uaniha
faire sécher au soleil
Uanua
retirer du soleil, ramasser
Uɓala
fermer
Uɓua
déboucher, dégager
Ufinikia
couvrir
Ufunukua
découvrir
Ufuma
tisser, tricoter
Ufumua
découdre, défaire
Ufunga
fermer, jeûner
Ufungua
ouvrir, rompre le jeûne
Uganga
tromper, duper
Ugangua
désensorceler
Ukoma
finir, achever
Ukomoa
démolir
Utratra
embrouiller, tromper
Utratrua
démêler, rassurer
Uv̄uma
souffler
Uv̄umua
respirer, se reposer



 2. VERBES À LA FORME EXTRACTIVE : 

La FORME EXTRACTIVE est semblable à la FORME RÉVERSIVE et ne s'en distingue que par le sens : celui de retirer, enlever, extraire.
Il ne s'agit pas à proprement parler d'un dérivation car elle concerne un bon nombre de verbes dont le radical de base se termine déjà en  -UA  ou  -OA.
Malgré tout, certains verbes semblent dérivés d'un radical qui n'est plus en usage aujourd'hui. En voici quelques-uns :



Uforoa
trouer, percer
Ukomboa
libérer, délivrer
Upahua
débarquer, mettre pied à terre
Upasua
déchirer, fendre, couper, opérer
Upua
enlever, arracher
Utoa
débarrasser, enlever
Utsua
dénuder, se déshabiller
Utswa
se coucher (le soleil, la lune)
Uvahua
décharger un véhicule / servir le repas
Uvoroa
déformer, plier, tordre




VOCABULAIRE


Bahazazi, ma-
un commerçant, des --
Matsaha (Cl 6)
les ordures
Djaraha, ma-
une plaie morale, des --
Matsahani
en brousse, aux champs
Ɗuja, maluja
une vague, des --
Mavuna (Cl 6)
les récoltes, les résultats
Kaa, mahaa
le charbon, des braises
Riziki, ma-
la nourriture, les vivres
Malozi (Cl 6)
la pêche
Shartwi, ma-
une obligation, des --
Mamlaka (Cl 6)
une compagnie
Shirika, ma-
une société, des --


EXERCICES

EXERCICE 1 : Traduisez en shimaore :


Voyons-nous ! Entraidons-nous ! Ne vous battez pas ! Ils se ressemblent, ils se suivent, ils se disputent, ils s'aiment, ils se sont rencontrés, nous nous verrons, ne vous frappez pas !
Je m'instruis, il s'est trompé, c'est mangeable, elle est abîmée, c'est visible, il s'est cassé, il est brûlé, c'est faisable, il a vieilli, ça a changé, il a invité, il a expédié.
Elle a ramassé, il a rompu le jeûne, elle a décousu,  j'ai respiré, nous avons enlevé, il a plié, il a percé, il a coupé, elle s'est déshabillée, il a démoli, ils ont libéré, c'est fini.


EXERCICE 2 : Traduisez en français :



Jua litswa harmwa sa kumi na mbili wa nusu.
Ɓakoko wangu apasuliwa lapitali jana.
Fatima apasua na afumua robo yahe.
Watru ɓaɓa wasuvahua ligari.
Maruha ufanye djitihadi zaidi.
Fi nyengi zionehana malujani.
Trongo namna iyo kaitsofanyishiha.
Watru masikini wale wanisikitiha.
Mulimizi asupua malavu matsahani.
Makaha yaparihana ɓazari.




Chapitre précédentChapitre suivantTable des matières | Uaniha | faire sécher au soleil | Uanua | retirer du soleil, ramasser | Uɓala | fermer | Uɓua | déboucher, dégager | Ufinikia | couvrir | Ufunukua | découvrir | Ufuma | tisser, tricoter | Ufumua | découdre, défaire | Ufunga | fermer, jeûner | Ufungua | ouvrir, rompre le jeûne | Uganga | tromper, duper | Ugangua | désensorceler | Ukoma | finir, achever | Ukomoa | démolir | Utratra | embrouiller, tromper | Utratrua | démêler, rassurer | Uv̄uma | souffler | Uv̄umua | respirer, se reposer | Uforoa | trouer, percer | Ukomboa | libérer, délivrer | Upahua | débarquer, mettre pied à terre | Upasua | déchirer, fendre, couper, opérer | Upua | enlever, arracher | Utoa | débarrasser, enlever | Utsua | dénuder, se déshabiller | Utswa | se coucher (le soleil, la lune) | Uvahua | décharger un véhicule / servir le repas | Uvoroa | déformer, plier, tordre | Bahazazi, ma- | un commerçant, des -- | Matsaha (Cl 6) | les ordures | Djaraha, ma- | une plaie morale, des -- | Matsahani | en brousse, aux champs | Ɗuja, maluja | une vague, des -- | Mavuna (Cl 6) | les récoltes, les résultats | Kaa, mahaa | le charbon, des braises | Riziki, ma- | la nourriture, les vivres | Malozi (Cl 6) | la pêche | Shartwi, ma- | une obligation, des -- | Mamlaka (Cl 6) | une compagnie | Shirika, ma- | une société, des -- | Chapitre précédent | Chapitre suivant | Table des matières
Uaniha | faire sécher au soleil | Uanua | retirer du soleil, ramasser
Uɓala | fermer | Uɓua | déboucher, dégager
Ufinikia | couvrir | Ufunukua | découvrir
Ufuma | tisser, tricoter | Ufumua | découdre, défaire
Ufunga | fermer, jeûner | Ufungua | ouvrir, rompre le jeûne
Uganga | tromper, duper | Ugangua | désensorceler
Ukoma | finir, achever | Ukomoa | démolir
Utratra | embrouiller, tromper | Utratrua | démêler, rassurer
Uv̄uma | souffler | Uv̄umua | respirer, se reposer
Uforoa | trouer, percer
Ukomboa | libérer, délivrer
Upahua | débarquer, mettre pied à terre
Upasua | déchirer, fendre, couper, opérer
Upua | enlever, arracher
Utoa | débarrasser, enlever
Utsua | dénuder, se déshabiller
Utswa | se coucher (le soleil, la lune)
Uvahua | décharger un véhicule / servir le repas
Uvoroa | déformer, plier, tordre
Bahazazi, ma- | un commerçant, des -- | Matsaha (Cl 6) | les ordures
Djaraha, ma- | une plaie morale, des -- | Matsahani | en brousse, aux champs
Ɗuja, maluja | une vague, des -- | Mavuna (Cl 6) | les récoltes, les résultats
Kaa, mahaa | le charbon, des braises | Riziki, ma- | la nourriture, les vivres
Malozi (Cl 6) | la pêche | Shartwi, ma- | une obligation, des --
Mamlaka (Cl 6) | une compagnie | Shirika, ma- | une société, des --
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 42,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 42.",
    content: `

Chapitre 43 - Les Conjonctions

RAPPEL : 
Une conjonction est un mot qui permet de lier 2 groupes de mots, ou 2 propositions.
Par exemple : Jean et Marie ; je bois parce que j'ai soif ; je pense que tu es gentil.
Voici les conjonctions les plus courantes en shimaore :


AMBA       =    que

Tsiono amba kutsoja.J'ai jugé que tu ne viendrais pas.
Tsirongolwa amba musupashia meso. On m'a dit que vous voyagez demain.
ALAKINI,           WALAKINI         =   même si, bien que

Alakini usunirema wami nisuja.Même si tu me frappes, je viens.
Ãkiɓa ãkiɓa, walakini puzi. L'épargne est l'épargne, même si c'est un duvet.

AMMA        =   quant à

Inu ɗe kanya ya mele, na ile ɗe ɗao la kuhu. Amma ile ɗe muraba wa sho.
Ça c'est la cuisine et ça c'est le poulailler. Quant à ça, c'est les toilettes.

ATA         =   même, pas même

Tsisutsaha ata shitru.Je ne veux rien. (même pas quelque chose)
Tsaona ata moja.Je n'ai vu personne. (pas même un)

AU             =    ou, ou bien

Niv̄e majwayi mararu au manne.Donne-moi trois ou quatre œufs.
Unu mushe au mwana ?C'est la femme ou la fille ?

ƁADI      =    mais, or, sauf, excepté

Akotsaha amulole Fatima, ɓadi mutru-mushe uwo madza alolwa.
Il voulait épouser Fatima, or cette femme était déjà mariée.

ƁADALA YA       =    au lieu de

Nitsotsaha dite ɓadala ya kafe.Je prendrai du thé au lieu de café.
Tsiendre Farantsa ɓadala ya ɓaɓangu.Je suis allé en France à la place de mon père.

ƁASI       =   alors

Ɓasi, wakati aisa mahadisi yahe, ahima aendre dzahe.
Alors, quand il a fini ses histoires, il s'est levé pour s'en aller chez lui.

ƁE       =   mais

Haya, endra dukani, ɓe fanya haraka.D'accord, va à la boutique, mais fais vite.
Nitsomwona, ɓe tsitsomwambia trongo.Je le verrai, mais je ne lui dirai rien.

ƁILA       =    sans

Waye atseha ɓila siɓaɓu.Il a ri sans raison.
Utsopara marike zaho ɓila shaka.Tu auras ton argent sans aucun doute.

 HA SIƁAƁU YA,        HA SWAƁU YA      =    à cause de

Ɓaɓa afu ha siɓaɓu ya maradhi.Papa est mort à cause de maladie.
Tsihomo ha siɓaɓu ya gari langu. Je suis en retard à cause de ma voiture.

HA ZIZO       =   donc, pour cela

Tsipara adjali ya gari, ha zizo tsihomoja hazini leo asuɓuhi.
J'ai eu un accident de voiture, c'est pour cela que je suis arrivé en retard au travail ce matin.

ILE,           PARE       =     pour que, afin que, afin de

Nisuandrisa upisi ile shahula ike tayari mutsana.
Je commence la cuisine pour que le repas soit prêt à midi.

 MANA,          MAANA YA       =    à cause de,  parce que

Koko afu maana ya uwaɗe.La grand-mère est morte de maladie.

 MAURI       =    comme

Aka mauri shinyama.Il était comme un animal.
Wawo wanadamu mauri ɗe wasi.Ce sont des êtres humains comme nous.

MPAKA       =    si ce n'est, à moins que, seulement si

Mpaka uje ɗe nitsohuambiao.Je ne te le dirai que si tu viens.

NA       =    et, avec

Tsija na waye.Je suis venu avec lui.
Aja v̄wamoja na wami.Il est venu avec moi.

NE       =    est-ce que, donc

Ne utsoja ?Est-ce que tu ne viendras donc pas ?

NADJELI,         DJELI,         NAHIKA,         NEKA      =    si  (Voir : Chapitre 48 - L'Hypothèse.)
RAHA NA       =   plus que

A muɓole raha na waye.Il est plus grand que toi.
Hairi ya shiɓao ɓombo raha na mulango wadzi.
Il vaut mieux une vieille planche qu'une porte ouverte.

SAƁU       =    est-ce que, mais, pourtant

Saɓu atswendra ɓazari ?Mais est-ce qu'elle ira au marché ?
Saɓu umalidza hazi yaho ?Mais est-ce que tu as terminé ton travail ?

SAFE,         SAFEKE       =    ainsi, donc

Tsamwona nyumbani hahe, safe tsapara haɓari zahe.
Je ne l'ai pas vu chez lui, alors je n'ai pas eu de ses nouvelles.

WAJAU      =    aussi, comme, de cette façon

Tsipara mushahara wangu.  - Wami wajau.J'ai reçu mon salaire.  - Moi aussi.

WALA        =  ni               TSI.........WALA TSI.....       (TSI............TSI......)        =    ni....  ni.....

Waye kaswendra tsi mukirini wala tsi laglisi.Il ne va ni à la mosquée, ni à l'église.
Tsi fi, tsi nyama.Ce n'est ni poisson, ni viande.

YAANI       =    c'est-à-dire

Iyo mbasi, yaani fi ɓole swafi.C'est un thon, c'est-à-dire un très gros poisson.




VOCABULAIRE


Ãiɓu
le déshonneur
Hamili
la grossesse
Ãkili
l'intelligence
Haya
la honte, la timidité
Ãshiki
la passion, le désir
Hila
la ruse
Ɓaraka
la bénédiction
Mahaba
l'amour
Hamu
la tristesse
Nafasi
l'occasion
Harusi
le mariage
Roho
le cœur, l'âme


EXERCICES

EXERCICE 1 : Traduisez en shimaore :



Ces gens n'ont ni vaches ni chèvres.
Il est venu hier, mais il est déjà reparti.
L'enfant pleure parce qu'il a mal.
Même si la nourriture était bonne, l'enfant ne l'a pas mangée.
Il se dépêche pour arriver le premier.
Je n'ai pas d'argent, donc je ne peux rien acheter.
Il a dit qu'il viendrait demain.
Ne sais-tu pas que ton grand-père est à l'hôpital ?
Ce n'est ni poisson, ni viande.
Il nage comme un poisson dans la mer.



EXERCICE 2 : Traduisez en français :



Tsamwona wala tsakia haɓari zahe.
Watru piya waja ɓadi fundi likoli tu ɗe kaja.
Mwana zaza uliya ɓure ɓure.
Tsihuv̄a ɗalao lini ile uv̄one.
Kaja ɗagoni maana kapara haɓari.
Tsapara haɓari zaho, ha zizo tsaja haho.
Tsihuambia amba tsisina nafasi av̄asa.
Aangiha gazeti lini v̄wamoja na wami.
Mpaka alolwe ɗe atsopara nyumba yahe.
Afanya musafara wa v̄wendze, yaani aendre Ulaya.




Chapitre précédentChapitre suivantTable des matières | Tsiono amba kutsoja. | J'ai jugé que tu ne viendrais pas. | Tsirongolwa amba musupashia meso. | On m'a dit que vous voyagez demain. | Alakini usunirema wami nisuja. | Même si tu me frappes, je viens. | Ãkiɓa ãkiɓa, walakini puzi. | L'épargne est l'épargne, même si c'est un duvet. | Inu ɗe kanya ya mele, na ile ɗe ɗao la kuhu. Amma ile ɗe muraba wa sho. | Ça c'est la cuisine et ça c'est le poulailler. Quant à ça, c'est les toilettes. | Tsisutsaha ata shitru. | Je ne veux rien. (même pas quelque chose) | Tsaona ata moja. | Je n'ai vu personne. (pas même un) | Niv̄e majwayi mararu au manne. | Donne-moi trois ou quatre œufs. | Unu mushe au mwana ? | C'est la femme ou la fille ? | Akotsaha amulole Fatima, ɓadi mutru-mushe uwo madza alolwa. | Il voulait épouser Fatima, or cette femme était déjà mariée. | Nitsotsaha dite ɓadala ya kafe. | Je prendrai du thé au lieu de café. | Tsiendre Farantsa ɓadala ya ɓaɓangu. | Je suis allé en France à la place de mon père. | Ɓasi, wakati aisa mahadisi yahe, ahima aendre dzahe. | Alors, quand il a fini ses histoires, il s'est levé pour s'en aller chez lui. | Haya, endra dukani, ɓe fanya haraka. | D'accord, va à la boutique, mais fais vite. | Nitsomwona, ɓe tsitsomwambia trongo. | Je le verrai, mais je ne lui dirai rien. | Waye atseha ɓila siɓaɓu. | Il a ri sans raison. | Utsopara marike zaho ɓila shaka. | Tu auras ton argent sans aucun doute. | Ɓaɓa afu ha siɓaɓu ya maradhi. | Papa est mort à cause de maladie. | Tsihomo ha siɓaɓu ya gari langu. | Je suis en retard à cause de ma voiture. | Tsipara adjali ya gari, ha zizo tsihomoja hazini leo asuɓuhi. | J'ai eu un accident de voiture, c'est pour cela que je suis arrivé en retard au travail ce matin. | Nisuandrisa upisi ile shahula ike tayari mutsana. | Je commence la cuisine pour que le repas soit prêt à midi. | Koko afu maana ya uwaɗe. | La grand-mère est morte de maladie. | Aka mauri shinyama. | Il était comme un animal. | Wawo wanadamu mauri ɗe wasi. | Ce sont des êtres humains comme nous. | Mpaka uje ɗe nitsohuambiao. | Je ne te le dirai que si tu viens. | Tsija na waye. | Je suis venu avec lui. | Aja v̄wamoja na wami. | Il est venu avec moi. | Ne utsoja ? | Est-ce que tu ne viendras donc pas ? | A muɓole raha na waye. | Il est plus grand que toi. | Hairi ya shiɓao ɓombo raha na mulango wadzi. | Il vaut mieux une vieille planche qu'une porte ouverte. | Saɓu atswendra ɓazari ? | Mais est-ce qu'elle ira au marché ? | Saɓu umalidza hazi yaho ? | Mais est-ce que tu as terminé ton travail ? | Tsamwona nyumbani hahe, safe tsapara haɓari zahe. | Je ne l'ai pas vu chez lui, alors je n'ai pas eu de ses nouvelles. | Tsipara mushahara wangu.  - Wami wajau. | J'ai reçu mon salaire.  - Moi aussi. | Waye kaswendra tsi mukirini wala tsi laglisi. | Il ne va ni à la mosquée, ni à l'église. | Tsi fi, tsi nyama. | Ce n'est ni poisson, ni viande. | Iyo mbasi, yaani fi ɓole swafi. | C'est un thon, c'est-à-dire un très gros poisson. | Ãiɓu | le déshonneur | Hamili | la grossesse | Ãkili | l'intelligence | Haya | la honte, la timidité | Ãshiki | la passion, le désir | Hila | la ruse | Ɓaraka | la bénédiction | Mahaba | l'amour | Hamu | la tristesse | Nafasi | l'occasion | Harusi | le mariage | Roho | le cœur, l'âme | Chapitre précédent | Chapitre suivant | Table des matières
Tsiono amba kutsoja. | J'ai jugé que tu ne viendrais pas.
Tsirongolwa amba musupashia meso. | On m'a dit que vous voyagez demain.
Alakini usunirema wami nisuja. | Même si tu me frappes, je viens.
Ãkiɓa ãkiɓa, walakini puzi. | L'épargne est l'épargne, même si c'est un duvet.
Inu ɗe kanya ya mele, na ile ɗe ɗao la kuhu. Amma ile ɗe muraba wa sho.
Ça c'est la cuisine et ça c'est le poulailler. Quant à ça, c'est les toilettes.
Tsisutsaha ata shitru. | Je ne veux rien. (même pas quelque chose)
Tsaona ata moja. | Je n'ai vu personne. (pas même un)
Niv̄e majwayi mararu au manne. | Donne-moi trois ou quatre œufs.
Unu mushe au mwana ? | C'est la femme ou la fille ?
Akotsaha amulole Fatima, ɓadi mutru-mushe uwo madza alolwa.
Il voulait épouser Fatima, or cette femme était déjà mariée.
Nitsotsaha dite ɓadala ya kafe. | Je prendrai du thé au lieu de café.
Tsiendre Farantsa ɓadala ya ɓaɓangu. | Je suis allé en France à la place de mon père.
Ɓasi, wakati aisa mahadisi yahe, ahima aendre dzahe.
Alors, quand il a fini ses histoires, il s'est levé pour s'en aller chez lui.
Haya, endra dukani, ɓe fanya haraka. | D'accord, va à la boutique, mais fais vite.
Nitsomwona, ɓe tsitsomwambia trongo. | Je le verrai, mais je ne lui dirai rien.
Waye atseha ɓila siɓaɓu. | Il a ri sans raison.
Utsopara marike zaho ɓila shaka. | Tu auras ton argent sans aucun doute.
Ɓaɓa afu ha siɓaɓu ya maradhi. | Papa est mort à cause de maladie.
Tsihomo ha siɓaɓu ya gari langu. | Je suis en retard à cause de ma voiture.
Tsipara adjali ya gari, ha zizo tsihomoja hazini leo asuɓuhi.
J'ai eu un accident de voiture, c'est pour cela que je suis arrivé en retard au travail ce matin.
Nisuandrisa upisi ile shahula ike tayari mutsana.
Je commence la cuisine pour que le repas soit prêt à midi.
Koko afu maana ya uwaɗe. | La grand-mère est morte de maladie.
Aka mauri shinyama. | Il était comme un animal.
Wawo wanadamu mauri ɗe wasi. | Ce sont des êtres humains comme nous.
Mpaka uje ɗe nitsohuambiao. | Je ne te le dirai que si tu viens.
Tsija na waye. | Je suis venu avec lui.
Aja v̄wamoja na wami. | Il est venu avec moi.
Ne utsoja ? | Est-ce que tu ne viendras donc pas ?
A muɓole raha na waye. | Il est plus grand que toi.
Hairi ya shiɓao ɓombo raha na mulango wadzi.
Il vaut mieux une vieille planche qu'une porte ouverte.
Saɓu atswendra ɓazari ? | Mais est-ce qu'elle ira au marché ?
Saɓu umalidza hazi yaho ? | Mais est-ce que tu as terminé ton travail ?
Tsamwona nyumbani hahe, safe tsapara haɓari zahe.
Je ne l'ai pas vu chez lui, alors je n'ai pas eu de ses nouvelles.
Tsipara mushahara wangu.  - Wami wajau. | J'ai reçu mon salaire.  - Moi aussi.
Waye kaswendra tsi mukirini wala tsi laglisi. | Il ne va ni à la mosquée, ni à l'église.
Tsi fi, tsi nyama. | Ce n'est ni poisson, ni viande.
Iyo mbasi, yaani fi ɓole swafi. | C'est un thon, c'est-à-dire un très gros poisson.
Ãiɓu | le déshonneur | Hamili | la grossesse
Ãkili | l'intelligence | Haya | la honte, la timidité
Ãshiki | la passion, le désir | Hila | la ruse
Ɓaraka | la bénédiction | Mahaba | l'amour
Hamu | la tristesse | Nafasi | l'occasion
Harusi | le mariage | Roho | le cœur, l'âme
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 43,
    title: "Leçon 43",
    description: "Contenu du chapitre 43.",
    content: `

Chapitre 44 - Les Noms Adjectivés

Les adjectifs simples sont peu nombreux en shimaore.  Cependant,  il existe de nombreux procédés pour en "fabriquer" à partir de noms ou d'autres mots.

 1. NOMS PRÉCÉDÉS DU CONNECTIF "-A" : 

Un des moyens les plus courants est de faire précéder un nom du connectif -A pour lui conférer une
valeur d'adjectif. Ainsi :



Maji ya moro
=  de l'eau chaude.
(= eau de chaud)
Maji ya ɓaridi
=  de l'eau froide.
(= eau de froid)
Uwaɗe wa mauti
= une maladie mortelle.
(= maladie de mort)



Le nom placé après le connectif -A peut prendre le préfixe  SHI-. Ainsi :



Musafara wa shisirikali
=  un voyage gouvernemental.
Shisiwa ya shimaore
=  l'île mahoraise.
Nyumba za shizamani
=  les maisons anciennes.



 2. QUELQUES MOTS ADJECTIVÉS COURANTS : 



-a kumeni
(à / de) droite
-a shimaore
mahorais
-a mwiso
dernier
-a shizungu
comme les blancs
-a peu
méchant
-a uju
supérieur
-a potroni
(à / de) gauche
-a utsini
inférieur



 3. NOMS ADJECTIVÉS APRÈS LE VERBE  "ANA" : 

Le verbe  ANA  (= avoir au présent) donne au nom abstrait qui le suit une notion de qualité. Ainsi :



Mwana waho ana ãkili.
Votre enfant est intelligent.
Mwana unu ana ɓidia.
Cet enfant est têtu.
Mwanamtsa uwo ana djitihadi.
Cet enfant est consciencieux.
Maɓiɓi yale yana hila.
Ces insectes sont embêtants.



 4. NOMS ADJECTIVÉS APRÈS LA PARTICULE  "-ENDZA" : 

La particule de détermination -ENDZA (= "qui a", "ayant") placée devant un nom confère à celui-ci une valeur adjectivale. Cette particule s'accorde avec le nom du possesseur en prenant un préfixe d'accord particulier qui ressemble à l'infixe complément de la classe correspondante. Ainsi :



Mutru mwendza trambo.
Un homme menteur.
Watru wendza marike
Les gens qui ont de l'argent.
Mwanamtsa mwendza ɓahati.
Un enfant chanceux.
Trundra lendza nyongo.
Une orange amère.
Mwendza shonga unu !
Espèce de crétin !




CLASSE
NOMS
-ENDZA
CLASSE
NOMS
-ENDZA
Cl 1
Cl 3
Cl 5
Cl 7
Cl 9
Mutru
Muhono
Gari
Shiri
Nguo
MWENDZA
WENDZA
LENDZA
YENDZA
YENDZA
Cl 2
Cl 4
Cl 6
Cl 8
Cl 10
Watru
Mihono
Magari
Ziri
Nguo
WENDZA
YENDZA
YENDZA
ZENDZA
ZENDZA


 5. L'ACCOMPLI ET LE RELATIF EMPLOYÉS COMME ADJECTIFS : 

On peut encore, comme on le fait avec le participe passé en français, utiliser un verbe à l'accompli  ou
au relatif passé comme adjectif.   (Voir : Chapitre 53.)

Quelques exemples avec l'accompli :


Uiva
= être mûr
-> Manga iyivu
= une mangue mure
Uola= pourrir-> Iolo= c'est pourri
Ushiya= dépasser-> Ishiya shingo= c'est trop salé
Uziliya= se refroidir-> Iziliya= c'est froid


Quelques exemples avec le relatif passé :


Uola
= pourrir
-> Ndrimu yaola
= un citron (qui est) pourri
Uoha= griller, faire rôtir-> Yaohwa= grillé, rôti
Urohotsa= faire bouillir-> Yarohotsewa= bouilli
Uvisa= frire-> Trovi yaviswa= banane frite


PROVERBE : 

FI MOJA YAOLA LAKINI PIYA ZIƁAKI ZIOLOUn poisson (qui est) pourri et tous les autres sont pourris


EXERCICES

EXERCICE 1 :  Traduisez en shimaore :


Chaud, froid, méchant, premier, dernier, supérieur, inférieur, mahorais, français, frit, grillé, bouilli, intelligent, rusé, consciencieux.
Un méchant enfant, la main gauche, la main droite, le troisième jour, la première fois, un homme intelligent, la dernière occasion, un animal rusé, la deuxième année,  le neuvième mois.
Cette jeune fille est honteuse (timide), ce garçon travaille consciencieusement, ces jeunes sont intelligents, ces insectes sont embêtants, cette sauce est trop salée, ce poisson est pourri,
cette papaye est mûre, je veux des bananes frites, il mange du poisson grillé, donnez-moi de l'eau chaude.


EXERCICE 2 : Traduisez en français :



Niv̄e maji ya ɓaridi.
Lifenesi lini liolo.
Afa utsola frãpe laviswa ?
Ãhã, nitsola batabata la majimbi.
Nisufa na dza.
Shahula iziliya.
Omari mwanamtsa mwendza ãkili.
Lakini Abudu kasi na djitihadi.
Wana zioni wotsi piya waheya kilasi ya uju.
Mutsumba wangu ana wivu.
Nisuona nyora.
Waye mutru mwendza hila.




Chapitre précédentChapitre suivantTable des matières | Maji ya moro | =  de l'eau chaude. | (= eau de chaud) | Maji ya ɓaridi | =  de l'eau froide. | (= eau de froid) | Uwaɗe wa mauti | = une maladie mortelle. | (= maladie de mort) | Musafara wa shisirikali | =  un voyage gouvernemental. | Shisiwa ya shimaore | =  l'île mahoraise. | Nyumba za shizamani | =  les maisons anciennes. | -a kumeni | (à / de) droite | -a shimaore | mahorais | -a mwiso | dernier | -a shizungu | comme les blancs | -a peu | méchant | -a uju | supérieur | -a potroni | (à / de) gauche | -a utsini | inférieur | Mwana waho ana ãkili. | Votre enfant est intelligent. | Mwana unu ana ɓidia. | Cet enfant est têtu. | Mwanamtsa uwo ana djitihadi. | Cet enfant est consciencieux. | Maɓiɓi yale yana hila. | Ces insectes sont embêtants. | Mutru mwendza trambo. | Un homme menteur. | Watru wendza marike | Les gens qui ont de l'argent. | Mwanamtsa mwendza ɓahati. | Un enfant chanceux. | Trundra lendza nyongo. | Une orange amère. | Mwendza shonga unu ! | Espèce de crétin ! | CLASSE | NOMS | -ENDZA | CLASSE | NOMS | -ENDZA | Cl 1
Cl 3
Cl 5
Cl 7
Cl 9 | Mutru
Muhono
Gari
Shiri
Nguo | MWENDZA
WENDZA
LENDZA
YENDZA
YENDZA | Cl 2
Cl 4
Cl 6
Cl 8
Cl 10 | Watru
Mihono
Magari
Ziri
Nguo | WENDZA
YENDZA
YENDZA
ZENDZA
ZENDZA | Uiva | = être mûr | -> Manga iyivu | = une mangue mure | Uola | = pourrir | -> Iolo | = c'est pourri | Ushiya | = dépasser | -> Ishiya shingo | = c'est trop salé | Uziliya | = se refroidir | -> Iziliya | = c'est froid | Uola | = pourrir | -> Ndrimu yaola | = un citron (qui est) pourri | Uoha | = griller, faire rôtir | -> Yaohwa | = grillé, rôti | Urohotsa | = faire bouillir | -> Yarohotsewa | = bouilli | Uvisa | = frire | -> Trovi yaviswa | = banane frite | Chapitre précédent | Chapitre suivant | Table des matières
Maji ya moro | =  de l'eau chaude. | (= eau de chaud)
Maji ya ɓaridi | =  de l'eau froide. | (= eau de froid)
Uwaɗe wa mauti | = une maladie mortelle. | (= maladie de mort)
Musafara wa shisirikali | =  un voyage gouvernemental.
Shisiwa ya shimaore | =  l'île mahoraise.
Nyumba za shizamani | =  les maisons anciennes.
-a kumeni | (à / de) droite | -a shimaore | mahorais
-a mwiso | dernier | -a shizungu | comme les blancs
-a peu | méchant | -a uju | supérieur
-a potroni | (à / de) gauche | -a utsini | inférieur
Mwana waho ana ãkili. | Votre enfant est intelligent.
Mwana unu ana ɓidia. | Cet enfant est têtu.
Mwanamtsa uwo ana djitihadi. | Cet enfant est consciencieux.
Maɓiɓi yale yana hila. | Ces insectes sont embêtants.
Mutru mwendza trambo. | Un homme menteur.
Watru wendza marike | Les gens qui ont de l'argent.
Mwanamtsa mwendza ɓahati. | Un enfant chanceux.
Trundra lendza nyongo. | Une orange amère.
Mwendza shonga unu ! | Espèce de crétin !
CLASSE | NOMS | -ENDZA | CLASSE | NOMS | -ENDZA
Cl 1
Cl 3
Cl 5
Cl 7
Cl 9 | Mutru
Muhono
Gari
Shiri
Nguo | MWENDZA
WENDZA
LENDZA
YENDZA
YENDZA | Cl 2
Cl 4
Cl 6
Cl 8
Cl 10 | Watru
Mihono
Magari
Ziri
Nguo | WENDZA
YENDZA
YENDZA
ZENDZA
ZENDZA
Uiva | = être mûr | -> Manga iyivu | = une mangue mure
Uola | = pourrir | -> Iolo | = c'est pourri
Ushiya | = dépasser | -> Ishiya shingo | = c'est trop salé
Uziliya | = se refroidir | -> Iziliya | = c'est froid
Uola | = pourrir | -> Ndrimu yaola | = un citron (qui est) pourri
Uoha | = griller, faire rôtir | -> Yaohwa | = grillé, rôti
Urohotsa | = faire bouillir | -> Yarohotsewa | = bouilli
Uvisa | = frire | -> Trovi yaviswa | = banane frite
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 44,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 44.",
    content: `

Chapitre 45 - Les Classes Locatives

Le shimaore comprend 3 classes locatives distinctes : Les classes 16, 17 et 18, selon la nomenclature des langues bantoues.

La classe 16 se caractérise par le préfixe de classe  V̄, V̄A- ou V̄U-. Elle ne contient qu'un nom : V̄AHANU ou V̄AHALI, mot qui signifie : un endroit, un lieu, et deux adverbes : V̄OTSI = par terre, et V̄ONDZE = à l'extérieur. Cette classe est surtout présente par les accords de classe qu'elle entraîne, souvent même en l'absence du nom "V̄AHANU". Elle est également attestée par les démonstratifs  V̄ANU, V̄ALE, V̄AV̄O et le connectif  V̄WA.
La classe 17, caractérisée par le préfixe H- ou HA-, ne comporte aucun nom. Cette classe est attestée par les démonstratifs HUNU, HULE, OHO, le pronom interrogatif HAV̄I, le connectif HA, ainsi que l'auxiliaire verbal -HI-.
La classe 18, caractérisée par le préfixe M- ou MW-, est encore plus limitée, puisqu'elle n'est présente que dans le mot MONDZE ou MWENDZE (= à l'extérieur), le connectif  MWA, et l'auxiliaire verbal  -MO-.


 1.  L'ADJECTIF : 

L'adjectif s'accorde en prenant le préfixe V̄U-, qui devient V̄W- devant une voyelle.

V̄ahanu  v̄uzuri.
un bel endroit.
V̄ahanu  v̄udu.
un endroit noir.
V̄ahanu  v̄wema.
un bon endroit.
V̄ahanu  v̄wangina.
un autre endroit.
V̄ahanu  v̄wa trotro.
un endroit boueux.


 2. LE VERBE :    (Voir : Chapitre 17.)

Le préfixe sujet locatif est  V̄U-, ou  V̄W- devant une voyelle. Il n'existe qu'à la 3ème personne du singulier et s'emploie surtout avec le verbe UKA (= être) :


V̄WA
il y a
V̄UTSOKA
il y aura
V̄UKA
il y avait, "il était une fois..."


EXEMPLES : 



1. V̄wa mawe harimwa ndzia.
Il y a des pierres sur le chemin.
2. V̄utsoka usikini ntsiju v̄anu.
Il y aura de la pauvreté sur ce pays.
3. V̄uka watru wengi.
Il y avait beaucoup de gens.
4. V̄uka mufalume akohiriwa Mawana...
Il était une fois un roi qui s'appelait Mawana.
5. Mwaha jana v̄uwashiwa nyumba zini.
L'année dernière on a construit ces maisons.



 3. LE CONNECTIF  "MWA" (=  de) :    (Voir : Chapitre 26.)

MWA  s'utilise après un certain nombre de prépositions, ainsi que les noms suffixés en -NI :



1. Uju mwa mwiri.
en haut de l'arbre.
2. Utsini mwa malavu.
sous (de) les feuilles.
3. Nyuma mwa inyumba.
derrière (de) la maison.



 4. LE CONNECTIF  "HA" (=  de) :     (Voir : Chapitre 26 et Chapitre 29.)


Le connectif  HA  a le sens de "chez", "de", "pour", "en", etc.. :


1. Atsoketsi ha mushe wahe.
Il sera chez sa femme.
2. Nisendra ha mayangu.
Je vais chez ma mère.
3. Ɗagoni ha Mutsamboro.
Dans le village de Mtsamboro.
4. Na mashairi yaho, uakonimbia mitsana mauku ha unitsitsiya.
Et les poésies que vous me chantiez jours et nuits pour me bercer.


Les adjectifs possessifs prennent le préfixe  HA- pour s'accorder aux noms suffixés en -NI :


1. Ɗagoni hanyu.
Dans votre village.
2. Moyoni hangu.
Dans mon cœur.


Les thèmes possessifs préfixés en HA- employés seuls signifient : chez moi / toi / lui / elle ... :


1. Mukiri wa mbeli mwa hatru.
La mosquée est en face de chez nous.
2. V̄av̄o ɗe hangu.
Ici c'est chez moi.



 5. LES ADVERBES LOCATIFS : 


V̄ONDZE, V̄WENDZE (Cl 16), MONDZE, MWENDZE (Cl 17)  =  à l'extérieur


1. Imbwa ilala v̄wendze.
Le chien dort à l'extérieur.
2. Musafara wa mwendze.
Un voyage à l'étranger.


V̄OTSI (Cl 16) = par terre


Wamulishi v̄otsi mutsangaju v̄ale.
Ils l'ont laissé par terre, là sur le sable.



 6.  LE MOT INTERROGATIF "HAV̄I ?" : 

    (Voir : Chapitre 21 et Chapitre 28.)

 7. LES DÉMONSTRATIFS      (Voir : Chapitre 28.)


LIEU
Proximité
Eloignement
Référence
CLASSE
Lieu précis
V̄ANU       ici
V̄ALE       là-bas
V̄AV̄O    là
Classe 16
Lieu imprécis
HUNU  par ici
HULE   par là-bas
OHO    par là
Classe 17


Ces démonstratifs peuvent être employés, soit seuls, soit comme adjectifs, après un nom suffixé en -NI (dans, sur) ou en -JU  (sur), ou après un adverbe de lieu.

EXEMPLES : 



1. V̄ahanu v̄ale.
Cet endroit là-bas.
2. Mutsangaju v̄ale.
Sur le sable là.
3. Duniani v̄anu.
En ce bas monde.
4. Ɗagoni hao v̄ale.
Dans leur village là.
5. Hari mwa watru wale v̄ale.
Parmi ces personnes-là.
6. Hetsi zisahani uju v̄av̄o !
Pose les assiettes là-dessus.
7. Tsizitria moni v̄av̄o.
Je les ai mises là-dedans.




VOCABULAIRE


batata
patate
ndrimu
citron
hiliki
cardamome
ntsohole
riz
karafu
clou de girofle
tomati
tomate
manga
mangue
trovi
banane verte
nadzi
noix de coco
vilivili
poivre
nanasi
ananas
zabibu
raisin


EXERCICES

EXERCICE 1 : Traduisez en shimaore :


Un bel endroit, un endroit noir, un bon endroit, un autre endroit, derrière la maison, à l'intérieur de la maison, au-dessous des feuilles, en haut de la montagne, derrière la voiture, devant la cuisine, derrière l'école, devant l'hôpital, à l'intérieur du sac, sur le sable, en ce bas-monde.


EXERCICE 2 : Traduisez en français :



V̄wa maji v̄anu ? - Kav̄u.
V̄wa watru wengi Momoju.
Ritsofanya vule mutsangani v̄anu.
Paha iheya uju mwa mwiri.
Mbwa yahe ulala v̄wendze.
Tria midzo moni mwa gari.
V̄wa matadjiri mashashi ɗagoni v̄anu.
V̄wa mwana muhodari hari mwa klasi ini.
Nisushuka v̄av̄o.
V̄wa usikini mwengi duniani v̄anu.




Chapitre précédentChapitre suivantTable des matières | V̄ahanu  v̄uzuri. | un bel endroit. | V̄ahanu  v̄udu. | un endroit noir. | V̄ahanu  v̄wema. | un bon endroit. | V̄ahanu  v̄wangina. | un autre endroit. | V̄ahanu  v̄wa trotro. | un endroit boueux. | V̄WA | il y a | V̄UTSOKA | il y aura | V̄UKA | il y avait, "il était une fois..." | 1. V̄wa mawe harimwa ndzia. | Il y a des pierres sur le chemin. | 2. V̄utsoka usikini ntsiju v̄anu. | Il y aura de la pauvreté sur ce pays. | 3. V̄uka watru wengi. | Il y avait beaucoup de gens. | 4. V̄uka mufalume akohiriwa Mawana... | Il était une fois un roi qui s'appelait Mawana. | 5. Mwaha jana v̄uwashiwa nyumba zini. | L'année dernière on a construit ces maisons. | 1. Uju mwa mwiri. | en haut de l'arbre. | 2. Utsini mwa malavu. | sous (de) les feuilles. | 3. Nyuma mwa inyumba. | derrière (de) la maison. | 1. Atsoketsi ha mushe wahe. | Il sera chez sa femme. | 2. Nisendra ha mayangu. | Je vais chez ma mère. | 3. Ɗagoni ha Mutsamboro. | Dans le village de Mtsamboro. | 4. Na mashairi yaho, uakonimbia mitsana mauku ha unitsitsiya. | Et les poésies que vous me chantiez jours et nuits pour me bercer. | 1. Ɗagoni hanyu. | Dans votre village. | 2. Moyoni hangu. | Dans mon cœur. | 1. Mukiri wa mbeli mwa hatru. | La mosquée est en face de chez nous. | 2. V̄av̄o ɗe hangu. | Ici c'est chez moi. | 1. Imbwa ilala v̄wendze. | Le chien dort à l'extérieur. | 2. Musafara wa mwendze. | Un voyage à l'étranger. | Wamulishi v̄otsi mutsangaju v̄ale. | Ils l'ont laissé par terre, là sur le sable. | LIEU | Proximité | Eloignement | Référence | CLASSE | Lieu précis | V̄ANU       ici | V̄ALE       là-bas | V̄AV̄O    là | Classe 16 | Lieu imprécis | HUNU  par ici | HULE   par là-bas | OHO    par là | Classe 17 | 1. V̄ahanu v̄ale. | Cet endroit là-bas. | 2. Mutsangaju v̄ale. | Sur le sable là. | 3. Duniani v̄anu. | En ce bas monde. | 4. Ɗagoni hao v̄ale. | Dans leur village là. | 5. Hari mwa watru wale v̄ale. | Parmi ces personnes-là. | 6. Hetsi zisahani uju v̄av̄o ! | Pose les assiettes là-dessus. | 7. Tsizitria moni v̄av̄o. | Je les ai mises là-dedans. | batata | patate | ndrimu | citron | hiliki | cardamome | ntsohole | riz | karafu | clou de girofle | tomati | tomate | manga | mangue | trovi | banane verte | nadzi | noix de coco | vilivili | poivre | nanasi | ananas | zabibu | raisin | Chapitre précédent | Chapitre suivant | Table des matières
V̄ahanu  v̄uzuri. | un bel endroit.
V̄ahanu  v̄udu. | un endroit noir.
V̄ahanu  v̄wema. | un bon endroit.
V̄ahanu  v̄wangina. | un autre endroit.
V̄ahanu  v̄wa trotro. | un endroit boueux.
V̄WA | il y a
V̄UTSOKA | il y aura
V̄UKA | il y avait, "il était une fois..."
1. V̄wa mawe harimwa ndzia. | Il y a des pierres sur le chemin.
2. V̄utsoka usikini ntsiju v̄anu. | Il y aura de la pauvreté sur ce pays.
3. V̄uka watru wengi. | Il y avait beaucoup de gens.
4. V̄uka mufalume akohiriwa Mawana... | Il était une fois un roi qui s'appelait Mawana.
5. Mwaha jana v̄uwashiwa nyumba zini. | L'année dernière on a construit ces maisons.
1. Uju mwa mwiri. | en haut de l'arbre.
2. Utsini mwa malavu. | sous (de) les feuilles.
3. Nyuma mwa inyumba. | derrière (de) la maison.
1. Atsoketsi ha mushe wahe. | Il sera chez sa femme.
2. Nisendra ha mayangu. | Je vais chez ma mère.
3. Ɗagoni ha Mutsamboro. | Dans le village de Mtsamboro.
4. Na mashairi yaho, uakonimbia mitsana mauku ha unitsitsiya. | Et les poésies que vous me chantiez jours et nuits pour me bercer.
1. Ɗagoni hanyu. | Dans votre village.
2. Moyoni hangu. | Dans mon cœur.
1. Mukiri wa mbeli mwa hatru. | La mosquée est en face de chez nous.
2. V̄av̄o ɗe hangu. | Ici c'est chez moi.
1. Imbwa ilala v̄wendze. | Le chien dort à l'extérieur.
2. Musafara wa mwendze. | Un voyage à l'étranger.
Wamulishi v̄otsi mutsangaju v̄ale. | Ils l'ont laissé par terre, là sur le sable.
LIEU | Proximité | Eloignement | Référence | CLASSE
Lieu précis | V̄ANU       ici | V̄ALE       là-bas | V̄AV̄O    là | Classe 16
Lieu imprécis | HUNU  par ici | HULE   par là-bas | OHO    par là | Classe 17
1. V̄ahanu v̄ale. | Cet endroit là-bas.
2. Mutsangaju v̄ale. | Sur le sable là.
3. Duniani v̄anu. | En ce bas monde.
4. Ɗagoni hao v̄ale. | Dans leur village là.
5. Hari mwa watru wale v̄ale. | Parmi ces personnes-là.
6. Hetsi zisahani uju v̄av̄o ! | Pose les assiettes là-dessus.
7. Tsizitria moni v̄av̄o. | Je les ai mises là-dedans.
batata | patate | ndrimu | citron
hiliki | cardamome | ntsohole | riz
karafu | clou de girofle | tomati | tomate
manga | mangue | trovi | banane verte
nadzi | noix de coco | vilivili | poivre
nanasi | ananas | zabibu | raisin
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 45,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 45.",
    content: `

Chapitre 46 - Les Verbes : L'Accompli Absolu

Ce temps, qui est le seul vrai temps composé en shimaore, sert à parler d'une action définitivement acquise dans le passé.
On le traduit en français par un passé composé ou un plus-que-parfait.

 1. FORME AFFIRMATIVE : 

Elle est formée de 2 verbes juxtaposés : l'auxiliaire UKA (= être) conjugué à  l'ACCOMPLI, suivi du verbe principal, également conjugué à l'ACCOMPLI.
L'auxiliaire, ainsi que le verbe principal, sont chacun précédés de leur préfixe sujet.

 VERBE "UKA" à L'ACCOMPLI // VERBE PRINCIPAL à L'ACCOMPLI 

MODÈLE :      UENDRA    =  aller









TSIKA  
TSIENDRE
-> Tsika tsiendre
j'étais allé
UKA  
UENDRE
-> Uka uendre
tu étais allé
AKA  
AENDRE
-> Aka aendre
il / elle était allé
RIKA  
RIENDRE
-> Rika riendre
nous étions allés
MUKA  
MUENDRE
-> Muka muendre
vous étiez allés
WAKA  
WAENDRE
-> Waka waendre
ils / elles étaient allés



EXEMPLES : 



1.Tsika tsino maji.
J'avais bu de l'eau.
2. Uka ukodzo.
Tu étais blessé.
3. Aka arenge ɓwe ɓole.
Il avait pris une grosse pierre.
4. Rika rinunua trovi.
Nous avions acheté des bananes.
5. Muka mulawa malavuni.
Vous étiez partis à la campagne.
6. Wandzani wangu waka wanihiri jana.
Mes amis m'ont appelé hier.


 2. FORME NÉGATIVE : 

L'auxiliaire  UKA  est conjugué à  l'ACCOMPLI NÉGATIF, tandis que le verbe principal se met à la forme affirmative du PASSÉ RELATIF.
L'auxiliaire, ainsi que le verbe principal, sont chacun précédés de leur préfixe sujet.

 VERBE "UKA" à L'ACCOMPLI NÉGATIF // VERBE PRINCIPAL au RELATIF PASSÉ 

MODÈLE :      UENDRA    =  aller








TSAKA  
NAENDRA
-> Tsaka naendra
je n'étais pas allé
KWAKA  
UAENDRA-> Kwaka uaendra
tu n'étais pas allé
KAKA  
AENDRA-> Kaka aendra
il / elle n'était pas allé
KARAKA  
RAENDRA-> Karaka raendra
nous n'étions pas allés
KAMWAKA  
MWAENDRA-> Kamwaka mwaendra
vous n'étiez pas allés
KAWAKA  
WAENDRA-> Kawaka waendra
ils / elles n'étaient pas allés


EXEMPLES : 


1. Karaka ranunua trovi.
Nous n'avions pas acheté de bananes.
2. Kamwaka mwalawa malavuni.
Vous n'étiez pas partis à la campagne.
3. Wandzani wangu kawaka wanihiri jana.
Mes amis ne m'ont pas appelé hier.
4. Mwana kaka ala shahula.
L'enfant n'avait pas mangé.



VOCABULAIRE


Udai
réclamer
Uodza
se répandre, étaler
Udjiri
se passer, arriver
Ustahamili
endurer
Uɗungamana
accompagner
Utamani
désirer
Ufanana
se ressembler
Utekeleza
faire une déclaration
Uhafadhwi
protéger
Utsonga
harceler, tracasser
Uheana
faire l'amour
Uzuru
visiter


EXERCICES

EXERCICE 1 : Traduisez en shimaore :


J'étais allé, j'avais pris, j'étais parti, j'avais acheté, j'avais visité, il avait réclamé, il avait déclaré, il avait harcelé, il avait visité, il avait terminé,  nous avions accompagné, nous nous étions entraidés, nous nous étions quittés, nous nous étions mis d'accord, ils s'étaient disputés,    ils avaient félicité, elles avaient pleuré, ils s'étaient rencontrés, ils avaient tué, j'avais désiré.
Nous n'étions pas allés, je n'étais pas parti, ils n'avaient pas acheté, tu n'avais pas pleuré, nous n'avions pas visité, elle n'était pas contente, tu n'avais pas réclamé, je n'avais pas fini, il n'avait pas utilisé, il n'avait pas prospéré.


EXERCICE 2 : Traduisez en français :



Aka aendre malavuni.
Rika ranunua marundra ɓazari.
Uka uendre dzaho weke.
Nika nimreme umwidzi.
Tsika tsifikiri.
Kawaka ranunua trovi wala muhogo.
Tsaka naula shahula rangu asuɓuhi.
Tsaka najiviwa.
Kaka avuna muhogo ha siɓaɓu ya vua shashi.
Karaka raisa hazi zatru.




Chapitre précédentChapitre suivantTable des matières | TSIKA | TSIENDRE | -> Tsika tsiendre | j'étais allé | UKA | UENDRE | -> Uka uendre | tu étais allé | AKA | AENDRE | -> Aka aendre | il / elle était allé | RIKA | RIENDRE | -> Rika riendre | nous étions allés | MUKA | MUENDRE | -> Muka muendre | vous étiez allés | WAKA | WAENDRE | -> Waka waendre | ils / elles étaient allés | 1.Tsika tsino maji. | J'avais bu de l'eau. | 2. Uka ukodzo. | Tu étais blessé. | 3. Aka arenge ɓwe ɓole. | Il avait pris une grosse pierre. | 4. Rika rinunua trovi. | Nous avions acheté des bananes. | 5. Muka mulawa malavuni. | Vous étiez partis à la campagne. | 6. Wandzani wangu waka wanihiri jana. | Mes amis m'ont appelé hier. | TSAKA | NAENDRA | -> Tsaka naendra | je n'étais pas allé | KWAKA | UAENDRA | -> Kwaka uaendra | tu n'étais pas allé | KAKA | AENDRA | -> Kaka aendra | il / elle n'était pas allé | KARAKA | RAENDRA | -> Karaka raendra | nous n'étions pas allés | KAMWAKA | MWAENDRA | -> Kamwaka mwaendra | vous n'étiez pas allés | KAWAKA | WAENDRA | -> Kawaka waendra | ils / elles n'étaient pas allés | 1. Karaka ranunua trovi. | Nous n'avions pas acheté de bananes. | 2. Kamwaka mwalawa malavuni. | Vous n'étiez pas partis à la campagne. | 3. Wandzani wangu kawaka wanihiri jana. | Mes amis ne m'ont pas appelé hier. | 4. Mwana kaka ala shahula. | L'enfant n'avait pas mangé. | Udai | réclamer | Uodza | se répandre, étaler | Udjiri | se passer, arriver | Ustahamili | endurer | Uɗungamana | accompagner | Utamani | désirer | Ufanana | se ressembler | Utekeleza | faire une déclaration | Uhafadhwi | protéger | Utsonga | harceler, tracasser | Uheana | faire l'amour | Uzuru | visiter | Chapitre précédent | Chapitre suivant | Table des matières
TSIKA | TSIENDRE | -> Tsika tsiendre | j'étais allé
UKA | UENDRE | -> Uka uendre | tu étais allé
AKA | AENDRE | -> Aka aendre | il / elle était allé
RIKA | RIENDRE | -> Rika riendre | nous étions allés
MUKA | MUENDRE | -> Muka muendre | vous étiez allés
WAKA | WAENDRE | -> Waka waendre | ils / elles étaient allés
1.Tsika tsino maji. | J'avais bu de l'eau.
2. Uka ukodzo. | Tu étais blessé.
3. Aka arenge ɓwe ɓole. | Il avait pris une grosse pierre.
4. Rika rinunua trovi. | Nous avions acheté des bananes.
5. Muka mulawa malavuni. | Vous étiez partis à la campagne.
6. Wandzani wangu waka wanihiri jana. | Mes amis m'ont appelé hier.
TSAKA | NAENDRA | -> Tsaka naendra | je n'étais pas allé
KWAKA | UAENDRA | -> Kwaka uaendra | tu n'étais pas allé
KAKA | AENDRA | -> Kaka aendra | il / elle n'était pas allé
KARAKA | RAENDRA | -> Karaka raendra | nous n'étions pas allés
KAMWAKA | MWAENDRA | -> Kamwaka mwaendra | vous n'étiez pas allés
KAWAKA | WAENDRA | -> Kawaka waendra | ils / elles n'étaient pas allés
1. Karaka ranunua trovi. | Nous n'avions pas acheté de bananes.
2. Kamwaka mwalawa malavuni. | Vous n'étiez pas partis à la campagne.
3. Wandzani wangu kawaka wanihiri jana. | Mes amis ne m'ont pas appelé hier.
4. Mwana kaka ala shahula. | L'enfant n'avait pas mangé.
Udai | réclamer | Uodza | se répandre, étaler
Udjiri | se passer, arriver | Ustahamili | endurer
Uɗungamana | accompagner | Utamani | désirer
Ufanana | se ressembler | Utekeleza | faire une déclaration
Uhafadhwi | protéger | Utsonga | harceler, tracasser
Uheana | faire l'amour | Uzuru | visiter
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 46,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 46.",
    content: `

Chapitre 47 - Les Verbes : Le Conditionnel

On emploie au CONDITIONNEL le même infixe de temps  -TSO-  que pour le FUTUR.
Ce qui distingue ces deux temps l'un de l'autre est l'adjonction de l'infixe de contingence -A- placé entre le préfixe sujet et le marqueur de temps  -TSO-.
Ceci a pour résultat de modifier les pronoms sujets, comme à l'imparfait. (Voir : Chapitre 32.)
Les emplois du conditionnel en shimaore sont comparables à ceux du français : suggestion polie et formulation d'une hypothèse réelle au passé.

 1. FORME AFFIRMATIVE : 

 PRÉFIXE SUJET + A + TSO + RACINE VERBALE 

MODÈLE :      UV̄ENDZA = aimer








NA-TSO-V̄ENDZA   
-> Natsov̄endza
j'aimerais
UA-TSO-V̄ENDZA   
-> Uatsov̄endza
tu aimerais
A-TSO-V̄ENDZA   
-> Atsov̄endza
il / elle aimerait
RA-TSO-V̄ENDZA   
-> Ratsov̄endza
nous aimerions
MWA-TSO-V̄ENDZA   
-> Mwatsov̄endza
vous aimeriez
WA-TSO-V̄ENDZA   
-> Watsov̄endza
ils / elles aimeraient



 2. FORME NÉGATIVE : 

 PRÉFIXE SUJET NÉGATIF+ A + TSO + RACINE VERBALE 

MODÈLE :      UV̄ENDZA = aimer







TSA-TSO-V̄ENDZA   
-> Tsatsov̄endza
je n'aimerais pas
KWA-TSO-V̄ENDZA   
-> Kwatsov̄endza
tu n'aimerais pas
KA-TSO-V̄ENDZA   
-> Katsov̄endza
il / elle n'aimerait pas
KARA-TSO-V̄ENDZA   
-> Karatsov̄endza
nous n'aimerions pas
KAMWA-TSO-V̄ENDZA   
-> Kamwatsov̄endza
vous n'aimeriez pas
KAWA-TSO-V̄ENDZA   
-> Kawatsov̄endza
ils / elles n'aimeraient pas



VOCABULAIRE


Ɓewe, ma-
bouc
Kulukulu, ma-
dinde, dindon
Dzukutsi, ma-
canard
Paha, mav̄aha
chat
Furudji, ma-
sauterelle
Tarundru, marundru
caméléon
Kalafuba, ma-
crabe
Trambwi, marambwi
scolopendre
Kalalawi, mahalalawi
cafard, cancrelas
Trutri, marutri
souris
Kukuyi, ma-
coq
V̄ungov̄ungo, ma-
guèpe


EXERCICES

EXERCICE 1 : Traduisez en shimaore :


Je ferais, j'écrirais, je mangerais, j'apprendrais, tu te souviendrais, tu guérirais, elle nourrirait,  elle laverait, il enseignerait, nous viendrions, nous prendrions, vous enverriez,
vous attraperiez, ils voleraient, ils comprendraient, il ne volerait pas,  tu ne comprendrais pas, elle ne lirait pas, nous ne viendrions pas,     ils n'iraient pas.


EXERCICE 2 : Traduisez en français :


Natsov̄uma, natsotseha, watsolima, watsofanya haraka, atsolewa, atsoheya, ratsotembea, ratsoria, mwatsolia, mwatsotsahua, watsoshindra, watsovulikia, tsatsoria,  tsatsoãngadza, kwatsolindra, kwatsopiha, katsosubutu, karatsodjereɓu, kamwatsoregeya, kawatsoliv̄a.



Chapitre précédentChapitre suivantTable des matières | NA-TSO-V̄ENDZA | -> Natsov̄endza | j'aimerais | UA-TSO-V̄ENDZA | -> Uatsov̄endza | tu aimerais | A-TSO-V̄ENDZA | -> Atsov̄endza | il / elle aimerait | RA-TSO-V̄ENDZA | -> Ratsov̄endza | nous aimerions | MWA-TSO-V̄ENDZA | -> Mwatsov̄endza | vous aimeriez | WA-TSO-V̄ENDZA | -> Watsov̄endza | ils / elles aimeraient | TSA-TSO-V̄ENDZA | -> Tsatsov̄endza | je n'aimerais pas | KWA-TSO-V̄ENDZA | -> Kwatsov̄endza | tu n'aimerais pas | KA-TSO-V̄ENDZA | -> Katsov̄endza | il / elle n'aimerait pas | KARA-TSO-V̄ENDZA | -> Karatsov̄endza | nous n'aimerions pas | KAMWA-TSO-V̄ENDZA | -> Kamwatsov̄endza | vous n'aimeriez pas | KAWA-TSO-V̄ENDZA | -> Kawatsov̄endza | ils / elles n'aimeraient pas | Ɓewe, ma- | bouc | Kulukulu, ma- | dinde, dindon | Dzukutsi, ma- | canard | Paha, mav̄aha | chat | Furudji, ma- | sauterelle | Tarundru, marundru | caméléon | Kalafuba, ma- | crabe | Trambwi, marambwi | scolopendre | Kalalawi, mahalalawi | cafard, cancrelas | Trutri, marutri | souris | Kukuyi, ma- | coq | V̄ungov̄ungo, ma- | guèpe | Chapitre précédent | Chapitre suivant | Table des matières
NA-TSO-V̄ENDZA | -> Natsov̄endza | j'aimerais
UA-TSO-V̄ENDZA | -> Uatsov̄endza | tu aimerais
A-TSO-V̄ENDZA | -> Atsov̄endza | il / elle aimerait
RA-TSO-V̄ENDZA | -> Ratsov̄endza | nous aimerions
MWA-TSO-V̄ENDZA | -> Mwatsov̄endza | vous aimeriez
WA-TSO-V̄ENDZA | -> Watsov̄endza | ils / elles aimeraient
TSA-TSO-V̄ENDZA | -> Tsatsov̄endza | je n'aimerais pas
KWA-TSO-V̄ENDZA | -> Kwatsov̄endza | tu n'aimerais pas
KA-TSO-V̄ENDZA | -> Katsov̄endza | il / elle n'aimerait pas
KARA-TSO-V̄ENDZA | -> Karatsov̄endza | nous n'aimerions pas
KAMWA-TSO-V̄ENDZA | -> Kamwatsov̄endza | vous n'aimeriez pas
KAWA-TSO-V̄ENDZA | -> Kawatsov̄endza | ils / elles n'aimeraient pas
Ɓewe, ma- | bouc | Kulukulu, ma- | dinde, dindon
Dzukutsi, ma- | canard | Paha, mav̄aha | chat
Furudji, ma- | sauterelle | Tarundru, marundru | caméléon
Kalafuba, ma- | crabe | Trambwi, marambwi | scolopendre
Kalalawi, mahalalawi | cafard, cancrelas | Trutri, marutri | souris
Kukuyi, ma- | coq | V̄ungov̄ungo, ma- | guèpe
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 47,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 47.",
    content: `

Chapitre 48 - L'Hypothèse

Tout comme en français, on distingue 3 degrés d'hypothèse en shimaore :
ce qui est éventuel, ou hypothèse réelle du présent.
ce qui est hypothétique, ou hypothèse réelle du passé.
ce qui est spéculatif, ou hypothèse irréelle du passé.

 1. L'HYPOTHÈSE RÉELLE DU PRÉSENT : 

On parle d'un fait qui n'a pas encore eu lieu, et dont le degré de réalisation probable est fort.
On utilise le mot  NAHIKA  ou  NEKA  (= si...)  pour introduire l'hypothèse réelle du présent.
NAHIKA (NEKA) est placé devant le 1er verbe.
Dans ce type de phrase, l'hypothèse est exprimée au PRÉSENT ou à l'ACCOMPLI, tandis que le 2ème
verbe est au PRÉSENT ou au FUTUR.

EXEMPLES : 



1. Neka usulawa, nitsolawa wajau.
                 Présent        Futur
Si tu pars, je partirai aussi.
 
2. Nahika usuja hangu, nitsohuv̄a marike.
               Présent                Futur
Si tu viens chez moi, je te donnerai de l'argent.
 
3. Neka uno ɗalao lilo, utsov̄ona.
          Accompli                             Futur
Si tu prends ce médicament, tu guériras.
 
4. Neka atsaha marike zizo muv̄ezo.
             Accompli                        Impératif
S'il veut cet argent, donne-le lui.
 
5. Nahika ɗe halilo, karitsoafikana ata suku moja.
            Présent                      Futur
Si c'est comme ça, nous ne pourrons nous entendre.  
6. Neka urahafu wa maji una shaka, uyarohotse.
                                        Présent               impératif
Si la propreté de l'eau est douteuse, faites-la bouillir.



 2. L'HYPOTHÈSE RÉELLE DU PASSÉ : 

On parle d'un fait qui n'a pas encore eu lieu, mais dont le degré de réalisation probable est faible.
On utilise le mot  DJELI  ou  NADJELI  (= si) pour introduire l'hypothèse passée.
Le mot  DJELI  est probablement dérivé du marqueur de temps "-NGALI-" du conditionnel passé du swahili.
DJELI  (NADJELI)  n'est pas intégré au verbe, mais placé devant celui-ci.
Dans ce type d'hypothèse, le 1er verbe est à l'IMPARFAIT, tandis que le 2ème verbe est au CONDITIONNEL, comme en français.

EXEMPLES : 



1. Nadjeli rakoshindra, ratsoendra.
                    Imparfait          Conditionnel
Si nous pouvions, nous partirions.
 
2. Nadjeli akotsaha, atsoshindra.
                    Imparfait      Conditionnel
S'il le voulait, il le pourrait.
 
3. Djeli akoja, atsomwona.
           Imparfait   Conditionnel
S'il venait, il le verrait.
 
4. Djeli akotsaha marike zizo, uatsomuv̄azo ?
               Imparfait                                Conditionnel
S'il voulait cet argent, le lui donnerais-tu ?



 3. L'HYPOTHÈSE IRRÉELLE DU PASSÉ : 

On fait ici une spéculation intellectuelle, un retour en arrière sur une action qui a déjà eu lieu, et dont on envisage un autre déroulement. Le degré de réalisation de l'hypothèse est nul.
Comme  pour  l'hypothèse  réelle  du passé,  "si" est exprimé par le mot  NADJELI  ou  DJELI. Il est
placé devant le 1er verbe conjugué à l'ACCOMPLI ABSOLU. Le 2ème  verbe est au CONDITIONNEL ou au FUTUR ACCOMPLI. (L'équivalent d'un futur antérieur en français.)

EXEMPLES : 



1. Djeli rika rimuvulishia, atsoka arisaidia.
                Accompli absolu      Futur accompli
Si nous l'avions écouté, il nous aurait aidés.
 
2. Djeli mwana kaka aliya, tsatsomuv̄a lidzia.
                  Accompli absolu    Conditionnel
Si le bébé n'avait pas pleuré, je ne lui aurais  pas donné de lait.




VOCABULAIRE


Ãkiba
l'économie, l'épargne
Namna
une sorte, une espèce
Hali
un état, une situation
Siri
un secret
Kusudi
l'intention
Taia
le comportement
Luha / Luga
une langue, un idiome
Tafauti
la différence
Mali
la fortune
Taharaki
une bêtise
Mara
une fois
Trongo
une affaire, une chose

EXERCICES

EXERCICE 1 : Traduisez en shimaore :



Si tu vas chez ton père, il te donnera de l'argent.
Si ma petite amie part, je partirai avec elle.
Si tu ne prends pas ce médicament, tu mourras.
Si c'est comme ça, alors nous sommes d'accord.
Si j'avais de la fortune, je partirais à l'étranger.
Si tu venais à la maison, tu verrais tes parents.
Si elle voulait partir, lui donnerais-tu la permission ?
Si le bébé avait pleuré, je l'aurais entendu.
S'il veut voler cet argent, attrape-le.
Si vous muaviez écouté, vous seriez riches maintenant.


EXERCICE 2 : Traduisez en français :



Neka usufanya musafara wa v̄ondze, utsokia luha nyengi zatafautiana.
Nahika kusufua nguo ha uzuri, zitsoka rasa na trotro.
Nahika tsisuhima av̄asa nitsohomoja uwaswili hazini.
Neka usendrelea ufanya hazi halilo, utsolemewa.
Nahika kusufaulu mara ya handra, djereɓu tsena mara yangina.
Nadjeli nakodjereɓu ha nguvu, natsomalidza hazi iyo haraka.
Nadjeli wakoja leo, natsohupishia shahula ndzuzuri.
Nadjeli wakosoma gazeti lini, watsojua haɓari piya za dunia.
Djeli uka uvumua, kwatsolemewa.
Djeli ika inya vua jana, natsolima shamba langu.




Chapitre précédentChapitre suivantTable des matières | 1. Neka usulawa, nitsolawa wajau. | Présent        Futur | Si tu pars, je partirai aussi. |  | 2. Nahika usuja hangu, nitsohuv̄a marike. | Présent                Futur | Si tu viens chez moi, je te donnerai de l'argent. |  | 3. Neka uno ɗalao lilo, utsov̄ona. | Accompli                             Futur | Si tu prends ce médicament, tu guériras. |  | 4. Neka atsaha marike zizo muv̄ezo. | Accompli                        Impératif | S'il veut cet argent, donne-le lui. |  | 5. Nahika ɗe halilo, karitsoafikana ata suku moja. | Présent                      Futur | Si c'est comme ça, nous ne pourrons nous entendre. |  | 6. Neka urahafu wa maji una shaka, uyarohotse. | Présent               impératif | Si la propreté de l'eau est douteuse, faites-la bouillir. | 1. Nadjeli rakoshindra, ratsoendra. | Imparfait          Conditionnel | Si nous pouvions, nous partirions. |  | 2. Nadjeli akotsaha, atsoshindra. | Imparfait      Conditionnel | S'il le voulait, il le pourrait. |  | 3. Djeli akoja, atsomwona. | Imparfait   Conditionnel | S'il venait, il le verrait. |  | 4. Djeli akotsaha marike zizo, uatsomuv̄azo ? | Imparfait                                Conditionnel | S'il voulait cet argent, le lui donnerais-tu ? | 1. Djeli rika rimuvulishia, atsoka arisaidia. | Accompli absolu      Futur accompli | Si nous l'avions écouté, il nous aurait aidés. |  | 2. Djeli mwana kaka aliya, tsatsomuv̄a lidzia. | Accompli absolu    Conditionnel | Si le bébé n'avait pas pleuré, je ne lui aurais  pas donné de lait. | Ãkiba | l'économie, l'épargne | Namna | une sorte, une espèce | Hali | un état, une situation | Siri | un secret | Kusudi | l'intention | Taia | le comportement | Luha / Luga | une langue, un idiome | Tafauti | la différence | Mali | la fortune | Taharaki | une bêtise | Mara | une fois | Trongo | une affaire, une chose | Chapitre précédent | Chapitre suivant | Table des matières
1. Neka usulawa, nitsolawa wajau.
Présent        Futur
Si tu pars, je partirai aussi.

2. Nahika usuja hangu, nitsohuv̄a marike.
Présent                Futur
Si tu viens chez moi, je te donnerai de l'argent.

3. Neka uno ɗalao lilo, utsov̄ona.
Accompli                             Futur
Si tu prends ce médicament, tu guériras.

4. Neka atsaha marike zizo muv̄ezo.
Accompli                        Impératif
S'il veut cet argent, donne-le lui.

5. Nahika ɗe halilo, karitsoafikana ata suku moja.
Présent                      Futur
Si c'est comme ça, nous ne pourrons nous entendre.

6. Neka urahafu wa maji una shaka, uyarohotse.
Présent               impératif
Si la propreté de l'eau est douteuse, faites-la bouillir.
1. Nadjeli rakoshindra, ratsoendra.
Imparfait          Conditionnel
Si nous pouvions, nous partirions.

2. Nadjeli akotsaha, atsoshindra.
Imparfait      Conditionnel
S'il le voulait, il le pourrait.

3. Djeli akoja, atsomwona.
Imparfait   Conditionnel
S'il venait, il le verrait.

4. Djeli akotsaha marike zizo, uatsomuv̄azo ?
Imparfait                                Conditionnel
S'il voulait cet argent, le lui donnerais-tu ?
1. Djeli rika rimuvulishia, atsoka arisaidia.
Accompli absolu      Futur accompli
Si nous l'avions écouté, il nous aurait aidés.

2. Djeli mwana kaka aliya, tsatsomuv̄a lidzia.
Accompli absolu    Conditionnel
Si le bébé n'avait pas pleuré, je ne lui aurais  pas donné de lait.
Ãkiba | l'économie, l'épargne | Namna | une sorte, une espèce
Hali | un état, une situation | Siri | un secret
Kusudi | l'intention | Taia | le comportement
Luha / Luga | une langue, un idiome | Tafauti | la différence
Mali | la fortune | Taharaki | une bêtise
Mara | une fois | Trongo | une affaire, une chose
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 48,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 48.",
    content: `

Chapitre 49 - Les Auxiliaires Verbaux

Les auxiliaires verbaux, accolés au radical verbal, relativisent l'action exprimée par le verbe par rapport à un contexte spacio-temporel plus ou moins large, ou par rapport à une autre action.
Les auxiliaires verbaux sont, soit des formes verbales contractées :



-ONDRO-
du verbe
UENDRA
= aller
-JO-
du verbe
UJA 
= venir
-PARO-
du verbeUPARA
= trouver, obtenir, avoir



soit des particules locatives à sens temporel :



-HI-
= en, quand, si
(Classe 17)
-MO-
= quand, chaque fois que
(Classe 18)



 1. L'AUXILIAIRE VERBAL  -ONDRO- : 

L'auxiliaire verbal  -ONDRO-  est une forme contractée du verbe ENDRA = aller.
Cet auxiliaire indique que l'action s'effectue avec un mouvement d'éloignement.
L'auxiliaire  -ONDRO- peut être employé de façon autonome ou se trouver associé à diverses marques
de temps :

 PRÉFIXE SUJET + TEMPS + ONDRO + RACINE VERBALE 

MODÈLE :    UNUNUA  = acheter






  Présent :
NI-SU-ENDRA-UNUNUA  
-> nisondronunua
je vais acheter
U-SU-ENDRA-UNUNUA  
-> usondronunua
tu vas acheter
A-SU-ENDRA-UNUNUA  
-> asondronunua
il / elle va acheter
RI-SU-ENDRA-UNUNUA  
-> risondronunua
nous allons acheter
MU-SU-ENDRA-UNUNUA  
-> musondronunua
vous allez acheter
WA-SU-ENDRA-UNUNUA  
-> wasondronunua
ils / elles vont acheter
  Imparfait :
NI-A-KO-ENDRA-UNUNUA  
-> nakondronunua
j'allais acheter
U-A-KO-ENDRA-UNUNUA  
-> uakondronunua
tu allais acheter
A-A-KO-ENDRA-UNUNUA  
-> akondronunua
il / elle allait acheter
RI-A-KO-ENDRA-UNUNUA  
-> rakondronunua
nous allions acheter
MU-A-KO-ENDRA-UNUNUA  
-> mwakondronunua
vous alliez acheter
WA-A-KO-ENDRA-UNUNUA  
-> wakondronunua
ils / elles allaient acheter
  Futur :
NI-TSO-ENDRA-UNUNUA  
-> nitsondronunua
j'irai acheter
U-TSO-ENDRA-UNUNUA  
-> utsondronunua
tu iras acheter
A-TSO-ENDRA-UNUNUA  
-> atsondronunua
il / elle ira acheter
RI-TSO-ENDRA-UNUNUA  
-> ritsondronunua
nous irons acheter
MU-TSO-ENDRA-UNUNUA  
-> mutsondronunua 
vous irez acheter
WA-TSO-ENDRA-UNUNUA  
-> watsondronunua
ils / elles iront acheter


QUELQUES EXEMPLES D'EMPLOI : 



1. Nakondromurema.
J'allais le frapper.
2. Wasondrofua (nguo).
Elles sont allées laver le linge.
3. Akondrotsaha kuni.
Il allait chercher du bois.
4. Utsondrowulawa.
Tu vas te faire tuer.



 2. L'AUXILIAIRE VERBAL  -JO- : 

L'auxiliaire verbal -JO- est une forme contractée du verbe  UJA = venir.
Il indique qu'une action se fait avec un mouvement de rapprochement.
C'est le mouvement inverse de celui indiqué par l'auxiliaire verbal  -ONDRO-.

 PRÉFIXE SUJET (+ TEMPS) + JO + RACINE VERBALE 

L'auxiliaire verbal -JO- peut être employé de façon autonome, ou associé à une marque de temps, comme le PRÉSENT ACTUEL ou le FUTUR.

MODÈLE :      UFANYA = faire


Présent :
NI-SU-JA-UFANYA
nisujofanya
je viens faire
 
U-SU-JA-UFANYA
usujofanya
tu viens faire
 
A-SU-JA-UFANYA
asujofanya
il / elle vient faire



Futur :
NI-TSO-JA-UFANYA
nitsojofanya
je viendrai faire
 
U-TSO-JA-UFANYA
utsojofanya
tu viendras faire
 
A-TSO-JA-UFANYA
atsojofanya
il / elle viendra faire


EXEMPLE : 

Nisujofanya ihazi.
Je viens faire le travail.



VOCABULAIRE


damu
sang
ndrevu
barbe
hanyo
bouche
ngozi
peau
mengo
dos
nyele
cheveux
mimba
ventre, grossesse
pumu
souffle, respiration
mo
cœur
sura
visage
mpua / pua
nez
tsingo
cou


EXERCICES

EXERCICE 1 : Traduisez en shimaore :


Je vais acheter, tu vas suivre, il va partir, nous allons obtenir, vous allez frapper, ils vont voir, je viens faire, tu viens cuisiner, elle vient apprendre, nous venons nous asseoir,     vous venez terminer, ils viennent se battre, j'irai pêcher, tu iras attraper, il ira voler, nous allions acheter, vous alliez faire, ils allaient étudier, je viendrai faire,  il viendra mettre la table.


EXERCICE 2 : Traduisez en français :



Alawa akondroloa ɓaharini.
Ulawa ukondrotsaha kuni.
Walawa wasondrofua muroni.
Alawa asondromidza wanyahe.
Nitsondrorengeledza fuko la ulala langu.
Mutru ɓaɓa ajofanya hazi asuɓuhi.
Watru mama wasujovashidza wadjeni.
Wanatsa watsojowana mav̄areni.
Mwidzi atsojohiba moni na inyumba uku.
Nitsojohuona meso.




Chapitre précédentChapitre suivantTable des matières | -ONDRO- | du verbe | UENDRA | = aller | -JO- | du verbe | UJA | = venir | -PARO- | du verbe | UPARA | = trouver, obtenir, avoir | -HI- | = en, quand, si | (Classe 17) | -MO- | = quand, chaque fois que | (Classe 18) | Présent : | NI-SU-ENDRA-UNUNUA | -> nisondronunua | je vais acheter | U-SU-ENDRA-UNUNUA | -> usondronunua | tu vas acheter | A-SU-ENDRA-UNUNUA | -> asondronunua | il / elle va acheter | RI-SU-ENDRA-UNUNUA | -> risondronunua | nous allons acheter | MU-SU-ENDRA-UNUNUA | -> musondronunua | vous allez acheter | WA-SU-ENDRA-UNUNUA | -> wasondronunua | ils / elles vont acheter | Imparfait : | NI-A-KO-ENDRA-UNUNUA | -> nakondronunua | j'allais acheter | U-A-KO-ENDRA-UNUNUA | -> uakondronunua | tu allais acheter | A-A-KO-ENDRA-UNUNUA | -> akondronunua | il / elle allait acheter | RI-A-KO-ENDRA-UNUNUA | -> rakondronunua | nous allions acheter | MU-A-KO-ENDRA-UNUNUA | -> mwakondronunua | vous alliez acheter | WA-A-KO-ENDRA-UNUNUA | -> wakondronunua | ils / elles allaient acheter | Futur : | NI-TSO-ENDRA-UNUNUA | -> nitsondronunua | j'irai acheter | U-TSO-ENDRA-UNUNUA | -> utsondronunua | tu iras acheter | A-TSO-ENDRA-UNUNUA | -> atsondronunua | il / elle ira acheter | RI-TSO-ENDRA-UNUNUA | -> ritsondronunua | nous irons acheter | MU-TSO-ENDRA-UNUNUA | -> mutsondronunua | vous irez acheter | WA-TSO-ENDRA-UNUNUA | -> watsondronunua | ils / elles iront acheter | 1. Nakondromurema. | J'allais le frapper. | 2. Wasondrofua (nguo). | Elles sont allées laver le linge. | 3. Akondrotsaha kuni. | Il allait chercher du bois. | 4. Utsondrowulawa. | Tu vas te faire tuer. | Présent : | NI-SU-JA-UFANYA | nisujofanya | je viens faire |  | U-SU-JA-UFANYA | usujofanya | tu viens faire |  | A-SU-JA-UFANYA | asujofanya | il / elle vient faire | Futur : | NI-TSO-JA-UFANYA | nitsojofanya | je viendrai faire |  | U-TSO-JA-UFANYA | utsojofanya | tu viendras faire |  | A-TSO-JA-UFANYA | atsojofanya | il / elle viendra faire | Nisujofanya ihazi. | Je viens faire le travail. | damu | sang | ndrevu | barbe | hanyo | bouche | ngozi | peau | mengo | dos | nyele | cheveux | mimba | ventre, grossesse | pumu | souffle, respiration | mo | cœur | sura | visage | mpua / pua | nez | tsingo | cou | Chapitre précédent | Chapitre suivant | Table des matières
-ONDRO- | du verbe | UENDRA | = aller
-JO- | du verbe | UJA | = venir
-PARO- | du verbe | UPARA | = trouver, obtenir, avoir
-HI- | = en, quand, si | (Classe 17)
-MO- | = quand, chaque fois que | (Classe 18)
Présent :
NI-SU-ENDRA-UNUNUA | -> nisondronunua | je vais acheter
U-SU-ENDRA-UNUNUA | -> usondronunua | tu vas acheter
A-SU-ENDRA-UNUNUA | -> asondronunua | il / elle va acheter
RI-SU-ENDRA-UNUNUA | -> risondronunua | nous allons acheter
MU-SU-ENDRA-UNUNUA | -> musondronunua | vous allez acheter
WA-SU-ENDRA-UNUNUA | -> wasondronunua | ils / elles vont acheter
Imparfait :
NI-A-KO-ENDRA-UNUNUA | -> nakondronunua | j'allais acheter
U-A-KO-ENDRA-UNUNUA | -> uakondronunua | tu allais acheter
A-A-KO-ENDRA-UNUNUA | -> akondronunua | il / elle allait acheter
RI-A-KO-ENDRA-UNUNUA | -> rakondronunua | nous allions acheter
MU-A-KO-ENDRA-UNUNUA | -> mwakondronunua | vous alliez acheter
WA-A-KO-ENDRA-UNUNUA | -> wakondronunua | ils / elles allaient acheter
Futur :
NI-TSO-ENDRA-UNUNUA | -> nitsondronunua | j'irai acheter
U-TSO-ENDRA-UNUNUA | -> utsondronunua | tu iras acheter
A-TSO-ENDRA-UNUNUA | -> atsondronunua | il / elle ira acheter
RI-TSO-ENDRA-UNUNUA | -> ritsondronunua | nous irons acheter
MU-TSO-ENDRA-UNUNUA | -> mutsondronunua | vous irez acheter
WA-TSO-ENDRA-UNUNUA | -> watsondronunua | ils / elles iront acheter
1. Nakondromurema. | J'allais le frapper.
2. Wasondrofua (nguo). | Elles sont allées laver le linge.
3. Akondrotsaha kuni. | Il allait chercher du bois.
4. Utsondrowulawa. | Tu vas te faire tuer.
Présent : | NI-SU-JA-UFANYA | nisujofanya | je viens faire
 | U-SU-JA-UFANYA | usujofanya | tu viens faire
 | A-SU-JA-UFANYA | asujofanya | il / elle vient faire
Futur : | NI-TSO-JA-UFANYA | nitsojofanya | je viendrai faire
 | U-TSO-JA-UFANYA | utsojofanya | tu viendras faire
 | A-TSO-JA-UFANYA | atsojofanya | il / elle viendra faire
Nisujofanya ihazi. | Je viens faire le travail.
damu | sang | ndrevu | barbe
hanyo | bouche | ngozi | peau
mengo | dos | nyele | cheveux
mimba | ventre, grossesse | pumu | souffle, respiration
mo | cœur | sura | visage
mpua / pua | nez | tsingo | cou
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 49,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 49.",
    content: `

Chapitre 50 - L'Auxiliaire -PARO-

L'auxiliaire verbal -PARO- a le sens de : déjà, jamais ? (anglais : "ever ?") à la forme affirmative, et le sens de : ne... jamais  (anglais : "never") à la forme négative.
L'auxiliaire verbal  -PARO-  s'emploie de façon autonome.

 1. FORME AFFIRMATIVE : 

 PRÉFIXE SUJET + (A)PARO + RACINE VERBALE 

Il existe 2 formes parallèles : -PARO-  et  -APARO-. Cette deuxième forme entraîne une modification
du préfixe sujet, par addition du son "A" :

MODÈLE :     UNUNUA = acheter







-PARO-
-APARO-
 
TSI-PARO-NUNUA      
NA-PARO-NUNUA      
j'ai déjà acheté
U-PARO-NUNUA      
UA-PARO-NUNUA      
tu as déjà acheté
A-PARO-NUNUA      
A-PARO-NUNUA      
il / elle a déjà acheté
RI-PARO-NUNUA      
RA-PARO-NUNUA      
nous avons déjà acheté
MU-PARO-NUNUA      
MWA-PARO-NUNUA      
vous avez déjà acheté
WA-PARO-NUNUA      
WA-PARO-NUNUA      
ils / elles ont déjà acheté


EXEMPLES : 


Mwaparomuona mutru unu ?
Avez-vous déjà vu cet homme-là ?
Nisufikiri amba naparomuona.
Je crois que je l'ai déjà vu.
Tsiparofanya hazi.
J'ai déjà eu l'occasion de travailler.


 2. FORME NÉGATIVE : 

 PRÉF. NÉGATIF + PRÉF. SUJET + APARO + RACINE VERBALE 

MODÈLE :     UNUNUA = acheter






TSA-PARO-NUNUA   
je n'achète jamais.
KUA-PARO-NUNUA   
tu n'achètes jamais.
KA-PARO-NUNUA   
il / elle n'achète jamais.
KARA-PARO-NUNUA   
nous n'achetons jamais.
KAMWA-PARO-NUNUA   
vous n'achetez jamais.
KAWA-PARO-NUNUA   
ils / elles n'achètent jamais.


EXEMPLES : 



Tsaparomuona.
Je ne l'ai jamais vu.
Karaparonunua trovi.
Nous n'avons jamais acheté de bananes.
Kaparola puruku.
Il / elle n'a jamais mangé de porc.



 3. FORME AUGMENTATIVE :  -PARIDZO- : 

EXEMPLES : 



Tsaparidzonwa dite.
Je n'ai jamais bu de thé.
Karaparidzonunua trovi.
Nous n'avons jamais acheté de bananes.
Kaparidzola puruku.
Il / elle n'a jamais mangé de porc.



VOCABULAIRE


Bange (Cl 5)
le haschich
Makao (Cl 6)
une résidence, demeure
Hadisi, ma-
un récit, des --
Manufa (Cl 6)
le profit, les avantages
Jumba, ma-
un bâtiment, des --
Masala (Cl 6)
les épices
Maeledzo (Cl 6)
une explication
Mashindrano
une compétition
Maendreleo (Cl 6)
le progrès
Tangazo, ma-
une diffusion, des --
Mahari (Cl 6)
une dot
Waziri, ma-
un ministre, des --



Chapitre précédentChapitre suivantTable des matières | -PARO- | -APARO- |  | TSI-PARO-NUNUA | NA-PARO-NUNUA | j'ai déjà acheté | U-PARO-NUNUA | UA-PARO-NUNUA | tu as déjà acheté | A-PARO-NUNUA | A-PARO-NUNUA | il / elle a déjà acheté | RI-PARO-NUNUA | RA-PARO-NUNUA | nous avons déjà acheté | MU-PARO-NUNUA | MWA-PARO-NUNUA | vous avez déjà acheté | WA-PARO-NUNUA | WA-PARO-NUNUA | ils / elles ont déjà acheté | Mwaparomuona mutru unu ? | Avez-vous déjà vu cet homme-là ? | Nisufikiri amba naparomuona. | Je crois que je l'ai déjà vu. | Tsiparofanya hazi. | J'ai déjà eu l'occasion de travailler. | TSA-PARO-NUNUA | je n'achète jamais. | KUA-PARO-NUNUA | tu n'achètes jamais. | KA-PARO-NUNUA | il / elle n'achète jamais. | KARA-PARO-NUNUA | nous n'achetons jamais. | KAMWA-PARO-NUNUA | vous n'achetez jamais. | KAWA-PARO-NUNUA | ils / elles n'achètent jamais. | Tsaparomuona. | Je ne l'ai jamais vu. | Karaparonunua trovi. | Nous n'avons jamais acheté de bananes. | Kaparola puruku. | Il / elle n'a jamais mangé de porc. | Tsaparidzonwa dite. | Je n'ai jamais bu de thé. | Karaparidzonunua trovi. | Nous n'avons jamais acheté de bananes. | Kaparidzola puruku. | Il / elle n'a jamais mangé de porc. | Bange (Cl 5) | le haschich | Makao (Cl 6) | une résidence, demeure | Hadisi, ma- | un récit, des -- | Manufa (Cl 6) | le profit, les avantages | Jumba, ma- | un bâtiment, des -- | Masala (Cl 6) | les épices | Maeledzo (Cl 6) | une explication | Mashindrano | une compétition | Maendreleo (Cl 6) | le progrès | Tangazo, ma- | une diffusion, des -- | Mahari (Cl 6) | une dot | Waziri, ma- | un ministre, des -- | Chapitre précédent | Chapitre suivant | Table des matières
-PARO- | -APARO- | 
TSI-PARO-NUNUA | NA-PARO-NUNUA | j'ai déjà acheté
U-PARO-NUNUA | UA-PARO-NUNUA | tu as déjà acheté
A-PARO-NUNUA | A-PARO-NUNUA | il / elle a déjà acheté
RI-PARO-NUNUA | RA-PARO-NUNUA | nous avons déjà acheté
MU-PARO-NUNUA | MWA-PARO-NUNUA | vous avez déjà acheté
WA-PARO-NUNUA | WA-PARO-NUNUA | ils / elles ont déjà acheté
Mwaparomuona mutru unu ? | Avez-vous déjà vu cet homme-là ?
Nisufikiri amba naparomuona. | Je crois que je l'ai déjà vu.
Tsiparofanya hazi. | J'ai déjà eu l'occasion de travailler.
TSA-PARO-NUNUA | je n'achète jamais.
KUA-PARO-NUNUA | tu n'achètes jamais.
KA-PARO-NUNUA | il / elle n'achète jamais.
KARA-PARO-NUNUA | nous n'achetons jamais.
KAMWA-PARO-NUNUA | vous n'achetez jamais.
KAWA-PARO-NUNUA | ils / elles n'achètent jamais.
Tsaparomuona. | Je ne l'ai jamais vu.
Karaparonunua trovi. | Nous n'avons jamais acheté de bananes.
Kaparola puruku. | Il / elle n'a jamais mangé de porc.
Tsaparidzonwa dite. | Je n'ai jamais bu de thé.
Karaparidzonunua trovi. | Nous n'avons jamais acheté de bananes.
Kaparidzola puruku. | Il / elle n'a jamais mangé de porc.
Bange (Cl 5) | le haschich | Makao (Cl 6) | une résidence, demeure
Hadisi, ma- | un récit, des -- | Manufa (Cl 6) | le profit, les avantages
Jumba, ma- | un bâtiment, des -- | Masala (Cl 6) | les épices
Maeledzo (Cl 6) | une explication | Mashindrano | une compétition
Maendreleo (Cl 6) | le progrès | Tangazo, ma- | une diffusion, des --
Mahari (Cl 6) | une dot | Waziri, ma- | un ministre, des --
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 50,
    title: "VOCABULAIRE",
    description: "Contenu du chapitre 50.",
    content: `

Chapitre 51 - Les Auxiliaires -HI-, -MO-

 1. L'AUXILIAIRE VERBAL  -HI- : 

L'auxiliaire verbal -HI- indique qu'une action est simultanée à une autre action.
Selon les cas, on le traduira en français par : "quand", "en + participe présent", ou encore par un 2ème verbe à l'infinitif.
L'auxiliaire verbal -HI- est toujours précédé de l'infixe de contingence  -A- :

 PRÉFIXE SUJET + (A)HI + RACINE VERBALE 

EXEMPLES : 

Wahimusukuma, waye uwa.
Quand on le pousse, il tombe.
Kula mutru asija ahirongoa trambo.
Chaque personne vient en disant un mensonge.
Muahija, mutsowona.
Si vous venez, vous verrez.


 2. L'AUXILIAIRE VERBAL  -MO- : 

L'auxiliaire verbal  -MO- peut se traduire en français par "quand...", "chaque fois que..."
Il s'emploie de façon autonome ou associé à d'autres auxiliaires verbaux.

 PRÉFIXE SUJET + (A)MO + RACINE VERBALE 

EXEMPLES : 

Mutru amomwona mutru kamuji...
Quand on voit quelqu'un qu'on ne connaît pas...
Mutru mushe uwo uamomuona...
Quand tu vois cette femme...
Namojua nitsov̄inga.
Je sais déjà que je vais revenir.
Zena amoparofua...
Quand Zena se met à laver le linge...
Nahimofanya hazi, tsiv̄endze mutru anitaãnbishe.
Quand je travaille, je n'aime pas que l'on m'embête.


PROVERBE : 

V̄WAHIMOFA MULIMU UƁUHA MURUNDRAQuand meurt un citronnier réapparaît un oranger



VOCABULAIRE


Dipe, ma-
pain
Kundre, ma-
haricot
Djavi, ma-
natte
Kuri, mahuri
palme de cocotier
Djoro, ma-
mangue mûre
Parape, ma-
parpaing
Foro, maforo
trou
Saɗu, ma-
louche
Godra, ma-
boue
Traku, maraku
couvercle de marmite
Konokono, ma-
pomme cannelle
Trumidzo, marumidzo
demande en mariage



Chapitre précédentChapitre suivantTable des matières | Wahimusukuma, waye uwa. | Quand on le pousse, il tombe. | Kula mutru asija ahirongoa trambo. | Chaque personne vient en disant un mensonge. | Muahija, mutsowona. | Si vous venez, vous verrez. | Mutru amomwona mutru kamuji... | Quand on voit quelqu'un qu'on ne connaît pas... | Mutru mushe uwo uamomuona... | Quand tu vois cette femme... | Namojua nitsov̄inga. | Je sais déjà que je vais revenir. | Zena amoparofua... | Quand Zena se met à laver le linge... | Nahimofanya hazi, tsiv̄endze mutru anitaãnbishe. | Quand je travaille, je n'aime pas que l'on m'embête. | Dipe, ma- | pain | Kundre, ma- | haricot | Djavi, ma- | natte | Kuri, mahuri | palme de cocotier | Djoro, ma- | mangue mûre | Parape, ma- | parpaing | Foro, maforo | trou | Saɗu, ma- | louche | Godra, ma- | boue | Traku, maraku | couvercle de marmite | Konokono, ma- | pomme cannelle | Trumidzo, marumidzo | demande en mariage | Chapitre précédent | Chapitre suivant | Table des matières
Wahimusukuma, waye uwa. | Quand on le pousse, il tombe.
Kula mutru asija ahirongoa trambo. | Chaque personne vient en disant un mensonge.
Muahija, mutsowona. | Si vous venez, vous verrez.
Mutru amomwona mutru kamuji... | Quand on voit quelqu'un qu'on ne connaît pas...
Mutru mushe uwo uamomuona... | Quand tu vois cette femme...
Namojua nitsov̄inga. | Je sais déjà que je vais revenir.
Zena amoparofua... | Quand Zena se met à laver le linge...
Nahimofanya hazi, tsiv̄endze mutru anitaãnbishe. | Quand je travaille, je n'aime pas que l'on m'embête.
Dipe, ma- | pain | Kundre, ma- | haricot
Djavi, ma- | natte | Kuri, mahuri | palme de cocotier
Djoro, ma- | mangue mûre | Parape, ma- | parpaing
Foro, maforo | trou | Saɗu, ma- | louche
Godra, ma- | boue | Traku, maraku | couvercle de marmite
Konokono, ma- | pomme cannelle | Trumidzo, marumidzo | demande en mariage
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 51,
    title: "Leçon 51",
    description: "Contenu du chapitre 51.",
    content: `

Chapitre 52 - Les Verbes : Les Temps Relatifs



Les pronoms relatifs "qui", "que", "dont", "où"... n'existent pas de façon autonome en shimaore.

Aussi ce sera encore une fois la forme verbale qui sera modifiée afin d'introduire une proposition relative à l'intérieur de la phrase.
Le pronom relatif  "qui" ou "que" est marqué par le suffixe -O de référence accroché à la fin du verbe.
Mais seuls les verbes conjugués au présent et au futur acceptent le suffixe -O.

 1. LE RELATIF PRÉSENT : 

Ce temps est caractérisé par le post-suffixe  -O  à la fin du verbe, ainsi que par l'absence du  marqueur
de temps -SU- (ou -SI-) du présent actuel. Ce relatif présent  s'emploie aussi bien pour décrire des
actions actuelles que des actions habituelles ou atemporelles.

 PRÉFIXE SUJET + RACINE VERBALE + O 

MODÈLE :    UFANYA = faire







NI-FANYA-O  
->  nifanyao
que je fais / qui fais
U-FANYA-O  
->  ufanyao
que tu fais / qui fais
A-FANYA-O  
->  afanyao
qu'il / elle fait / qui fait
RI-FANYA-O  
->  rifanyao
que nous faisons / qui faisons
MU-FANYA-O  
->  mufanyao
que vous faites / qui faites
WA-FANYA-O  
->  wafanyao
qu'ils / elles font / qui font


QUELQUES EXEMPLES D'EMPLOI : 


1. Tsisikia trongo urongoao.
Je n'entends pas ce que tu dis.
2. Lilo gari niliv̄endzao.
Voici la voiture que j'aime.
3. Umutru mama ule aendrao ɓazari...
Cette femme qui va au marché...
4. Tsisijua, wawe ɗe ujuao.
Je ne sais pas, c'est toi qui sait.
5. Suku ajao, namunihire.
Le jour où il vient, appelez-moi.
6. Ritsowonana mufumo ujao.
A la semaine prochaine (Nous nous verrons la semaine qui vient).


 2. LE RELATIF FUTUR :

Le verbe conjugué au futur est simplement suivi du  -O  de référence :

 PRÉFIXE SUJET + TSO + RACINE VERBALE + O 

MODÈLE :     UJA  =  venir







NI-TSO-JA-O  
->  (wami) nitsojao
(moi) qui viendrai
U-TSO-JA-O  
-> (wawe) utsojao
(toi) qui viendras
A-TSO-JA-O  
->  (waye) atsojao
(lui / elle) qui viendra
RI-TSO-JA-O  
-> (wasi) ritsojao
(nous) qui viendrons
MU-TSO-JA-O  
-> (wanyu) mutsojao
(vous) qui viendrez
WA-TSO-JA-O  
-> (wawo) watsojao
(eux / elles) qui viendront


QUELQUES EXEMPLES D'EMPLOI : 


1. Wami tsiɗe nitsojao meso.
Ce n'est pas moi qui viendrai demain.
2. Mbani ɗe atswendrao na wami ?
Qui est-ce qui ira avec moi ?
3. Wakati ritsojao...
Quand nous viendrons...  (au moment où...)
4. Suku daruɓa itsojao...
Le jour où le cyclone viendra...
5. Mwana atsoliao katsopara bõnbo.
L'enfant qui pleurera n'aura pas de bonbon.
6. Lera utsojao muhire Bako.
Quand tu viendras, appelle Bako.


 3. LE VERBE "UKA" (= être) A LA FORME RELATIVE : 

Au présent, on utilise la racine verbale -LI- située entre le préfixe sujet et le suffixe  -O :







NI-LI-O  
-> (wami) nilio
(moi) qui suis
U-LI-O  
-> (wawe) ulio
(toi) qui es
A-LI-O  
-> (waye) alio
(lui / elle) qui est
RI-LI-O  
-> (wasi) rilio
(nous) qui sommes
MU-LI-O  
-> (wanyu) mulio
(vous) qui êtes
WA-LI-O  
-> (wawo)  walio
(eux / elles) qui sont


On retrouve aussi les accords habituels aux autres classes : ulio, ilio, zilio, lilio, yalio, v̄ulio.
La racine -LI- n'est utilisée que pour le présent. Au futur, on utilise la racine -KA : Lera atsokao muɓole = quand il sera grand.

QUELQUES EXEMPLES : 


1. Asitsaha hirizi ilio tsingoni haho.
Il veut l'amulette qui est à ton cou.
2. Vua isunya rangu nilio v̄anu.
Il pleut depuis que je suis ici.
3. Watru walio ɗagoni wana mali nyengi.
Les gens qui sont au village sont riches.
4. Maana trini taãbu zilio wakati wa leo ?
Pourquoi les problèmes qui existent aujourd'hui ?
5. Pia watru walio na marke watsopashia barji.Tous ceux qui ont de l'argent prendront la barge.


 4. CELUI QUI / QUE...     LA PERSONNE QUI / QUE... : 


1. Mutru arihirao uhiriwa Rastami.
La personne qui nous appelle se nomme Rastami.
2. Mutru alagao ɗe ɓaɓangu.
Celui qui dit au revoir, c'est mon père.
3. Mutru alao kalagua.
Celui qui mange ne parle pas.
4. Mutru ahangihao urumia nyongo.
Celui qui écrit utilise de l'encre.


 5. CE QUI / CE QUE...    LA CHOSE QUI / QUE / DONT... : 


1. Trongo moja tu ɗe initaãbishao.
Il y a une chose seulement qui m'embête.
2. Trongo nizionao zisunihodza matso.
Ce que je vois me fait mal aux yeux.
3. Shitru nirongoao...
La chose dont je parle...


EXERCICES

EXERCICE 1 : Traduisez en shimaore :


La fille que j'aime, les enfants qui apprennent, l'étranger qui arrive, l'homme qui a un chapeau, la chose que je veux, les gens qui disent, la voiture que j'achèterai, les enfants qui sont là, où est-ce que tu vas ? Les maisons qui sont là.


EXERCICE 2 : Traduisez en français :



Mutru ɓaɓa ajao uhiriwa Muhamadi.
Wami tsiɗe nitsojao meso.
Mutru ɓaɓa utsomwonao meso waye wa peu.
Kaji yotsi iv̄irao duniani v̄anu.
Wadjeni wajao leo wasula Mrima.
Ɗalao ulirumiao av̄asa tsi djema.
Mbani ɗe atsendrao na wami ?
Wasi rilio wadjeni hunu karisijua zindzia.
Niv̄ingie shiri ilio v̄av̄o.
Maduka yalio Momoju mazuri swafi.
Shamba langu lika v̄anu v̄ulio likoli av̄asa.
Wawe utsoka harimwa liɓanga lilio mwisoni mwa liɗago.




Chapitre précédentChapitre suivantTable des matières |  | Les pronoms relatifs "qui", "que", "dont", "où"... n'existent pas de façon autonome en shimaore. | NI-FANYA-O | ->  nifanyao | que je fais / qui fais | U-FANYA-O | ->  ufanyao | que tu fais / qui fais | A-FANYA-O | ->  afanyao | qu'il / elle fait / qui fait | RI-FANYA-O | ->  rifanyao | que nous faisons / qui faisons | MU-FANYA-O | ->  mufanyao | que vous faites / qui faites | WA-FANYA-O | ->  wafanyao | qu'ils / elles font / qui font | 1. Tsisikia trongo urongoao. | Je n'entends pas ce que tu dis. | 2. Lilo gari niliv̄endzao. | Voici la voiture que j'aime. | 3. Umutru mama ule aendrao ɓazari... | Cette femme qui va au marché... | 4. Tsisijua, wawe ɗe ujuao. | Je ne sais pas, c'est toi qui sait. | 5. Suku ajao, namunihire. | Le jour où il vient, appelez-moi. | 6. Ritsowonana mufumo ujao. | A la semaine prochaine (Nous nous verrons la semaine qui vient). | NI-TSO-JA-O | ->  (wami) nitsojao | (moi) qui viendrai | U-TSO-JA-O | -> (wawe) utsojao | (toi) qui viendras | A-TSO-JA-O | ->  (waye) atsojao | (lui / elle) qui viendra | RI-TSO-JA-O | -> (wasi) ritsojao | (nous) qui viendrons | MU-TSO-JA-O | -> (wanyu) mutsojao | (vous) qui viendrez | WA-TSO-JA-O | -> (wawo) watsojao | (eux / elles) qui viendront | 1. Wami tsiɗe nitsojao meso. | Ce n'est pas moi qui viendrai demain. | 2. Mbani ɗe atswendrao na wami ? | Qui est-ce qui ira avec moi ? | 3. Wakati ritsojao... | Quand nous viendrons...  (au moment où...) | 4. Suku daruɓa itsojao... | Le jour où le cyclone viendra... | 5. Mwana atsoliao katsopara bõnbo. | L'enfant qui pleurera n'aura pas de bonbon. | 6. Lera utsojao muhire Bako. | Quand tu viendras, appelle Bako. | NI-LI-O | -> (wami) nilio | (moi) qui suis | U-LI-O | -> (wawe) ulio | (toi) qui es | A-LI-O | -> (waye) alio | (lui / elle) qui est | RI-LI-O | -> (wasi) rilio | (nous) qui sommes | MU-LI-O | -> (wanyu) mulio | (vous) qui êtes | WA-LI-O | -> (wawo)  walio | (eux / elles) qui sont | 1. Asitsaha hirizi ilio tsingoni haho. | Il veut l'amulette qui est à ton cou. | 2. Vua isunya rangu nilio v̄anu. | Il pleut depuis que je suis ici. | 3. Watru walio ɗagoni wana mali nyengi. | Les gens qui sont au village sont riches. | 4. Maana trini taãbu zilio wakati wa leo ? | Pourquoi les problèmes qui existent aujourd'hui ? | 5. Pia watru walio na marke watsopashia barji. | Tous ceux qui ont de l'argent prendront la barge. | 1. Mutru arihirao uhiriwa Rastami. | La personne qui nous appelle se nomme Rastami. | 2. Mutru alagao ɗe ɓaɓangu. | Celui qui dit au revoir, c'est mon père. | 3. Mutru alao kalagua. | Celui qui mange ne parle pas. | 4. Mutru ahangihao urumia nyongo. | Celui qui écrit utilise de l'encre. | 1. Trongo moja tu ɗe initaãbishao. | Il y a une chose seulement qui m'embête. | 2. Trongo nizionao zisunihodza matso. | Ce que je vois me fait mal aux yeux. | 3. Shitru nirongoao... | La chose dont je parle... | Chapitre précédent | Chapitre suivant | Table des matières
 | Les pronoms relatifs "qui", "que", "dont", "où"... n'existent pas de façon autonome en shimaore.
NI-FANYA-O | ->  nifanyao | que je fais / qui fais
U-FANYA-O | ->  ufanyao | que tu fais / qui fais
A-FANYA-O | ->  afanyao | qu'il / elle fait / qui fait
RI-FANYA-O | ->  rifanyao | que nous faisons / qui faisons
MU-FANYA-O | ->  mufanyao | que vous faites / qui faites
WA-FANYA-O | ->  wafanyao | qu'ils / elles font / qui font
1. Tsisikia trongo urongoao. | Je n'entends pas ce que tu dis.
2. Lilo gari niliv̄endzao. | Voici la voiture que j'aime.
3. Umutru mama ule aendrao ɓazari... | Cette femme qui va au marché...
4. Tsisijua, wawe ɗe ujuao. | Je ne sais pas, c'est toi qui sait.
5. Suku ajao, namunihire. | Le jour où il vient, appelez-moi.
6. Ritsowonana mufumo ujao. | A la semaine prochaine (Nous nous verrons la semaine qui vient).
NI-TSO-JA-O | ->  (wami) nitsojao | (moi) qui viendrai
U-TSO-JA-O | -> (wawe) utsojao | (toi) qui viendras
A-TSO-JA-O | ->  (waye) atsojao | (lui / elle) qui viendra
RI-TSO-JA-O | -> (wasi) ritsojao | (nous) qui viendrons
MU-TSO-JA-O | -> (wanyu) mutsojao | (vous) qui viendrez
WA-TSO-JA-O | -> (wawo) watsojao | (eux / elles) qui viendront
1. Wami tsiɗe nitsojao meso. | Ce n'est pas moi qui viendrai demain.
2. Mbani ɗe atswendrao na wami ? | Qui est-ce qui ira avec moi ?
3. Wakati ritsojao... | Quand nous viendrons...  (au moment où...)
4. Suku daruɓa itsojao... | Le jour où le cyclone viendra...
5. Mwana atsoliao katsopara bõnbo. | L'enfant qui pleurera n'aura pas de bonbon.
6. Lera utsojao muhire Bako. | Quand tu viendras, appelle Bako.
NI-LI-O | -> (wami) nilio | (moi) qui suis
U-LI-O | -> (wawe) ulio | (toi) qui es
A-LI-O | -> (waye) alio | (lui / elle) qui est
RI-LI-O | -> (wasi) rilio | (nous) qui sommes
MU-LI-O | -> (wanyu) mulio | (vous) qui êtes
WA-LI-O | -> (wawo)  walio | (eux / elles) qui sont
1. Asitsaha hirizi ilio tsingoni haho. | Il veut l'amulette qui est à ton cou.
2. Vua isunya rangu nilio v̄anu. | Il pleut depuis que je suis ici.
3. Watru walio ɗagoni wana mali nyengi. | Les gens qui sont au village sont riches.
4. Maana trini taãbu zilio wakati wa leo ? | Pourquoi les problèmes qui existent aujourd'hui ?
5. Pia watru walio na marke watsopashia barji. | Tous ceux qui ont de l'argent prendront la barge.
1. Mutru arihirao uhiriwa Rastami. | La personne qui nous appelle se nomme Rastami.
2. Mutru alagao ɗe ɓaɓangu. | Celui qui dit au revoir, c'est mon père.
3. Mutru alao kalagua. | Celui qui mange ne parle pas.
4. Mutru ahangihao urumia nyongo. | Celui qui écrit utilise de l'encre.
1. Trongo moja tu ɗe initaãbishao. | Il y a une chose seulement qui m'embête.
2. Trongo nizionao zisunihodza matso. | Ce que je vois me fait mal aux yeux.
3. Shitru nirongoao... | La chose dont je parle...
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 52,
    title: "Leçon 52",
    description: "Contenu du chapitre 52.",
    content: `

Chapitre 53 - Les Verbes : Le Relatif Passé

Ce temps se traduit en français par une proposition relative au passé composé, par un participe passé, ou encore par un adjectif qualificatif.

 1. FORME AFFIRMATIVE : 

Il se construit en insérant le -A- de contingence entre le préfixe sujet et le radical verbal, ce qui a pour résultat de modifier le préfixe sujet, comme à l'imparfait. Le post-suffixe -O de référence n'est pas exprimé.

PRÉFIXE SUJET + A + RACINE VERBALE

MODÈLE :    UONA = voir







NI-A-ONA  
-> naona
que j'ai vu
U-A-ONA  
-> uaona
que tu as vu
A-A-ONA  
-> aona
qu'il / elle a vu
RI-A-ONA  
-> raona
que nous avons vu
MU-A-ONA  
-> mwaona
que vous avez vu
WA-A-ONA  
-> waona
qu'ils / elles ont vu


QUELQUES EXEMPLES D'EMPLOI : 

Proposition relative :

1. Mwana ɗe ala ishahula.
C'est l'enfant qui a mangé la nourriture.
2. Mara ya handra nahuona.
La première fois que je t'ai vu.
3. Waye tsiɗe arenga ishio.
Ce n'est pas lui qui a pris le livre.
4. Alawa lera uaja.
Il est parti quand tu es arrivé.
5. Wawe ɗe mutru azihira mwana wangu.
C'est toi la personne qui a guérit mon enfant.
6. Wakati wadjeni waja, mutru mushe akopiha.
Quand les visiteurs sont arrivés, la femme faisait la cuisine.
7. Wakati ramueledza za ufanya, aelewa.
Après que nous lui ayons expliqué quoi faire, il a
compris.


Participe passé / Adjectif :

1. Ndrimu yaola.
Le citron pourri. (qui est pourri.)
2. Trotro yahuma.
La terre sèche. (qui est séchée.)
3. Maha yav̄ira.
Les années passées. (qui sont passées.)



 2. FORME NÉGATIVE : 

Le relatif passé (de même que le relatif présent et le relatif futur) n'a pas de forme négative propre. Il existe cependant deux possibilités d'exprimer une proposition relative à la forme négative :


Le verbe est conjugué à L'ACCOMPLI NÉGATIF. La proposition  relative est simplement sous-entendue.
On veut insister sur la relative : On ajoute alors la locution verbale  -LIO AMBA  (= qui est que) devant le verbe conjugué à l'accompli négatif.


QUELQUES EXEMPLES D'EMPLOI : 

1. Watru tsawaona wawo walawa.ou :Watru walio amba tsawaona wawo walawa.
Les gens (que) je n'ai pas vus sont partis.
2. Mwana kala shahula waye ufa.ou :Mwana alio amba kala shahula waye ufa.
L'enfant qui n'a pas mangé de nourriture est mort.
3. Mutru kafanya hazi, kali.ou :Mutru alio amba kafanya hazi, kali.
Celui qui n'a pas travaillé ne mange pas.


PROVERBE : 

ƁWE UALIONA MUTSANA UKU KUTSOLIKWALALa pierre que tu as vue dans la journée, tu ne buteras pas dessus le soirou : "Un homme averti en vaut deux"

EXERCICES

EXERCICE 1 : Traduisez en shimaore :



La voiture que j'ai achetée.
Le sac que tu as oublié.
La lettre que j'ai écrite.
La barge qui est partie.
C'est la première fois que j'ai vu des tortues.
C'est l'enfant que j'ai vu.
C'est l'enfant qui a mangé les mangues.
Ce n'est pas l'enfant qui a pris les bananes.
L'homme qui est arrivé s'appelle Mohamed.
C'est toi la personne qui as frappé mon enfant.
Les gens sont partis quand tu es arrivé.
Quand ils sont arrivés, les femmes cuisinaient.
Quand je me suis levé, tu dormais encore.
Ne prends pas les citrons pourris.
Les herbes ne poussent pas sur la terre sèche.



EXERCICE 2 : Traduisez en français :



Waye de mutru namutsahua.
Trongo piya aziona tsi ndjema.
Tsaɗela watru nawaona.
Unu ɗe mwana kala shahula.
Mutru-ɓaɓa aja jana asutsaha hazi.
Wami tsiɗe narenga makonokono.
Tsihuv̄endze rangu wakati wa handra nahuona.
Mwanamtsa alio amba tsamuona uwo alawa ɗagoni.
Duktera ɗe azihira mwanangu.
Wakati nawaeledza za ufanya, waelewa.




Chapitre précédentChapitre suivantTable des matières | NI-A-ONA | -> naona | que j'ai vu | U-A-ONA | -> uaona | que tu as vu | A-A-ONA | -> aona | qu'il / elle a vu | RI-A-ONA | -> raona | que nous avons vu | MU-A-ONA | -> mwaona | que vous avez vu | WA-A-ONA | -> waona | qu'ils / elles ont vu | 1. Mwana ɗe ala ishahula. | C'est l'enfant qui a mangé la nourriture. | 2. Mara ya handra nahuona. | La première fois que je t'ai vu. | 3. Waye tsiɗe arenga ishio. | Ce n'est pas lui qui a pris le livre. | 4. Alawa lera uaja. | Il est parti quand tu es arrivé. | 5. Wawe ɗe mutru azihira mwana wangu. | C'est toi la personne qui a guérit mon enfant. | 6. Wakati wadjeni waja, mutru mushe akopiha. | Quand les visiteurs sont arrivés, la femme faisait la cuisine. | 7. Wakati ramueledza za ufanya, aelewa. | Après que nous lui ayons expliqué quoi faire, il a
compris. | 1. Ndrimu yaola. | Le citron pourri. (qui est pourri.) | 2. Trotro yahuma. | La terre sèche. (qui est séchée.) | 3. Maha yav̄ira. | Les années passées. (qui sont passées.) | 1. Watru tsawaona wawo walawa. | ou : | Watru walio amba tsawaona wawo walawa. | Les gens (que) je n'ai pas vus sont partis. | 2. Mwana kala shahula waye ufa. | ou : | Mwana alio amba kala shahula waye ufa. | L'enfant qui n'a pas mangé de nourriture est mort. | 3. Mutru kafanya hazi, kali. | ou : | Mutru alio amba kafanya hazi, kali. | Celui qui n'a pas travaillé ne mange pas. | Chapitre précédent | Chapitre suivant | Table des matières
NI-A-ONA | -> naona | que j'ai vu
U-A-ONA | -> uaona | que tu as vu
A-A-ONA | -> aona | qu'il / elle a vu
RI-A-ONA | -> raona | que nous avons vu
MU-A-ONA | -> mwaona | que vous avez vu
WA-A-ONA | -> waona | qu'ils / elles ont vu
1. Mwana ɗe ala ishahula. | C'est l'enfant qui a mangé la nourriture.
2. Mara ya handra nahuona. | La première fois que je t'ai vu.
3. Waye tsiɗe arenga ishio. | Ce n'est pas lui qui a pris le livre.
4. Alawa lera uaja. | Il est parti quand tu es arrivé.
5. Wawe ɗe mutru azihira mwana wangu. | C'est toi la personne qui a guérit mon enfant.
6. Wakati wadjeni waja, mutru mushe akopiha. | Quand les visiteurs sont arrivés, la femme faisait la cuisine.
7. Wakati ramueledza za ufanya, aelewa. | Après que nous lui ayons expliqué quoi faire, il a
compris.
1. Ndrimu yaola. | Le citron pourri. (qui est pourri.)
2. Trotro yahuma. | La terre sèche. (qui est séchée.)
3. Maha yav̄ira. | Les années passées. (qui sont passées.)
1. Watru tsawaona wawo walawa. | ou : | Watru walio amba tsawaona wawo walawa.
Les gens (que) je n'ai pas vus sont partis.
2. Mwana kala shahula waye ufa. | ou : | Mwana alio amba kala shahula waye ufa.
L'enfant qui n'a pas mangé de nourriture est mort.
3. Mutru kafanya hazi, kali. | ou : | Mutru alio amba kafanya hazi, kali.
Celui qui n'a pas travaillé ne mange pas.
Chapitre précédent | Chapitre suivant | Table des matières

`,
  },
  {
    id: 53,
    title: "Leçon 53",
    description: "Contenu du chapitre 53.",
    content: `

Chapitre 54 - Les Verbes : Le Narratif

Comme le nom de ce temps le suggère, le NARRATIF est utilisé pour le récit : on le rencontre abondamment dans les contes traditionnels. Mais il doit être précédé par un premier verbe au passé, en général à l'ACCOMPLI.
La marque de temps du NARRATIF est l'infixe -LO-.

 1. LE NARRATIF - FORME AFFIRMATIVE : 

La marque de temps -LO- est placée entre le préfixe sujet, identique à celui de l'accompli, et la racine verbale :

 PRÉFIXE SUJET + LO + RACINE VERBALE 

MODÈLE :          UFANYA = faire







TSI-LO-FANYA    
-> tsilofanya
je fis
U-LO-FANYA    
-> ulofanya
tu fis
A-LO-FANYA    
-> alofanya
il / elle fit
RI-LO-FANYA    
-> rilofanya
nous fîmes
MU-LO-FANYA    
-> mulofanya
vous fîtes
WA-LO-FANYA    
-> walofanya
ils / elles firent


 2. EXEMPLES D'EMPLOI : 






Ɓasi andre alolala v̄ale
Il alla dormir là-bas
Nyombe ile yendre ilotsindzwa
Cette vache allait être abattue
Neka tsiendre tsilomulola, utsotaãbiha
Si je l'épousais, tu serais malheureuse
Ɓasi andre alomuweledza mutru mushe
Alors, il alla l'expliquer à sa femme
Ulawa na tsi ulohiɓa zitru za watru
Tu te débrouilles pour voler les affaires des gens


 3. FORME NÉGATIVE : 

Il n'est pas certain qu'une forme négative de ce temps existe en propre en shimaore. Ce serait alors le subjonctif négatif qui serait employé, tout comme en swahili.
Voici un exemple tiré du conte "Nyombe ya ɓaɓa na Mama" (Furukombe et autres contes de Mayotte) :





- Makame ! Makame !Ule aariha :- Labe, ɓiɓi, labe ?- Niv̄e kukumanga nisile !- La, ɓiɓi, la !- Niv̄e halua nisile !- La, ɓiɓi, la !
- Makame ! Makame !Celui-ci répondit :- Oui, Mademoiselle, oui ?- Donne-moi de la muscade, que je n'ai pas mangé !- Mange, Mademoiselle, mange !- Donne-moi de l'halwa, que je n'ai pas mangé !- Mange, Mademoiselle, mange !

Malgré tout, c'est le seul exemple que nous ayons trouvé, et de plus dans un récit très imprégné de swahili, aussi la question reste ouverte...


Chapitre précédentBibliographieTable des matières | TSI-LO-FANYA | -> tsilofanya | je fis | U-LO-FANYA | -> ulofanya | tu fis | A-LO-FANYA | -> alofanya | il / elle fit | RI-LO-FANYA | -> rilofanya | nous fîmes | MU-LO-FANYA | -> mulofanya | vous fîtes | WA-LO-FANYA | -> walofanya | ils / elles firent | Ɓasi andre alolala v̄ale | Il alla dormir là-bas | Nyombe ile yendre ilotsindzwa | Cette vache allait être abattue | Neka tsiendre tsilomulola, utsotaãbiha | Si je l'épousais, tu serais malheureuse | Ɓasi andre alomuweledza mutru mushe | Alors, il alla l'expliquer à sa femme | Ulawa na tsi ulohiɓa zitru za watru | Tu te débrouilles pour voler les affaires des gens | - Makame ! Makame !Ule aariha :- Labe, ɓiɓi, labe ?- Niv̄e kukumanga nisile !- La, ɓiɓi, la !- Niv̄e halua nisile !- La, ɓiɓi, la ! | - Makame ! Makame !Celui-ci répondit :- Oui, Mademoiselle, oui ?- Donne-moi de la muscade, que je n'ai pas mangé !- Mange, Mademoiselle, mange !- Donne-moi de l'halwa, que je n'ai pas mangé !- Mange, Mademoiselle, mange ! | Chapitre précédent | Bibliographie | Table des matières
TSI-LO-FANYA | -> tsilofanya | je fis
U-LO-FANYA | -> ulofanya | tu fis
A-LO-FANYA | -> alofanya | il / elle fit
RI-LO-FANYA | -> rilofanya | nous fîmes
MU-LO-FANYA | -> mulofanya | vous fîtes
WA-LO-FANYA | -> walofanya | ils / elles firent
Ɓasi andre alolala v̄ale | Il alla dormir là-bas
Nyombe ile yendre ilotsindzwa | Cette vache allait être abattue
Neka tsiendre tsilomulola, utsotaãbiha | Si je l'épousais, tu serais malheureuse
Ɓasi andre alomuweledza mutru mushe | Alors, il alla l'expliquer à sa femme
Ulawa na tsi ulohiɓa zitru za watru | Tu te débrouilles pour voler les affaires des gens
- Makame ! Makame !Ule aariha :- Labe, ɓiɓi, labe ?- Niv̄e kukumanga nisile !- La, ɓiɓi, la !- Niv̄e halua nisile !- La, ɓiɓi, la ! | - Makame ! Makame !Celui-ci répondit :- Oui, Mademoiselle, oui ?- Donne-moi de la muscade, que je n'ai pas mangé !- Mange, Mademoiselle, mange !- Donne-moi de l'halwa, que je n'ai pas mangé !- Mange, Mademoiselle, mange !
Chapitre précédent | Bibliographie | Table des matières

`,
  },
];
