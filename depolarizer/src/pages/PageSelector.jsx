import Question from './Question'
import MainPage from './MainPage'
import { Tab, Tabs } from '@mui/material'
import { useState } from 'react'

function PageSelector() {
    const [page, setPage] = useState("questions");

    return (
        <div className="flex flex-col min-h-full h-full max-h-full">
            <Tabs className="flex-shrink-0 tab-picker" value={page} onChange={(e, value) => setPage(value)}>
                <Tab label="Survey" value="questions" />
                <Tab label="News" value="mainpage" />
            </Tabs>

            <div className="flex flex-grow-0 flex-shrink overflow-scroll" style={{scrollbarWidth: "none"}}>
                {(page == "questions") && <Question />}
                {(page == "mainpage") && <MainPage />}
            </div>
        </div>
    )
}

export default PageSelector;
