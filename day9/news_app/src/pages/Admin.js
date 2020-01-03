import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ArticleAnalyse, RecentPublish } from './dashboard/index';

import Frame from './Frame';

export class Admin extends React.Component {

    render() {
        
        return (
            <Frame>
                公共区域发的飞洒地方
                <Switch>
                    <Route path={'/admin/analyse'} component={ArticleAnalyse} />
                    <Route path={'/admin/recent'} component={RecentPublish} />
                </Switch>
            </Frame>
        )
    }
}