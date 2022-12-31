import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { smartanalyticsApi } from 'services/baseUrl';
import { IIframeSSOResponse, IReportSmartData } from 'services/types';

export const smartAnaliticApi = createApi({
  reducerPath: 'smartAnaliticApi',
  baseQuery: fetchBaseQuery({ baseUrl: smartanalyticsApi }),
  endpoints: (builder) => ({
    getSmartDataSSO: builder.query({
      query: ({ email, hash, timestamp }) => ({
        url: '/api/sso/',
        params: {
          email,
          hash,
          project_id: process.env.REACT_APP_SMARTANALITIC_PROJECT_ID,
          timestamp,
        },
      }),
      transformResponse: (response: IIframeSSOResponse) => response.hash,
    }),
    addReportSmartData: builder.mutation({
      query: (ownerId) => ({
        url: '/api/reference/reports/',
        method: 'POST',
        credentials: 'include',
        headers: {
          Authorization: process.env.REACT_APP_SMARTANALITIC_AUTHTOKEN,
        },
        params: {
          profile_id: 2065,
        },
        body: {
          name: `Отчет для ЛК | Пользователь ${ownerId}`,
          description: '',
          items: [
            {
              tables: [
                {
                  metrics: [
                    {
                      id: 7014456,
                      type: 'PLAIN',
                    },
                    {
                      id: 7014451,
                      type: 'PLAIN',
                    },
                    {
                      id: 7014442,
                      type: 'PLAIN',
                    },
                    {
                      id: 7014452,
                      type: 'PLAIN',
                    },
                    {
                      id: 5773,
                      type: 'CALCULATED',
                    },
                    {
                      id: 7014454,
                      type: 'PLAIN',
                    },
                    {
                      id: 7014453,
                      type: 'PLAIN',
                    },
                    {
                      id: 7014455,
                      type: 'PLAIN',
                    },
                    {
                      id: 5763,
                      type: 'CALCULATED',
                    },
                    {
                      id: 5762,
                      type: 'CALCULATED',
                    },
                    {
                      id: 5774,
                      type: 'CALCULATED',
                    },
                  ],
                  breads: [
                    {
                      is_default: true,
                      type: 'DIMENSION',
                      id: 7002899,
                    },
                    {
                      type: 'DIMENSION',
                      filter: '',
                      id: 7003558,
                    },
                  ],
                  multi_breads: [],
                  sub_breads: [
                    {
                      type: 'DIMENSION',
                      id: 7002905,
                    },
                    {
                      type: 'DIMENSION',
                      id: 7002911,
                    },
                    {
                      type: 'DIMENSION',
                      id: 7002893,
                    },
                  ],
                  settings: {
                    sort: {
                      field: 'new_zakazi_mpfin',
                      isReversed: true,
                    },
                    nesting: {
                      multi: false,
                      table: true,
                      linear: false,
                    },
                    flatTable: false,
                    cohortMode: false,
                    cohortType: 'first_visit',
                    itemsPerPage: 10,
                    subItemsLimit: 50,
                    attributionModel: 'last_interaction',
                    headerItemsOrder: null,
                    wideLinearBreads: false,
                    specifiedItemsFilter: null,
                    attributionLookupPeriod: null,
                    includeInsignificantPath: true,
                    activeLinearBreadDdFilters: true,
                    filter: `RESERVED_CUSTOM_53_996==${ownerId}`,
                    interval: null,
                  },
                },
              ],
              diagrams: [
                {
                  dateUnit: 'date',
                  axes: {
                    x: [],
                    y: [],
                    z: [],
                  },
                  type: 'line',
                  title: 'Диаграмма',
                  size: {
                    width: 4,
                    height: 3,
                  },
                  position: {
                    top: 0,
                    left: 0,
                  },
                  stats_segments: [],
                  auto_stats_segments: null,
                  settings: {
                    showY: true,
                    theme: null,
                    opacity: 80,
                    twoAxes: false,
                    distance: 0,
                    showGrid: false,
                    showChart: true,
                    showTitle: false,
                    showTotal: true,
                    smoothing: false,
                    thickness: 35,
                    separation: 0,
                    showLabels: false,
                    showLegend: true,
                    fillNumbers: true,
                    linearFirst: false,
                    showBullets: false,
                    normalization: true,
                    showTextLabels: false,
                    showCellBorders: true,
                    showStackTotals: false,
                    dynamicIndication: false,
                    showDigitalLabels: false,
                    alternateRowColors: true,
                    optimizeBigNumbers: true,
                    relativeCalculation: true,
                  },
                },
              ],
              settings: {
                isPrediction: false,
              },
            },
          ],
          date_ranges: [
            {
              period: 'this',
              unit: 'year',
              count: 1,
            },
          ],
          report_group_id: 2,
          type: 'BASIC',
          diagrams_grid: {
            width: 28,
            height: 7,
          },
          published: false,
          publish_request: null,
          settings: {
            showTable: true,
            showBreads: true,
            isPrediction: false,
            showDiagrams: false,
            showActiveDiagramConfig: true,
          },
        },
      }),
      transformResponse: (response: IReportSmartData) => response.id,
    }),
  }),
});
