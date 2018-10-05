import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addNewEvent, leaveRoom } from './actionCreators.js'
import { browserHistory } from 'react-router'
import socket from 'socket.io-client';

class Chatbox extends React.Component {
    constructor(props) {
        super(props);
        this.socket = socket();
        this.handleSubmit = (e) => {
			e.preventDefault();

			if(this.chatInput.value.length) {
                console.log('submitted');
				this.socket.emit('chat-event', { 
					//type: MESSAGE, 
					body: this.chatInput.value,
					//sender: this.props.chat.room.username,
					time: Date.now()
				});
			}
			
			this.chatInput.value = '';
        };
        
        this.emitRoomLeaveEventToSocket = () => {
            this.socket.emit('chat-event', {
                  type: ROOM_LEAVE,
                  user: this.props.chat.room.username,
                  time: Date.now()
              })
        };

        this.handleKeyPress = (e) => {
			if(e.key == 'Enter'){
			  this.handleSubmit(e);
			}
		};
    }
    render() {
        return (
            <div>
                <section>
                    <h2>You are chatting with {/* ${this.props.name} */}</h2>
                    <div id="window">
                        <div id="output"></div>
                        <div id="feedback"></div>
                    </div>
                    <form id="chat-form" name="message-entry" onSubmit={this.handleSubmit.bind(this)}> 
                        <div id="chat-input-row"> 
                            <textarea type="text"
                            id = "chat-input"
                            name = "chat-input"
                            onKeyPress = {this.handleKeyPress}
                            ref ={(input) => this.chatInput = input}/>
                            <button id="chat-submit" className="btn" type="submit">SEND</button>
                        </div> 
                    </form>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
	return { 
		home: state.home,
		chat: state.chat
	}
}

const mapDispatchToProps = (dispatch) => {
	return { 
		addNewEvent	: bindActionCreators(addNewEvent, dispatch),
		leaveRoom: bindActionCreators(leaveRoom, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Chatbox);
