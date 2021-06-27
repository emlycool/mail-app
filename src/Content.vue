<template>
    <aside class="lg-side">
        <div class="inbox-head">
            <h3>{{currentView.title}}</h3>
            <form action="#" class="pull-right position">
                <div class="input-append">
                    <input type="text" class="sr-input" placeholder="Search Mail">
                    <button class="btn sr-btn" type="button"><i class="fa fa-search"></i></button>
                </div>
            </form>
        </div>
        <!-- <keep-alive>
            <component :is="currentView.tag" :data="currentView.data"></component>
        </keep-alive> -->
        <router-view :data="currentView.data"></router-view>
    </aside>
</template>

<script>
import Inbox from './Inbox'
import Sent from './Sent'
import Important from './Important'
import Trash from './Trash'
import MessageDetails from './MessageDetails'
import { eventBus } from "./main";

export default {
    props:{
        messages: {
            type: Array,
            required: true
        }
    },
    components: {
        AppInbox: Inbox,
        AppSent: Sent,
        AppImportant: Important,
        AppTrash: Trash,
        AppMessageDetails: MessageDetails,
    },
    data() {
        return {
            history: [
                {
                    tag: 'app-inbox',
                    title: 'Inbox',
                    data: {
                        message : null
                    }
                }
            ]
        }
    },
    created(){
        eventBus.$on('changeView', (viewData) => {
            let temp = {
                tag: viewData.tag,
                title: viewData.title,
                data: viewData.data || {}
            }
            this.history.splice(0, 0, temp);
        })
    },
    computed: {
        currentView(){
            console.log('cmpute');
            let currentView = this.history[0]
            currentView.data.messages = this.messages
            return currentView; 
        },
        previousView(){
            let previousView = this.history[1]
            previousView.data.messages = this.messages
            return previousView;
        }
    }
}
</script>