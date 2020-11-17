import MessageList from './MessageList';

export default {
    title: 'MessageApp/MessageList',
    component: MessageList,
};

export const MessageListSelected = () => (
    <MessageList messages={[{brief: "two", detail: "two details"}, {brief: "one", detail: "one details"}]} selected={{brief: "two", detail: "two details"}} setSelected={() => {}}/>
);