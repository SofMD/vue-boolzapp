const app = new Vue({
    el: '#app',

    data: {
        user: [
            {
                name: 'Sofia',
                avatar: '_io',
            }
        ],

        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },    {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        
        activeSlide: 0,
        newMessage: '',
        newSearch: '',

    },



    methods: {
        clickcontact(index) {
            this.activeSlide = index;
            console.log(this.activeSlide)
        },

        // aggiungere messaggi
        addNewMessage(){
            if( this.newMessage !== ''){
                console.log(this.newMessage);

                //aggiungo al dom
                this.contacts[this.activeSlide].messages.push({
                    date: dayjs().format('D /M /YYYY - H:m:s') ,
                    text: this.newMessage,
                    status: 'sent',
                })

                //cancello messaggio nell'input
                this.newMessage = '';
            }

            // messaggio instantaneo
            const timerMessage = setTimeout(() => {

                this.contacts[this.activeSlide].messages.push({
                    date: dayjs().format('D /M /YYYY - H:m:s') ,
                    text: 'ok',
                    status: 'received',
                })
            }, 1000);
        },


        //ottengo nuovo messaggio
        searchContact(){
            console.log(this.newSearch);

            this.contacts.forEach(element => {
                if( !element.name.toLowerCase().includes(this.newSearch.toLowerCase())){
                    element.visible = false;
                }else{
                    element.visible = true;
                }
            });

        },






    },

})