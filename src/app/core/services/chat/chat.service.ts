import { Injectable, signal } from '@angular/core';
import { IMessage, MessageUserData } from '../../models/chat.model';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private chat = signal<IMessage[]>([]);
  currentChat = this.chat.asReadonly();

  dummyFriendData: MessageUserData;
  dummyOwnData: MessageUserData;

  constructor() {
    const { dummyChat, dummyFriendData, dummyOwnData } =
      this.generateDummyData();
    this.dummyFriendData = dummyFriendData;
    this.dummyOwnData = dummyOwnData;
    this.chat.set(dummyChat);
  }

  addMessageToChat(message: IMessage) {
    this.chat.update((oldChat) => [...oldChat, message]);

    setTimeout(() => {
      this.chat.update((oldChat) => [...oldChat, this.getFriendMsg()]);
    }, 700);
  }

  private generateDummyData() {
    const dummyFriendData: MessageUserData = {
      name: 'Dan Wilson',
      imgUrl: 'users/male11.png',
      isOwnMessage: false,
    };

    const dummyOwnData: MessageUserData = {
      name: 'You',
      imgUrl: 'users/male14.png',
      isOwnMessage: true,
    };

    const dummyChat: IMessage[] = [
      {
        user: dummyFriendData,
        time: '5 Hours',
        msg: 'How likely are you to recommend our company to your friends and family ?',
      },
      {
        user: dummyOwnData,
        time: '4 Hours',
        msg: `Hey there, we're just writing to let you know that you've been subscribed to a repository on GitHub.`,
      },
      {
        user: dummyFriendData,
        time: '3 Hours',
        msg: 'Ok, Understood!',
      },
      {
        user: dummyOwnData,
        time: '2 Hours',
        msg: `You'll receive notifications for all issues, pull requests!`,
      },
      {
        user: dummyFriendData,
        time: '1 Hours',
        msg: 'You can unwatch this repository immediately by clicking here: Keenthemes.com',
      },
      {
        user: dummyOwnData,
        time: '5 mins',
        msg: `Most purchased Business courses during this sale!`,
      },
      {
        user: dummyFriendData,
        time: '2 mins',
        msg: 'Company BBQ to celebrate the last quater achievements and goals. Food and drinks provided',
      },
    ];

    return { dummyFriendData, dummyOwnData, dummyChat };
  }

  private getFriendMsg(): IMessage {
    return {
      user: this.dummyFriendData,
      time: 'Just now',
      msg: 'Thank you for your awesome support!',
    };
  }
}
