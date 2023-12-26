import { Route, Routes } from 'react-router-dom';

import HeaderFooter from './components/common/HeaderFooter';
import Home from './screens/Home';
import NewsList from './screens/NewsList';
import NovelsList from './screens/NovelsList';
import VideosList from './screens/VideosList';
import NewsArticlesDetail from './screens/NewsArticlesDetail';
import NovelDetail from './screens/NovelDetail';
import VideoDetail from './screens/VideoDetail';
import QuestionAnswer from './screens/QuestionAnswer';
import Weather from './screens/Weather';
import SearchResults from './screens/SearchResults';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HeaderFooter />}>
                <Route index element={<Home />} />
                <Route path="news" element={<NewsList />} />
                <Route path="novels" element={<NovelsList />} />
                <Route path="videos" element={<VideosList />} />
            </Route>
            <Route path="search" element={<SearchResults />} />
            <Route path="/news/:news_id" element={<NewsArticlesDetail />} />
            <Route path="/novels/:novel_id" element={<NovelDetail />} />
            <Route path="/videos/:video_id" element={<VideoDetail />} />
            <Route path="/question-answer" element={<QuestionAnswer />} />
            <Route path="/weather" element={<Weather />} />
        </Routes>
    );
}

export default AppRoutes;
