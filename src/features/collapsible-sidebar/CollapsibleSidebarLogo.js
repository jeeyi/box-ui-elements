// @flow
import * as React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

import { injectIntl } from 'react-intl';
import type { InjectIntlProvidedProps } from 'react-intl';
import { bdlTransitionDurationBase, bdlGridUnit } from '../../styles/variables';
import Logo from '../../icon/logo/BoxLogo';
import PlainButton from '../../components/plain-button/PlainButton';
import LinkBase from '../../components/link/LinkBase';
import IconHamburger from '../../icons/general/IconHamburger';

import CollapsibleSidebarItem from './CollapsibleSidebarItem';

import messages from './messages';

const StyledLogo = styled(Logo)`
    padding: ${bdlGridUnit};
    border: 1px solid transparent;
    border-radius: 8px;
    /* transition: ${bdlTransitionDurationBase}; */

    & path,
    & .fill-color {
        fill: ${props => props.theme?.primary?.foreground};
    }

    a:focus & {
        /* since root navlink is focusable, give logo some kind of focus state */
        border-color: ${props => props.theme?.primary?.foreground};
        outline: none;
    }
`;

const StyledIconHamburger = styled(IconHamburger)`
    position: relative;
    top: 1px; /* svg alignment */
    & .fill-color {
        fill: ${props => props.theme.primary.foreground};
    }
`;

const StyledToggleButton = styled(PlainButton)`
    /* override .btn-plain's overzealous pseudoelement styling */
    &,
    &:focus,
    &:active,
    &:hover {
        padding: 8px 12px; /* we don't have unitless variables to multiply in JS yet */
        line-height: 1;
        border-color: transparent;
        border-style: solid;
        border-width: 1px;
        border-radius: 8px; /* we don't have unitless variables to multiply in JS yet */
    }

    &:focus {
        border-color: ${props => props?.theme?.primary?.foreground};
        outline: none;
    }
`;

type Props = {
    /** optional badge to be displayed next to logo */
    badge?: React.Node,

    /** Additional classes */
    className?: string,

    /** Controls whether or not the sidebar is expanded on the page */
    expanded: boolean,

    onToggle: () => void,

    resinTarget: string,
} & InjectIntlProvidedProps;

function CollapsibleSidebarLogo(props: Props) {
    const { badge, className, expanded, onToggle, resinTarget, intl } = props;

    const classes = classNames('bdl-CollapsibleSidebar-logo', className);

    const toggleButton = (
        <StyledToggleButton
            className="bdl-CollapsibleSidebar-toggleButton"
            onClick={onToggle}
            aria-label={intl.formatMessage(expanded ? messages.collapseButtonLabel : messages.expandButtonLabel)}
            type="button"
        >
            <StyledIconHamburger height={20} width={20} />
        </StyledToggleButton>
    );

    return (
        <div className={classes}>
            <CollapsibleSidebarItem
                collapsedElement={toggleButton}
                expanded={expanded}
                expandedElement={
                    <>
                        {toggleButton}
                        <LinkBase data-resin-target={resinTarget} href="/">
                            <>
                                <StyledLogo
                                    className="bdl-CollapsibleSidebar-logoIcon"
                                    height={32 + 2 * 1 /* border */ + 2 * 4 /* padding */}
                                    width={61 + 2 * 1 /* border */ + 2 * 4 /* padding */}
                                />
                                {badge}
                            </>
                        </LinkBase>
                    </>
                }
            />
        </div>
    );
}

export default injectIntl(CollapsibleSidebarLogo);
