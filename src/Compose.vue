<template>
    <div>
        <a href="#myModal" data-toggle="modal"  title="Compose"    class="btn btn-compose btn-primary">
            Compose
        </a>
        <!-- Modal -->
        <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal" class="modal fade" style="display: none;">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                        <h4 class="modal-title">Compose</h4>
                    </div>
                    <div class="modal-body">
                        <form role="form" class="form-horizontal" @submit.prevent="compose()">
                            <div class="form-group">
                                <label class="col-lg-2 control-label">To</label>
                                <div class="col-lg-10">
                                    <input type="text" placeholder="" id="inputEmail1" class="form-control" v-model="message.to">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-lg-2 control-label">Cc / Bcc</label>
                                <div class="col-lg-10">
                                    <input type="text" placeholder="seperate with comma(,)" id="cc" class="form-control" v-model="message.bbc">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-lg-2 control-label">Subject</label>
                                <div class="col-lg-10">
                                    <input type="text" placeholder="" id="inputPassword1" class="form-control" v-model="message.subject">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-lg-2 control-label">Message</label>
                                <div class="col-lg-10">
                                    <textarea rows="10" cols="30" class="form-control" id="" name="" v-model="message.content"></textarea>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-lg-offset-2 col-lg-10">
                                    <span class="btn green fileinput-button">
                                    <i class="fa fa-plus fa fa-white"></i>
                                    <span>Attachment</span>
                                    <input type="file" name="files[]" multiple="">
                                    </span>
                                    <button class="btn btn-send" type="submit">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
    </div>
</template>

<script>
import {eventBus} from './main'
import moment from 'moment'
import JQuery from 'jquery'
window.$ = JQuery

export default {
    data() {
        return {
            message:{
                subject: '',
                to: '',
                bbc: '',
                content: ''
                
            }
        }
    },
    computed: {
        
    },
    methods:{
        compose(){
            eventBus.$emit('sendMessage', {
                subject: this.message.subject,
                content: this.message.content,
                to: this.message.to,
                bbc:this.message.bbc.split(',',3),
                isDeleted: false,
                type: 'outgoing',
                date: moment(),
                from: {
                    name: 'Bo Andersen',
                    email: 'info@codingexplained.com'
                },
                attachments: []
            })
            $('#myModal').modal('hide')
        }
    }
}
</script>