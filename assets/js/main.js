var app = new Vue({
  el: "#app",
  data: {
    contacts: [
      {
        name: "Michele",
        avatar: "_1",
        time: '09:57',
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "Ricordati di stendere i panni",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
            message: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        name: "Fabiola",
        avatar: "_2",
        time: '11:45',
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            message: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            message: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            message: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "sent",
          },
        ],
      },
      {
        name: "Samuele",
        avatar: "_3",
        time: '12:10',
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            message: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20:10",
            message: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            message: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        name: "Alessandro B.",
        avatar: "_4",
        time: '12:01',
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "Si, ma preferirei andare al cinema",
            status: "received",
          },
        ],
      },
      {
        name: "Alessandro L.",
        avatar: "_5",
        time: '00:37',
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Ricordati di chiamare la nonna",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "Va bene, stasera la sento",
            status: "received",
          },
        ],
      },
      {
        name: "Claudia",
        avatar: "_6",
        time: '02:17',
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Ciao Claudia, hai novità?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "Non ancora",
            status: "received",
          },
          {
            date: "10/01/2020 15:51:00",
            message: "Nessuna nuova, buona nuova",
            status: "sent",
          },
        ],
      },
      {
        name: "Federico",
        avatar: "_7",
        time: '10:30',
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Fai gli auguri a Martina che è il suo compleanno!",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "Grazie per avermelo ricordato, le scrivo subito!",
            status: "received",
          },
        ],
      },
      {
        name: "Davide",
        avatar: "_8",
        time: '12:37',
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Ciao, andiamo a mangiare la pizza stasera?",
            status: "received",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
            status: "sent",
          },
          {
            date: "10/01/2020 15:51:00",
            message: "OK!!",
            status: "received",
          },
        ],
      },
    ],
    currentIndex: 0,
    messageValue: '',
    answer: ['Okei', 'Va bene', 'Certo', 'Che fai?', 'Scusami al momento non posso rispondere', 'Hei', 'Ciao', 'Andiamo a cena stasera?', 'Oggi ho tanti impegni e non sto usando il cellulare spesso'],
    cercaNome: '',
  },
    created(){
    console.log(this.cercaNome)
  },
  methods: {
    indiceCorrente(param){
        console.log(this.currentIndex);
        return this.currentIndex = param
    },
    sentMessage(param){
      //Aggiungo all array di oggetti messages con push il valore tramite v-model nell'input.
      this.contacts[param].messages.push({
        message: this.messageValue, 
        status: 'sent',
      });
      //Svuoto il campo input ogni volta che premo invio
      this.messageValue = '';
      //invoco la funziona di risposta del bot
      this.answerBot(param);
    },
    answerBot(param){
      //setto il set timeout a 2 secondi
      answerBot = setTimeout(() => {
        // Aggiungo la variabile answer all'array di oggetti messages con push
        this.contacts[param].messages.push({
          message: this.answer[this.randomInt(0, this.answer.length)],
          status: "received",
        });
      }, 2000);
    },
    randomInt(min, max){
      return num = Math.floor(Math.random() * (max - min) + min)
    },
    deleteMessage(param){
      this.contacts[param].messages.splice(param, 1);
    }
  },
});

