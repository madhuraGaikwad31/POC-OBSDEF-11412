import * as React from "react";
import {storiesOf} from "@storybook/react";

import {DataGrid} from "@dellstorage/clarity-react/datagrid";

import {
    normalColumns,
    normalRows,
    defaultFooter
} from "./DataGridStoriesData";

storiesOf("DataGrid", module)
    .add("Basic grid", () => (
        <div style={{width: "80%"}}>
            <DataGrid columns={normalColumns} rows={normalRows} footer={defaultFooter} />
        </div>
    ));