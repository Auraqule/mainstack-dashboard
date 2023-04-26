type AnalyticsData = {
  graph_data: {
    views: {
      [date: string]: number;
    };
  };
  top_locations: {
    country: string;
    count: number;
    percent: number;
  }[];
  top_sources: {
    source: string;
    count: number;
    percent: number;
  }[];
};

export default AnalyticsData;
