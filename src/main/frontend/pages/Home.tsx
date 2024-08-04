import { DrawerToggle, Icon, MessageInput, MessageInputSubmitEvent, Notification, Select } from '@vaadin/react-components';
import Sidebar from 'Frontend/components/Sidebar';
import React from 'react'
import "../style/home.css"

function Home() {
    function handleSubmit(event: MessageInputSubmitEvent) {
        const message = event.detail.value;
        Notification.show(`Message received: ${message}`, { position: 'middle' });
    }
    
    const items = [
        {
          label: 'Spring Boot AI',
          value: 'recent',
        },
        {
          label: 'Spring AI',
          value: 'recent',
        }
      ];

    return (<>
        <Sidebar>
            <div className="home">
                <div className="h-95">
                    <div className='d-flex justify-content-between'>
                        <div className='align-items-center d-flex'>
                            <DrawerToggle />
                            <h2>
                                <Select theme='dark' items={items} value={items[0].value} />
                            </h2>
                        </div>
                        <div className="profile-div">
                            <span className='profile-name shadow-lg'>BS</span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <MessageInput onSubmit={handleSubmit} />
                </div>
            </div>
        </Sidebar>
    </>)
}

export default Home