<template>
    <div class="table-responsive">
        <table class="table table-inbox table-hover" v-if="messages.length > 0">
            <tbody>
                <tr :class="{'unread': !message.isRead && message.isRead !== undefined}" v-for="(message, i) in messages" :key="i" @click="viewMessage(message)">
                    <td class="inbox-small-cells">
                        <input type="checkbox" class="mail-checkbox">
                    </td>
                    <td class="inbox-small-cells">
                        <span v-if="message.isImportant !== undefined">
                            <i :class="['fa', 'fa-star', {'inbox-started' : message.isImportant}]" @click.stop="message.isImportant = !message.isImportant"></i> 
                        </span>
                    </td>
                    <td class="view-message  dont-show">{{message.from.name}}</td>
                    <td class="view-message ">{{message.subject}}</td>
                    <td class="view-message  inbox-small-cells"><i class="fa fa-paperclip" v-if="message.attachments.length > 0"></i></td>
                    <td class="view-message  text-right">{{message.date.fromNow()}}</td>
                </tr>
              
            </tbody>
        </table>
        <p v-else>No messages yet</p>
    </div>
</template>

<script>
import messages from './data/messages'
import {eventBus} from './main'
export default {
    props: {
        messages: {
            type: Array,
            required: true
        }
    },
    created(){
        
    },
    methods: {
        viewMessage(message){
            message.isRead = true
            eventBus.$emit('changeView', {
                tag: 'app-message-details',
                title: message.subject,
                data: {
                    message: message
                }
            })
        }
    },
}
</script>