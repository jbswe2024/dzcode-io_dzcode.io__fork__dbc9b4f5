import { createStackNavigator } from "@react-navigation/stack";
import { ErrorBoundary } from "components";
import React, { FC } from "react";

import { ArticleDetailsScreen } from "./article-details";
import { ArticlesListScreen } from "./articles-list";

const { Navigator, Screen } = createStackNavigator();

export const Navigation: FC = () => {
  return (
    <ErrorBoundary>
      <Navigator initialRouteName={"articles-list"} headerMode={"none"}>
        <Screen name="articles-list" component={ArticlesListScreen} />
        <Screen name="article-details" component={ArticleDetailsScreen} />
      </Navigator>
    </ErrorBoundary>
  );
};
