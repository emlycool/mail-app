<template>

    <div class="inbox-body">
        <div class="mail-option">
            <div class="chk-all">
                <input type="checkbox" class="mail-checkbox mail-group-checkbox">
                <div class="btn-group">
                    <a data-toggle="dropdown" href="#" class="btn mini all" aria-expanded="false">
                        All
                        <i class="fa fa-angle-down "></i>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a href="#"> None</a></li>
                        <li><a href="#"> Read</a></li>
                        <li><a href="#"> Unread</a></li>
                    </ul>
                </div>
            </div>

            <div class="btn-group">
                <a  href="#" class="btn mini tooltips" @click.prevent="refresh()">
                    <i class=" fa fa-refresh"></i>..
                </a>
            </div>
            <div class="btn-group hidden-phone">
                <a data-toggle="dropdown" href="#" class="btn mini blue" aria-expanded="false">
                    More
                    <i class="fa fa-angle-down "></i>
                </a>
                <ul class="dropdown-menu">
                    <li><a href="#"><i class="fa fa-pencil"></i> Mark as Read</a></li>
                    <li><a href="#"><i class="fa fa-ban"></i> Spam</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="fa fa-trash-o"></i> Delete</a></li>
                </ul>
            </div>
            <div class="btn-group">
                <a data-toggle="dropdown" href="#" class="btn mini blue">
                    Move to
                    <i class="fa fa-angle-down "></i>
                </a>
                <ul class="dropdown-menu">
                    <li><a href="#"><i class="fa fa-pencil"></i> Mark as Read</a></li>
                    <li><a href="#"><i class="fa fa-ban"></i> Spam</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="fa fa-trash-o"></i> Delete</a></li>
                </ul>
            </div>

            <ul class="unstyled inbox-pagination">
                <li><span>1-50 of 234</span></li>
                <li>
                    <a class="np-btn" href="#"><i class="fa fa-angle-left  pagination-left"></i></a>
                </li>
                <li>
                    <a class="np-btn" href="#"><i class="fa fa-angle-right pagination-right"></i></a>
                </li>
            </ul>
        </div>
        <app-messages :messages="inboxMessages"></app-messages>
    </div>
</template>

<script>
import Messages from './Messages'
import {eventBus} from './main'

export default {
    data() {
        return {
            inboxes: this.data.messages
        }
    },
    props:{
        data: {
            type: Object,
            required: true  
        }
    },
    components:{
        AppMessages: Messages
    },
    methods:{
        refresh(){
            eventBus.$emit('refreshMessages');
        }
    },
    computed: {
        inboxMessages(){
            return this.inboxes.filter( (message) => {
                return (message.type == 'incoming' && !message.isDeleted)
            })
        }
    }
}
</script>

