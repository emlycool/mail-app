<template>

<div class="container">
    <div class="mail-box">
        <!-- sidebar -->
        <app-sidebar :messages="messages"></app-sidebar>
        <!-- app content -->
        <app-content :messages="messages"></app-content>
    </div>
</div>
  
</template>

<script>
import Sidebar from './Sidebar'
import Content from './Content'
import messages from './data/messages'
import randomMessages from './data/random-messages'
import {eventBus} from './main'


export default {
    data() {
        return {
            messages: messages
        }
    },
    created(){
        eventBus.$on('refreshMessages', () => {

            let randomIndex = this.getRndInteger(0,randomMessages.length);
            let tempNewMsg = randomMessages[randomIndex]
            this.messages.splice(0, 0, tempNewMsg);
        })
        eventBus.$on('sendMessage', (data) =>{
            this.messages.splice(0, 0, data);
        })
    },
    components: {
        AppSidebar: Sidebar,
        AppContent: Content
    },
    methods: {
        getRndInteger(min, max) { //min included max excluded
            return Math.floor(Math.random() * (max - min) ) + min;
        }
    }
}
</script>