import { rest } from 'msw'

const handlers = [
  rest.get('https://api.uselotus.io/api/plans/', async (_, res, ctx) => {
    return res(
      ctx.json({
        data: [
          {
            plan_name: 'Starter Plan',
            plan_duration: 'monthly',
            status: 'active',
            external_links: [],
            plan_id: 'plan_8bd8a9a56d8c4b7cb5c56d76fc76f237',
            parent_plan: null,
            target_customer: null,
            display_version: {
              description: null,
              flat_fee_billing_type: 'in_advance',
              flat_rate: 0,
              recurring_charges: [
                {
                  name: 'Flat Fee',
                  charge_timing: 'in_advance',
                  charge_behavior: 'prorate',
                  amount: 0,
                  pricing_unit: {
                    code: 'USD',
                    name: 'US Dollar',
                    symbol: '$',
                  },
                },
              ],
              components: [
                {
                  billable_metric: {
                    metric_id: 'metric_768384d1b25d4f5387689f40ae30a3e2',
                    event_name: 'email_sent',
                    property_name: null,
                    aggregation_type: 'count',
                    granularity: 'total',
                    event_type: null,
                    metric_type: 'counter',
                    metric_name: 'Number of emails',
                    numeric_filters: [],
                    categorical_filters: [],
                    is_cost_metric: false,
                    custom_sql: null,
                    proration: null,
                  },
                  tiers: [
                    {
                      type: 'free',
                      range_start: 0,
                      range_end: 5000,
                      cost_per_batch: null,
                      metric_units_per_batch: null,
                      batch_rounding_type: null,
                    },
                    {
                      type: 'per_unit',
                      range_start: 5000,
                      range_end: null,
                      cost_per_batch: 0.3,
                      metric_units_per_batch: 1,
                      batch_rounding_type: 'round_down',
                    },
                  ],
                  pricing_unit: {
                    code: 'USD',
                    name: 'US Dollar',
                    symbol: '$',
                  },
                },
                {
                  billable_metric: {
                    metric_id: 'metric_d199c82cf59b4849ace8340043167b43',
                    event_name: 'email_sent',
                    property_name: 'size',
                    aggregation_type: 'sum',
                    granularity: 'total',
                    event_type: null,
                    metric_type: 'counter',
                    metric_name: 'Total Email Size',
                    numeric_filters: [],
                    categorical_filters: [],
                    is_cost_metric: false,
                    custom_sql: null,
                    proration: null,
                  },
                  tiers: [
                    {
                      type: 'per_unit',
                      range_start: 0,
                      range_end: null,
                      cost_per_batch: 0.001,
                      metric_units_per_batch: 1,
                      batch_rounding_type: 'no_rounding',
                    },
                  ],
                  pricing_unit: {
                    code: 'USD',
                    name: 'US Dollar',
                    symbol: '$',
                  },
                },
              ],
              features: [
                {
                  feature_id: 'feature_1e9ca2d2bc034acd997fc72bc02ac031',
                  feature_name: 'Analytics',
                  feature_description: 'Access to an analytics page',
                },
                {
                  feature_id: 'feature_f772fd1b5b6043a68c6267ef6bb94b85',
                  feature_name: 'Support',
                  feature_description: 'Dedicated support',
                },
              ],
              price_adjustment: null,
              usage_billing_frequency: null,
              version: 1,
              status: 'active',
              plan_name: 'Starter Plan',
              currency: {
                code: 'USD',
                name: 'US Dollar',
                symbol: '$',
              },
              version_id: 'plan_version_ea15ebb6107646ba816957269ee3a83e',
              plan_id: 'plan_8bd8a9a56d8c4b7cb5c56d76fc76f237',
              alerts: [],
              active_subscriptions: 0,
            },
            num_versions: 1,
            active_subscriptions: 0,
            tags: [],
            versions: [
              {
                description: null,
                flat_fee_billing_type: 'in_advance',
                flat_rate: 0,
                recurring_charges: [
                  {
                    name: 'Flat Fee',
                    charge_timing: 'in_advance',
                    charge_behavior: 'prorate',
                    amount: 0,
                    pricing_unit: {
                      code: 'USD',
                      name: 'US Dollar',
                      symbol: '$',
                    },
                  },
                ],
                components: [
                  {
                    billable_metric: {
                      metric_id: 'metric_768384d1b25d4f5387689f40ae30a3e2',
                      event_name: 'email_sent',
                      property_name: null,
                      aggregation_type: 'count',
                      granularity: 'total',
                      event_type: null,
                      metric_type: 'counter',
                      metric_name: 'Number of emails',
                      numeric_filters: [],
                      categorical_filters: [],
                      is_cost_metric: false,
                      custom_sql: null,
                      proration: null,
                    },
                    tiers: [
                      {
                        type: 'free',
                        range_start: 0,
                        range_end: 5000,
                        cost_per_batch: null,
                        metric_units_per_batch: null,
                        batch_rounding_type: null,
                      },
                      {
                        type: 'per_unit',
                        range_start: 5000,
                        range_end: null,
                        cost_per_batch: 0.3,
                        metric_units_per_batch: 1,
                        batch_rounding_type: 'round_down',
                      },
                    ],
                    pricing_unit: {
                      code: 'USD',
                      name: 'US Dollar',
                      symbol: '$',
                    },
                  },
                  {
                    billable_metric: {
                      metric_id: 'metric_d199c82cf59b4849ace8340043167b43',
                      event_name: 'email_sent',
                      property_name: 'size',
                      aggregation_type: 'sum',
                      granularity: 'total',
                      event_type: null,
                      metric_type: 'counter',
                      metric_name: 'Total Email Size',
                      numeric_filters: [],
                      categorical_filters: [],
                      is_cost_metric: false,
                      custom_sql: null,
                      proration: null,
                    },
                    tiers: [
                      {
                        type: 'per_unit',
                        range_start: 0,
                        range_end: null,
                        cost_per_batch: 0.001,
                        metric_units_per_batch: 1,
                        batch_rounding_type: 'no_rounding',
                      },
                    ],
                    pricing_unit: {
                      code: 'USD',
                      name: 'US Dollar',
                      symbol: '$',
                    },
                  },
                ],
                features: [
                  {
                    feature_id: 'feature_1e9ca2d2bc034acd997fc72bc02ac031',
                    feature_name: 'Analytics',
                    feature_description: 'Access to an analytics page',
                  },
                  {
                    feature_id: 'feature_f772fd1b5b6043a68c6267ef6bb94b85',
                    feature_name: 'Support',
                    feature_description: 'Dedicated support',
                  },
                ],
                price_adjustment: null,
                usage_billing_frequency: null,
                version: 1,
                status: 'active',
                plan_name: 'Starter Plan',
                currency: {
                  code: 'USD',
                  name: 'US Dollar',
                  symbol: '$',
                },
                version_id: 'plan_version_ea15ebb6107646ba816957269ee3a83e',
                plan_id: 'plan_8bd8a9a56d8c4b7cb5c56d76fc76f237',
                alerts: [],
                active_subscriptions: 0,
              },
            ],
            taxjar_code: null,
          },
        ],
      }),
    )
  }),
  rest.get(
    `https://api.uselotus.io/api/plans/:planId/`,
    async (_, res, ctx) => {
      return res(
        ctx.json({
          data: {
            plan_name: 'Starter Plan',
            plan_duration: 'monthly',
            status: 'active',
            external_links: [],
            plan_id: 'plan_8bd8a9a56d8c4b7cb5c56d76fc76f237',
            parent_plan: null,
            target_customer: null,
            display_version: {
              description: null,
              flat_fee_billing_type: 'in_advance',
              flat_rate: 0,
              recurring_charges: [
                {
                  name: 'Flat Fee',
                  charge_timing: 'in_advance',
                  charge_behavior: 'prorate',
                  amount: 0,
                  pricing_unit: {
                    code: 'USD',
                    name: 'US Dollar',
                    symbol: '$',
                  },
                },
              ],
              components: [
                {
                  billable_metric: {
                    metric_id: 'metric_768384d1b25d4f5387689f40ae30a3e2',
                    event_name: 'email_sent',
                    property_name: null,
                    aggregation_type: 'count',
                    granularity: 'total',
                    event_type: null,
                    metric_type: 'counter',
                    metric_name: 'Number of emails',
                    numeric_filters: [],
                    categorical_filters: [],
                    is_cost_metric: false,
                    custom_sql: null,
                    proration: null,
                  },
                  tiers: [
                    {
                      type: 'free',
                      range_start: 0,
                      range_end: 5000,
                      cost_per_batch: null,
                      metric_units_per_batch: null,
                      batch_rounding_type: null,
                    },
                    {
                      type: 'per_unit',
                      range_start: 5000,
                      range_end: null,
                      cost_per_batch: 0.3,
                      metric_units_per_batch: 1,
                      batch_rounding_type: 'round_down',
                    },
                  ],
                  pricing_unit: {
                    code: 'USD',
                    name: 'US Dollar',
                    symbol: '$',
                  },
                },
                {
                  billable_metric: {
                    metric_id: 'metric_d199c82cf59b4849ace8340043167b43',
                    event_name: 'email_sent',
                    property_name: 'size',
                    aggregation_type: 'sum',
                    granularity: 'total',
                    event_type: null,
                    metric_type: 'counter',
                    metric_name: 'Total Email Size',
                    numeric_filters: [],
                    categorical_filters: [],
                    is_cost_metric: false,
                    custom_sql: null,
                    proration: null,
                  },
                  tiers: [
                    {
                      type: 'per_unit',
                      range_start: 0,
                      range_end: null,
                      cost_per_batch: 0.001,
                      metric_units_per_batch: 1,
                      batch_rounding_type: 'no_rounding',
                    },
                  ],
                  pricing_unit: {
                    code: 'USD',
                    name: 'US Dollar',
                    symbol: '$',
                  },
                },
              ],
              features: [
                {
                  feature_id: 'feature_1e9ca2d2bc034acd997fc72bc02ac031',
                  feature_name: 'Analytics',
                  feature_description: 'Access to an analytics page',
                },
                {
                  feature_id: 'feature_f772fd1b5b6043a68c6267ef6bb94b85',
                  feature_name: 'Support',
                  feature_description: 'Dedicated support',
                },
              ],
              price_adjustment: null,
              usage_billing_frequency: null,
              version: 1,
              status: 'active',
              plan_name: 'Starter Plan',
              currency: {
                code: 'USD',
                name: 'US Dollar',
                symbol: '$',
              },
              version_id: 'plan_version_ea15ebb6107646ba816957269ee3a83e',
              plan_id: 'plan_8bd8a9a56d8c4b7cb5c56d76fc76f237',
              alerts: [],
              active_subscriptions: 0,
            },
            num_versions: 1,
            active_subscriptions: 0,
            tags: [],
            versions: [
              {
                description: null,
                flat_fee_billing_type: 'in_advance',
                flat_rate: 0,
                recurring_charges: [
                  {
                    name: 'Flat Fee',
                    charge_timing: 'in_advance',
                    charge_behavior: 'prorate',
                    amount: 0,
                    pricing_unit: {
                      code: 'USD',
                      name: 'US Dollar',
                      symbol: '$',
                    },
                  },
                ],
                components: [
                  {
                    billable_metric: {
                      metric_id: 'metric_768384d1b25d4f5387689f40ae30a3e2',
                      event_name: 'email_sent',
                      property_name: null,
                      aggregation_type: 'count',
                      granularity: 'total',
                      event_type: null,
                      metric_type: 'counter',
                      metric_name: 'Number of emails',
                      numeric_filters: [],
                      categorical_filters: [],
                      is_cost_metric: false,
                      custom_sql: null,
                      proration: null,
                    },
                    tiers: [
                      {
                        type: 'free',
                        range_start: 0,
                        range_end: 5000,
                        cost_per_batch: null,
                        metric_units_per_batch: null,
                        batch_rounding_type: null,
                      },
                      {
                        type: 'per_unit',
                        range_start: 5000,
                        range_end: null,
                        cost_per_batch: 0.3,
                        metric_units_per_batch: 1,
                        batch_rounding_type: 'round_down',
                      },
                    ],
                    pricing_unit: {
                      code: 'USD',
                      name: 'US Dollar',
                      symbol: '$',
                    },
                  },
                  {
                    billable_metric: {
                      metric_id: 'metric_d199c82cf59b4849ace8340043167b43',
                      event_name: 'email_sent',
                      property_name: 'size',
                      aggregation_type: 'sum',
                      granularity: 'total',
                      event_type: null,
                      metric_type: 'counter',
                      metric_name: 'Total Email Size',
                      numeric_filters: [],
                      categorical_filters: [],
                      is_cost_metric: false,
                      custom_sql: null,
                      proration: null,
                    },
                    tiers: [
                      {
                        type: 'per_unit',
                        range_start: 0,
                        range_end: null,
                        cost_per_batch: 0.001,
                        metric_units_per_batch: 1,
                        batch_rounding_type: 'no_rounding',
                      },
                    ],
                    pricing_unit: {
                      code: 'USD',
                      name: 'US Dollar',
                      symbol: '$',
                    },
                  },
                ],
                features: [
                  {
                    feature_id: 'feature_1e9ca2d2bc034acd997fc72bc02ac031',
                    feature_name: 'Analytics',
                    feature_description: 'Access to an analytics page',
                  },
                  {
                    feature_id: 'feature_f772fd1b5b6043a68c6267ef6bb94b85',
                    feature_name: 'Support',
                    feature_description: 'Dedicated support',
                  },
                ],
                price_adjustment: null,
                usage_billing_frequency: null,
                version: 1,
                status: 'active',
                plan_name: 'Starter Plan',
                currency: {
                  code: 'USD',
                  name: 'US Dollar',
                  symbol: '$',
                },
                version_id: 'plan_version_ea15ebb6107646ba816957269ee3a83e',
                plan_id: 'plan_8bd8a9a56d8c4b7cb5c56d76fc76f237',
                alerts: [],
                active_subscriptions: 0,
              },
            ],
            taxjar_code: null,
          },
        }),
      )
    },
  ),
  rest.get(
    'https://api.uselotus.io/api/subscriptions/',
    async (_, res, ctx) => {
      return res(
        ctx.json({
          data: [
            {
              start_date: '2023-02-05T20:34:59.113000+00:00',
              end_date: '2023-03-04T23:59:59.999999+00:00',
              auto_renew: true,
              is_new: true,
              subscription_filters: [],
              customer: {
                customer_name: 'Customer Charlie',
                email: 'no-charlie@mail.com',
                customer_id: 'MSN-0010002',
              },
              billing_plan: {
                plan_name: '50K Words Plan',
                plan_id: 'plan_613a581a2edc4fb6b8c7a37ebbfabbad',
                version: 2,
                version_id: 'plan_version_0be45af477e64acc9639c685646c41b7',
              },
              fully_billed: false,
              addons: [],
            },
          ],
        }),
      )
    },
  ),
  rest.get(
    'https://api.uselotus.io/api/customers/:customerId/',
    async (_, res, ctx) => {
      return res(
        ctx.json({
          data: {
            customer_id: 'MSN-0010002',
            email: 'no-charlie@mail.com',
            customer_name: 'Customer Charlie',
            invoices: [
              {
                start_date: '2023-02-05',
                external_payment_obj_id: null,
                issue_date: '2023-02-05T20:34:59.448948+00:00',
                invoice_number: '230205-000001',
                payment_status: 'unpaid',
                invoice_id: 'invoice_bfc439cbfb9e46d4ab3a5dc14ff378ce',
                cost_due: 4.5071636157,
                external_payment_obj_type: null,
                end_date: '2023-03-04',
                currency: {
                  code: 'USD',
                  name: 'US Dollar',
                  symbol: '$',
                },
                invoice_pdf: null,
                due_date: null,
                seller: {
                  name: 'demo3',
                  address: null,
                  phone: null,
                  email: null,
                },
              },
              {
                start_date: '2023-01-07',
                external_payment_obj_id: null,
                issue_date: '2023-01-08T08:27:57.139643+00:00',
                invoice_number: '230108-000001',
                payment_status: 'paid',
                invoice_id: 'invoice_21faaff7e25348b5a73dc9807d809203',
                cost_due: 0,
                external_payment_obj_type: null,
                end_date: '2023-01-08',
                currency: {
                  code: 'USD',
                  name: 'US Dollar',
                  symbol: '$',
                },
                invoice_pdf: null,
                due_date: '2023-01-08T08:27:57.139643+00:00',
                seller: {
                  name: 'demo3',
                  address: null,
                  phone: null,
                  email: null,
                },
              },
              {
                start_date: '2023-01-07',
                external_payment_obj_id: null,
                issue_date: '2023-01-07T20:46:57.325640+00:00',
                invoice_number: '230107-000001',
                payment_status: 'unpaid',
                invoice_id: 'invoice_4f233f4768c44e0e9ad02d0d353b5afe',
                cost_due: 279,
                external_payment_obj_type: null,
                end_date: '2023-02-06',
                currency: {
                  code: 'USD',
                  name: 'US Dollar',
                  symbol: '$',
                },
                invoice_pdf: null,
                due_date: '2023-01-07T20:46:57.325640+00:00',
                seller: {
                  name: 'demo3',
                  address: null,
                  phone: null,
                  email: null,
                },
              },
            ],
            total_amount_due: 283.5071636157,
            subscriptions: [
              {
                start_date: '2023-02-05T20:34:59.113000+00:00',
                end_date: '2023-03-04T23:59:59.999999+00:00',
                auto_renew: true,
                is_new: true,
                subscription_filters: [],
                customer: {
                  customer_name: 'Customer Charlie',
                  email: 'no-charlie@mail.com',
                  customer_id: 'MSN-0010002',
                },
                billing_plan: {
                  plan_name: '50K Words Plan',
                  plan_id: 'plan_613a581a2edc4fb6b8c7a37ebbfabbad',
                  version: 2,
                  version_id: 'plan_version_0be45af477e64acc9639c685646c41b7',
                },
                fully_billed: false,
                addons: [],
              },
            ],
            integrations: {
              stripe: null,
              braintree: null,
            },
            default_currency: {
              code: 'USD',
              name: 'US Dollar',
              symbol: '$',
            },
            payment_provider: null,
            payment_provider_id: null,
            has_payment_method: false,
            address: null,
            billing_address: null,
            shipping_address: null,
            tax_rate: null,
            timezone: 'UTC',
            tax_providers: [],
          },
        }),
      )
    },
  ),
  rest.get('https://api.uselotus.io/api/invoices/', (_, res, ctx) => {
    return res(
      ctx.json({
        data: [
          {
            start_date: '2023-02-05',
            external_payment_obj_id: null,
            issue_date: '2023-02-05T20:34:59.448948+00:00',
            invoice_number: '230205-000001',
            payment_status: 'unpaid',
            invoice_id: 'invoice_bfc439cbfb9e46d4ab3a5dc14ff378ce',
            cost_due: 4.5071636157,
            external_payment_obj_type: null,
            end_date: '2023-03-04',
            currency: {
              code: 'USD',
              name: 'US Dollar',
              symbol: '$',
            },
            invoice_pdf: null,
            due_date: null,
            seller: {
              name: 'demo3',
              address: null,
              phone: null,
              email: null,
            },
          },
        ],
      }),
    )
  }),
]
export { handlers }