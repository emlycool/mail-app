import Inbox from './Inbox'
import Sent from './Sent'
import Important from './Important'
import Trash from './Trash'
import MessageDetails from './MessageDetails'

export default[
    {path: '', component: Inbox},
    {path: '/inbox', component: Inbox},
    {path: '/sent', component: Sent},
    {path: '/important', component: Important},
    {path: '/trash', component: Trash},
    {path: '/message-details', component: Trash},
    {path: '*', component:{template: '<div><h1>Page not found</h1></div>'}}
]
