<template>
    <aside class="sm-side">
        <div class="user-head">
            <a class="inbox-avatar" href="javascript:;">
                <img  width="64" hieght="60" src="http://bootsnipp.com/img/avatars/ebeb306fd7ec11ab68cbcaa34282158bd80361a7.jpg">
            </a>
            <div class="user-name">
                <h5><a href="#">Alireza Zare</a></h5>
                <span><a href="#">Info.Ali.Pci@Gmail.com</a></span>
            </div>
            <a class="mail-dropdown pull-right" href="javascript:;">
                <i class="fa fa-chevron-down"></i>
            </a>
        </div>
        <div class="inbox-body">
            <app-compose></app-compose>
        </div>
        <ul class="inbox-nav inbox-divider">
            <li :class="{active: activeView == 'app-inbox'}">
                <a href="#" @click.prevent="navigate('app-inbox', 'Inbox')"><i class="fa fa-inbox"></i> Inbox <span class="label label-danger pull-right">{{unreadMessages.length}}</span></a>

            </li>
            <li :class="{active: activeView == 'app-sent'}">
                <a href="#" @click.prevent="navigate('app-sent', 'Sent')"><i class="fa fa-envelope-o"></i> Sent Mail <span class="label label-danger pull-right">{{sentMessages.length}}</span></a>
            </li>
            <li :class="{active: activeView == 'app-important'}">
                <a href="#" @click.prevent="navigate('app-important', 'Important')"><i class="fa fa-bookmark-o"></i> Important <span class="label label-danger pull-right">{{importantMessages.length}}</span></a>
            </li>
            <!-- <li>
                <a href="#" @click.prevent="navigate('app-inbox', 'Inbox')"><i class=" fa fa-external-link"></i> Drafts <span class="label label-info pull-right">30</span></a>
            </li> -->
            <li :class="{active: activeView == 'app-trash'}">
                <a href="#" @click.prevent="navigate('app-trash', 'Trash')"><i class=" fa fa-trash-o"></i> Trash <span class="label label-danger pull-right">{{trashMessages.length}}</span></a>
            </li>
        </ul>
        <ul class="nav nav-pills nav-stacked labels-info inbox-divider">
            <li> <h4>Labels</h4> </li>
            <li> <a href="#"> <i class=" fa fa-sign-blank text-danger"></i> Work </a> </li>
            <li> <a href="#"> <i class=" fa fa-sign-blank text-success"></i> Design </a> </li>
            <li> <a href="#"> <i class=" fa fa-sign-blank text-info "></i> Family </a>
            </li><li> <a href="#"> <i class=" fa fa-sign-blank text-warning "></i> Friends </a>
            </li><li> <a href="#"> <i class=" fa fa-sign-blank text-primary "></i> Office </a>
            </li>
        </ul>
        <ul class="nav nav-pills nav-stacked labels-info ">
            <li> <h4>Buddy online</h4> </li>
            <li> <a href="#"> <i class=" fa fa-circle text-success"></i>Alireza Zare <p>I do not think</p></a>  </li>
            <li> <a href="#"> <i class=" fa fa-circle text-danger"></i>Dark Coders<p>Busy with coding</p></a> </li>
            <li> <a href="#"> <i class=" fa fa-circle text-muted "></i>Mentaalist <p>I out of control</p></a>
            </li><li> <a href="#"> <i class=" fa fa-circle text-muted "></i>H3s4m<p>I am not here</p></a>
            </li><li> <a href="#"> <i class=" fa fa-circle text-muted "></i>Dead man<p>I do not think</p></a>
            </li>
        </ul>

        <div class="inbox-body text-center">
            <div class="btn-group">
                <a class="btn mini btn-primary" href="javascript:;">
                    <i class="fa fa-plus"></i>
                </a>
            </div>
            <div class="btn-group">
                <a class="btn mini btn-success" href="javascript:;">
                    <i class="fa fa-phone"></i>
                </a>
            </div>
            <div class="btn-group">
                <a class="btn mini btn-info" href="javascript:;">
                    <i class="fa fa-cog"></i>
                </a>
            </div>
        </div>

    </aside>
        
    
</template>

<script>
import { eventBus } from "./main";
import Compose from './Compose'

export default {
    components: {
        AppCompose: Compose
    },
    props: {
        messages: {
            type : Array,
            required: true
        }
    },
    data() {
        return {
            activeView: 'app-inbox'
        }
    },
    created(){
        eventBus.$on('changeView', data => this.activeView = data.tag)
    },
    methods: {
        navigate(newView, title){
            eventBus.$emit('changeView', {
                tag: newView,
                title: title
            })
        }
    },
    computed:{
        unreadMessages: function(){
            return this.messages.filter( (message) => {
                return (message.type == 'incoming' && !message.isRead)
            })
        },

        sentMessages: function(){
            return this.messages.filter( (message) => {
                return (message.type == 'outgoing' && !message.isDeleted)
            })
        },

        importantMessages: function(){
            return this.messages.filter( (message) => {
                return (message.type == 'incoming' && message.isImportant && !message.isDeleted)
            })
        },

        trashMessages: function(){
            return this.messages.filter( message => {
                return message.isDeleted
            })
        }
        
    }
}
</script>