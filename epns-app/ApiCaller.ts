import axios from 'axios';
import {EpnsNotificationSender} from './EpnsNotificationSender';

var epnsSender = new EpnsNotificationSender();

axios.get("")
  .then(function(response) {
    if (response.data["fsdfsd"] > "") {
      epnsSender.sendNotification();

    }
  })
  .catch(function(response) {

});
