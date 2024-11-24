import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from './TabButton.jsx'
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        // selectedButton => 'components', 'jsx', 'props', 'state'
        setSelectedTopic(selectedButton);
        // console.log(selectedTopic);
    }



    let tabContent = <p>اضغط هنا </p>;

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }
    return (
        <Section id="examples">
            <h2>الفهرس</h2>

            <Tabs
                buttons={
                    <>
                        <TabButton
                            isSelected={selectedTopic === 'airport'}
                            onSelect={() => handleSelect('airport')}
                        >
                            المطار

                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'intheway'}
                            onSelect={() => handleSelect('intheway')}
                        >
                            الطريق
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'numberandsize'}
                            onSelect={() => handleSelect('numberandsize')}
                        >
                            الأعداد والأحجام
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'emergency'}
                            onSelect={() => handleSelect('emergency')}
                        >
                            حالات الطوارئ
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'inTheCity'}
                            onSelect={() => handleSelect('inTheCity')}
                        > المدينة                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'study'}
                            onSelect={() => handleSelect('study')}
                        > التعلم                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'work'}
                            onSelect={() => handleSelect('work')}
                        > العمل                       </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'hous'}
                            onSelect={() => handleSelect('hous')}
                        > المنزل                    </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'resturant'}
                            onSelect={() => handleSelect('resturant')}
                        > المطعم                      </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'shoping'}
                            onSelect={() => handleSelect('shoping')}
                        > التسوق             </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'hospital'}
                            onSelect={() => handleSelect('hospital')}
                        > المستشفى            </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'polis'}
                            onSelect={() => handleSelect('polis')}
                        > مركز الشرطة       </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'post'}
                            onSelect={() => handleSelect('post')}
                        > البريد</TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'internet'}
                            onSelect={() => handleSelect('internet')}
                        > اتصالات </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'trafik'}
                            onSelect={() => handleSelect('trafik')}
                        > مركز المرور </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'rathous'}
                            onSelect={() => handleSelect('rathous')}
                        > مركز البلدية  </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'bank'}
                            onSelect={() => handleSelect('bank')}
                        > البنك  </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'years'}
                            onSelect={() => handleSelect('years')}
                        >                         السنة والايام
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'wather'}
                            onSelect={() => handleSelect('wather')}
                        >                       الطقس
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'mathematik'}
                            onSelect={() => handleSelect('mathematik')}
                        >                     الرياضيات
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'natur'}
                            onSelect={() => handleSelect('natur')}
                        >                     الأحياء
                        </TabButton> 
                        <TabButton
                            isSelected={selectedTopic === 'sport'}
                            onSelect={() => handleSelect('sport')}
                        >                     الرياضة
                        </TabButton> 
                        <TabButton
                            isSelected={selectedTopic === 'play'}
                            onSelect={() => handleSelect('play')}
                        >                     الألعاب 
                        </TabButton> 
                        <TabButton
                            isSelected={selectedTopic === 'koch'}
                            onSelect={() => handleSelect('koch')}
                        >                     الطعام والطبخ 
                        </TabButton> 
                        <TabButton
                            isSelected={selectedTopic === 'verb'}
                            onSelect={() => handleSelect('verb')}
                        >                     اهم الأفعل في الألمانية  
                        </TabButton> 
                        
                        





                    </>


                }
            >
                {tabContent}
            </Tabs>
        </Section>
    );
}