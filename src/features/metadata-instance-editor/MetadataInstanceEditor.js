// @flow
import * as React from 'react';

import ScrollWrapper from 'components/scroll-wrapper';

import Header from './Header';
import Instances from './Instances';
import EmptyContent from './EmptyContent';
import './MetadataInstanceEditor.scss';

type Props = {
    canAdd: boolean,
    editors?: Array<MetadataEditor>,
    isCascadingPolicyApplicable?: boolean,
    isDropdownBusy?: boolean,
    onModification?: (id: string, isDirty: boolean) => void,
    onAdd?: (template: MetadataTemplate) => void,
    onRemove?: (id: string) => void,
    onSave?: (
        id: string,
        data: JSONPatchOperations,
        cascadingPolicy?: MetadataCascadingPolicyData,
        rawData: Object,
    ) => void,
    templates: Array<MetadataTemplate>,
    title?: React.Node,
};

const MetadataInstanceEditor = ({
    canAdd,
    isCascadingPolicyApplicable = false,
    isDropdownBusy,
    editors = [],
    onModification,
    onRemove,
    onAdd,
    onSave,
    templates,
    title,
}: Props) => (
    <div className="metadata-instance-editor">
        <Header
            canAdd={canAdd}
            editors={editors}
            isDropdownBusy={isDropdownBusy}
            onAdd={onAdd}
            templates={templates}
            title={title}
        />
        {editors.length === 0 ? (
            <EmptyContent canAdd={canAdd} />
        ) : (
            <ScrollWrapper>
                <Instances
                    isCascadingPolicyApplicable={isCascadingPolicyApplicable}
                    editors={editors}
                    onModification={onModification}
                    onSave={onSave}
                    onRemove={onRemove}
                />
            </ScrollWrapper>
        )}
    </div>
);

export default MetadataInstanceEditor;
