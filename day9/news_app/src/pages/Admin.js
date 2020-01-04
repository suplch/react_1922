import React from 'react';
import Cookie from 'js-cookie';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ArticleAnalyse, RecentPublish } from './dashboard/index';

import { NewArticle, ArticleList } from './article_manage/index'

import Frame from './Frame';

export class Admin extends React.Component {

    componentDidMount() {
        const token = Cookie.get('token');
        if (!token) {
            window.location.hash = '#/login'
        }
    }

    render() {
        
        return (
            <Frame>
                <Switch>
                    <Route path={'/admin/analyse'} exact component={ArticleAnalyse} />
                    <Route path={'/admin/recent'} exact component={RecentPublish} />
                    <Route path={'/admin/create_article'} exact component={NewArticle} />
                    <Route path={'/admin/search'} exact component={ArticleList} />
                </Switch>
            </Frame>
        )
    }
}