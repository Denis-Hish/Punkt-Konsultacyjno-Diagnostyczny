import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const TabsComponent = () => {
   const [key, setKey] = useState('questions-1');

   return (
      <Tabs id="justify" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
         <Tab
            eventKey="questions-1"
            title={
               <>
                  <i className="i-icon bi bi-1-circle me-2"></i>
                  <p>pytanie</p>
               </>
            }
         >
            <div>
               <p>Czy należy informować kogoś o wykrytym zakażeniu</p>
               <i className="i-icon bi bi-question-circle ms-2"></i>
            </div>
         </Tab>
         <Tab
            eventKey="questions-2"
            title={
               <>
                  <i className="i-icon bi bi-2-circle me-2"></i>
                  <p>pytanie</p>
               </>
            }
         >
            <div>
               <p>Jak życie z HIV różni się od życia bez wirusa</p>
               <i className="i-icon bi bi-question-circle ms-2"></i>
            </div>
         </Tab>
         <Tab
            eventKey="questions-3"
            title={
               <>
                  <i className="i-icon bi bi-3-circle me-2"></i>
                  <p>pytanie</p>
               </>
            }
         >
            <div>
               <p>Jak wygląda leczenie osób zakażonych HIV</p>
               <i className="i-icon bi bi-question-circle ms-2"></i>
            </div>
         </Tab>
      </Tabs>
   );
};

export default TabsComponent;
