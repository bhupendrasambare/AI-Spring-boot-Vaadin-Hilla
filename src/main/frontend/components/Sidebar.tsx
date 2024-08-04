import React, { useState } from 'react';
import { AppLayout } from '@vaadin/react-components/AppLayout.js';
import { DrawerToggle } from '@vaadin/react-components/DrawerToggle.js';
import { Tabs } from '@vaadin/react-components/Tabs.js';
import { Tab } from '@vaadin/react-components/Tab.js';
import { Icon } from '@vaadin/react-components/Icon.js';
import '@vaadin/icons';

const iconStyle: React.CSSProperties = {
  boxSizing: 'border-box',
  marginInlineEnd: 'var(--lumo-space-m)',
  padding: 'var(--lumo-space-xs)',
};

interface WrapperComponentProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<WrapperComponentProps> = ({ children }) => {

    const [sidebarOpen,setSidebarOpen] = useState<boolean>(false);


    return (
        <AppLayout primarySection="drawer" theme='dark'>

            <Tabs theme='dark' className='h-100 my-0' slot="drawer" selected={1} orientation="vertical">
                <Tab>
                    <a tabIndex={-1}>
                        <Icon icon="vaadin:clock" style={iconStyle} />
                        <span>Dashboard</span>
                    </a>
                </Tab>
                <Tab>
                    <a tabIndex={-1}>
                        <Icon icon="vaadin:clock" style={iconStyle} />
                        <span>Dashboard</span>
                    </a>
                </Tab>

                <Tab>
                    <a tabIndex={-1}>
                        <Icon icon="vaadin:cart" style={iconStyle} />
                        <span>Orders</span>
                    </a>
                </Tab>
            </Tabs>

            <div>
                {children}
            </div>
        </AppLayout>
    );
}

export default Sidebar