const ChatPage = ()=>{
    return (
        <div className="flex content-center p-0 m-0">
        <div></div>
        <div className="w-full">
        <form className="fixed flex mb-2.5 bg-white">
            <input className="grow" type="text" id="message-input"/>
            <button type="submit" id="send-button">Send</button>
        </form>
        </div>
        </div>
    )
}

export default ChatPage;