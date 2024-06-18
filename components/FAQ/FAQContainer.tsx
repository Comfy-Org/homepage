import { Accordion } from 'flowbite-react';

interface FAQ {
    question: string;
    answer: string;
}

interface FAQContainerProps {
    questions: FAQ[];
}

const FAQContainer: React.FC<FAQContainerProps> = ({ questions }) => {
    return (
        <div className="rounded-lg shadow mb-10">
            <h2 className="text-[20px] font-bold text-gray-300 mb-4">Frequently Asked Questions</h2>
            <Accordion alwaysOpen={true}>
                {questions.map(({ question, answer }) => {
                    return (
                        <Accordion.Panel key={question}>
                            <Accordion.Title className="text-gray-300 font-semibold" style={{
                                backgroundColor: 'rgb(17 24 39)'
                            }}>
                                {question}
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-300 dark:text-gray-300">
                                    {answer}
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                    )
                })}
            </Accordion>
        </div>
    );
}

export default FAQContainer;