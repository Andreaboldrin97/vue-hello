//creo l'istanza per vue
const app = new Vue(
    {
        //* conetto il div su qui voglio lavorare a vue
        el : '#root',
        //* creo gli ogetti da voler inserire
        data : {
            //elementi presi dall'input
            firstName : '',
            lastName : '',
            imgUser : '', 
            //creo gli elementi da inserire nel post
            imgUserProfilePic :'',
            userName : ''
        },
        methods : {
            userProfile : function(){
                this.imgUserProfilePic = this.imgUser ;
                this.userName = `${this.firstName} ${this.lastName}`;
            }
        },

    }
);