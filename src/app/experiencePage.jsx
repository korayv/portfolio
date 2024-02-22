import React, { useState } from 'react';

const ExperiencePage = () => {
    const [content, setContent] = useState({
        title: "Co-founder and Product Manager @Medicurism",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam suscipit velit, ut magnam repudiandae fugit voluptate tempora aspernatur! Unde quia culpa repudiandae, recusandae vitae minus debitis, ratione suscipit nesciunt dignissimos ea placeat earum cumque maxime perspiciatis rem? Tempore, placeat quia?",
    });
    const [selectedCompany, setSelectedCompany] = useState('Medicurism');

    const handleClick = (company) => {
        setSelectedCompany(company);
        if (company === 'Medicurism') {
            setContent({
                title: "Co-founder and Product Manager @Medicurism",
                description: "A medical treatment start-up built for health tourism in Turkiye.",
            });
        } else if (company === 'Netsim') {
            setContent({
                title: "Product Manager @Netsim Software Inc.",
                description: "A company that builds ERP products for desktop.",
            });
        } else if (company === 'Raspberrify') {
            setContent({
                title: "Lead Developer @Raspberrify",
                description: "A startup-driven web development company, catering to startups through freelance projects.",
            });
        }
    };

    // Helper function to determine if the company is selected
    const isSelected = (company) => selectedCompany === company;

    return (
        <div>
            <h2 className="mt-20 mb-3 text-center text-2xl font-semibold text-yellow-500">
                Where I Worked
            </h2>
            <div className="grid grid-cols-5 gap-4">
                <div id="xp-container" className="col-span-2 text-white">
                    <div className="mt-5 mb-32 grid text-center lg:mb-0 lg:grid-cols-1 lg:text-left">
                        {/* Medicurism */}
                        <div onClick={() => handleClick('Medicurism')} className={`cursor-pointer group rounded-lg border px-5 py-4 transition-colors ${isSelected('Medicurism') ? 'bg-gray-800 border-gray-300' : 'border-transparent hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'}`}>
                            <h2 className="mb-3 text-2xl font-semibold text-white">Medicurism -&gt;</h2>
                            <p className="m-0 max-w-[30ch] text-sm opacity-50 text-white">A medical treatment start-up built for health tourism in Turkiye.</p>
                        </div>
                        {/* Netsim Software Inc. */}
                        <div onClick={() => handleClick('Netsim')} className={`cursor-pointer group rounded-lg border px-5 py-4 transition-colors ${isSelected('Netsim') ? 'bg-gray-800 border-gray-300' : 'border-transparent hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'}`}>
                            <h2 className="mb-3 text-2xl font-semibold text-white">Netsim Software Inc. -&gt;</h2>
                            <p className="m-0 max-w-[30ch] text-sm opacity-50 text-white">A company that builds ERP products for desktop.</p>
                        </div>
                        {/* Raspberrify */}
                        <div onClick={() => handleClick('Raspberrify')} className={`cursor-pointer group rounded-lg border px-5 py-4 transition-colors ${isSelected('Raspberrify') ? 'bg-gray-800 border-gray-300' : 'border-transparent hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'}`}>
                            <h2 className="mb-3 text-2xl font-semibold text-white">Raspberrify -&gt;</h2>
                            <p className="m-0 max-w-[30ch] text-sm opacity-50 text-white">A startup-driven web development company, catering to startups through freelance projects.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 text-center text-white mt-20">
                    <h2 className="text-xl font-bold">{content.title}</h2>
                    <p className="mt-4 px-10">{content.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ExperiencePage;
