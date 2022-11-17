var app = new Vue({
  el: "#app",
  data: {
    contacts: [
      {
        name: "Michele",
        avatar: "_1",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30",
            message: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50",
            message: "Ricordati di stendere i panni",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15",
            message: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        name: "Fabiola",
        avatar: "_2",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30",
            message: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30",
            message: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35",
            message: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "sent",
          },
        ],
      },
      {
        name: "Samuele",
        avatar: "_3",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10",
            message: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20",
            message: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15",
            message: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        name: "Alessandro B.",
        avatar: "_4",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30",
            message: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50",
            message: "Si, ma preferirei andare al cinema",
            status: "received",
          },
        ],
      },
      {
        name: "Alessandro L.",
        avatar: "_5",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30",
            message: "Ricordati di chiamare la nonna",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50",
            message: "Va bene, stasera la sento",
            status: "received",
          },
        ],
      },
      {
        name: "Claudia",
        avatar: "_6",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30",
            message: "Ciao Claudia, hai novità?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50",
            message: "Non ancora",
            status: "received",
          },
          {
            date: "10/01/2020 15:51",
            message: "Nessuna nuova, buona nuova",
            status: "sent",
          },
        ],
      },
      {
        name: "Federico",
        avatar: "_7",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30",
            message: "Fai gli auguri a Martina che è il suo compleanno!",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50",
            message: "Grazie per avermelo ricordato, le scrivo subito!",
            status: "received",
          },
        ],
      },
      {
        name: "Davide",
        avatar: "_8",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30",
            message: "Ciao, andiamo a mangiare la pizza stasera?",
            status: "received",
          },
          {
            date: "10/01/2020 15:50",
            message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
            status: "sent",
          },
          {
            date: "10/01/2020 15:51",
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

  methods: {
    indiceCorrente(param){
        console.log(this.currentIndex);
        return this.currentIndex = param
    },
    sentMessage(param){
      //Prendere l'ora di ogni momento con new date
      const d = new Date();
      let time = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      let data = d.toLocaleDateString();
      //Aggiungo all array di oggetti messages con push il valore tramite v-model nell'input.
      this.contacts[param].messages.push({
        message: this.messageValue, 
        status: 'sent',
        date: `${data} ${time}`
      });
      //Svuoto il campo input ogni volta che premo invio
      this.messageValue = '';
      //invoco la funziona di risposta del bot
      this.answerBot(param);
    },
    answerBot(param){
      //Prendere l'ora di ogni momento con new date
      const d = new Date();
      let time = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      let data = d.toLocaleDateString();
      //setto il set timeout a 2 secondi
      answerBot = setTimeout(() => {
        // Aggiungo la variabile answer all'array di oggetti messages con push
        this.contacts[param].messages.push({
          message: this.answer[this.randomInt(0, this.answer.length)],
          status: "received",
          date: `${data} ${time}`
        });
      }, 2000);
    },
    randomInt(min, max){
      return num = Math.floor(Math.random() * (max - min) + min)
    },
    deleteMessage(currentindex, param){
      this.contacts[currentindex].messages.splice(param, 1);
    },
    getLastHourMessages(param){
      let date = param.date;
      date = date.split(' ');
      return date[1];
    },
    getLastHourContacts(param){
      let lastdate = param.messages[ param.messages.length-1 ].date;
      date = lastdate.split(' ');
      return date[1];
    },

  },
});

