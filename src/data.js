const chartProps = {
    colorrange: {
        color: [
            {
                minvalue: 0,
                maxvalue: 1,
                code: "#73e7eb",
                displayValue: "No commitments"
            },
            {
                minvalue: 1,
                maxvalue: 6,
                code: "#2cc9b7",
                displayValue: "1-5 commitments"
            },
            {
                minvalue: 6,
                maxvalue: 21,
                code: "#2888d1",
                displayValue: "6-20 commitments"
            },
            {
                minvalue: 21,
                maxvalue: 100000,
                code: "#175786",
                displayValue: "More than 20 commitments"
            }
        ]
    }
};

const mapValues = [
    {
        id: "NY",
        value: 275,
        displayValue: "",
        toolText: "New York: 275 Commitments"
    },
    {
        id: "CA",
        value: 150,
        displayValue: "",
        toolText: "California: 150 Commitments"
    },
    {
        id: "MA",
        value: 56,
        displayValue: "",
        toolText: "Massachusetts: 56 Commitments"
    },
    {
        id: "CT",
        value: 37,
        displayValue: "",
        toolText: "Connecticut: 37 Commitments"
    },
    {
        id: "TX",
        value: 32,
        displayValue: "",
        toolText: "Texas: 32 Commitments"
    },
    {
        id: "IL",
        value: 21,
        displayValue: "",
        toolText: "Illinois: 21 Commitments"
    },
    {
        id: "DC",
        value: 17,
        displayValue: "",
        toolText: "District of Columbia: 17 Commitments"
    },
    {
        id: "FL",
        value: 13,
        displayValue: "",
        toolText: "Florida: 13 Commitments"
    },
    {
        id: "MD",
        value: 11,
        displayValue: "",
        toolText: "Maryland: 11 Commitments"
    },
    {
        id: "PA",
        value: 11,
        displayValue: "",
        toolText: "Pennsylvania: 11 Commitments"
    },
    {
        id: "CO",
        value: 9,
        displayValue: "",
        toolText: "Colorado: 9 Commitments"
    },
    {
        id: "RI",
        value: 9,
        displayValue: "",
        toolText: "Rhode Island: 9 Commitments"
    },
    {
        id: "GA",
        value: 5,
        displayValue: "",
        toolText: "Georgia: 5 Commitments"
    },
    {
        id: "VA",
        value: 5,
        displayValue: "",
        toolText: "Virginia: 5 Commitments"
    },
    {
        id: "NJ",
        value: 4,
        displayValue: "",
        toolText: "New Jersey: 4 Commitments"
    },
    {
        id: "AZ",
        value: 2,
        displayValue: "",
        toolText: "Arizona: 2 Commitments"
    },
    {
        id: "MN",
        value: 2,
        displayValue: "",
        toolText: "Minnesota: 2 Commitments"
    },
    {
        id: "NC",
        value: 2,
        displayValue: "",
        toolText: "North Carolina: 2 Commitments"
    },
    {
        id: "NV",
        value: 1,
        displayValue: "",
        toolText: "Nevada: 1 Commitment"
    },
    {
        id: "OH",
        value: 1,
        displayValue: "",
        toolText: "Ohio: 1 Commitment"
    },
    {
        id: "WA",
        value: 1,
        displayValue: "",
        toolText: "Washington: 1 Commitment"
    },
    {
        id: "AL",
        value: 0,
        displayValue: "",
        toolText: "Alabama: 0 Commitments"
    },
    {
        id: "AK",
        value: 0,
        displayValue: "",
        toolText: "Alaska: 0 Commitments"
    },
    {
        id: "AR",
        value: 0,
        displayValue: "",
        toolText: "Arkansas: 0 Commitments"
    },
    {
        id: "DE",
        value: 0,
        displayValue: "",
        toolText: "Delaware: 0 Commitments"
    },
    {
        id: "HI",
        value: 0,
        displayValue: "",
        toolText: "Hawaii: 0 Commitments"
    },
    {
        id: "ID",
        value: 0,
        displayValue: "",
        toolText: "Idaho: 0 Commitments"
    },
    {
        id: "IN",
        value: 0,
        displayValue: "",
        toolText: "Indiana: 0 Commitments"
    },
    { id: "IA", value: 0, displayValue: "", toolText: "Iowa: 0 Commitments" },
    {
        id: "KS",
        value: 0,
        displayValue: "",
        toolText: "Kansas: 0 Commitments"
    },
    {
        id: "KY",
        value: 0,
        displayValue: "",
        toolText: "Kentucky: 0 Commitments"
    },
    {
        id: "LA",
        value: 0,
        displayValue: "",
        toolText: "Louisiana: 0 Commitments"
    },
    {
        id: "ME",
        value: 0,
        displayValue: "",
        toolText: "Maine: 0 Commitments"
    },
    {
        id: "MI",
        value: 0,
        displayValue: "",
        toolText: "Michigan: 0 Commitments"
    },
    {
        id: "MS",
        value: 0,
        displayValue: "",
        toolText: "Mississippi: 0 Commitments"
    },
    {
        id: "MO",
        value: 0,
        displayValue: "",
        toolText: "Missouri: 0 Commitments"
    },
    {
        id: "MT",
        value: 0,
        displayValue: "",
        toolText: "Montana: 0 Commitments"
    },
    {
        id: "NE",
        value: 0,
        displayValue: "",
        toolText: "Nebraska: 0 Commitments"
    },
    {
        id: "NH",
        value: 0,
        displayValue: "",
        toolText: "New Hampshire: 0 Commitments"
    },
    {
        id: "NM",
        value: 0,
        displayValue: "",
        toolText: "New Mexico: 0 Commitments"
    },
    {
        id: "ND",
        value: 0,
        displayValue: "",
        toolText: "North Dakota: 0 Commitments"
    },
    {
        id: "OK",
        value: 0,
        displayValue: "",
        toolText: "Oklahoma: 0 Commitments"
    },
    {
        id: "OR",
        value: 0,
        displayValue: "",
        toolText: "Oregon: 0 Commitments"
    },
    {
        id: "SC",
        value: 0,
        displayValue: "",
        toolText: "South Carolina: 0 Commitments"
    },
    {
        id: "SD",
        value: 0,
        displayValue: "",
        toolText: "South Dakota: 0 Commitments"
    },
    {
        id: "TN",
        value: 0,
        displayValue: "",
        toolText: "Tennessee: 0 Commitments"
    },
    { id: "UT", value: 0, displayValue: "", toolText: "Utah: 0 Commitments" },
    {
        id: "VT",
        value: 0,
        displayValue: "",
        toolText: "Vermont: 0 Commitments"
    },
    {
        id: "WV",
        value: 0,
        displayValue: "",
        toolText: "West Virginia: 0 Commitments"
    },
    {
        id: "WI",
        value: 0,
        displayValue: "",
        toolText: "Wisconsin: 0 Commitments"
    },
    {
        id: "WY",
        value: 0,
        displayValue: "",
        toolText: "Wyoming: 0 Commitments"
    }
];

export const dataSourceProps = { data: mapValues, ...chartProps };
