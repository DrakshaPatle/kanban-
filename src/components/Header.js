import React from 'react'
import './header.css'
import Todo from './Todo'
const Header = () => {
  return (



    <div>
      <div class="TopbarPageHeaderStructureWithBreadcrumbs-titleAndBreadcrumbs">
        <div class="TopbarPageHeaderStructureWithBreadcrumbs-titleRow ">
          <h1 class="TopbarPageHeaderStructureWithBreadcrumbs-title Typography Typography--colorDefault Typography--overflowTruncate Typography--h4 Typography--fontWeightMedium tether-target-attached-top tether-abutted tether-abutted-top tether-element-attached-top tether-element-attached-center tether-target-attached-center" id="lui_132">
            &nbsp; APPS DEPLOYER
          </h1>
          <div class="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton PageHeaderDropdownMenuButton " role="button" tabindex="0" aria-haspopup="menu" aria-label="Show options" aria-expanded="false">
            <svg class="Icon DownIcon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
              <path d="M16,22.5c-0.3,0-0.7-0.1-0.9-0.3l-11-9c-0.6-0.5-0.7-1.5-0.2-2.1s1.5-0.7,2.1-0.2l10,8.2l10-8.2c0.6-0.5,1.6-0.4,2.1,0.2c0.5,0.6,0.4,1.6-0.2,2.1l-11,9C16.7,22.4,16.3,22.5,16,22.5z">
              </path>
            </svg>
          </div>
          <div class="TopbarPageHeaderStructureWithBreadcrumbs-icons">
            <div class="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleFavoriteStarButton--favorited SubtleFavoriteStarButton SubtleFavoriteStarButton--colorAqua " role="button" tabindex="0" aria-label="Remove from favorites">
              <svg class="Icon StarFullIcon " viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                <path d="M8.2,30.1c-0.4,0-0.7-0.1-1-0.3c-0.5-0.4-0.8-1-0.7-1.7l1.3-7.8l-5.7-5.5c-0.5-0.5-0.6-1.2-0.4-1.8c0.2-0.6,0.7-1.1,1.4-1.2l7.8-1.1l3.5-7.1c0.3-0.6,0.9-1,1.6-1c0,0,0,0,0,0c0.7,0,1.3,0.4,1.6,1v0l3.5,7.1l7.8,1.1c0.7,0.1,1.2,0.6,1.4,1.2c0.2,0.6,0,1.3-0.4,1.8l-5.7,5.5l1.3,7.8c0.1,0.7-0.2,1.3-0.7,1.7c-0.5,0.4-1.2,0.4-1.8,0.1l-7-3.7l-7,3.7C8.8,30,8.5,30.1,8.2,30.1z">
                </path>
              </svg>
            </div>
          </div>
          <div class="TopbarPageHeaderStructureWithBreadcrumbs-titleRightElement ">
            <div id="lui_137" class="Thirdnav--isEnabled Thirdnav Thirdnav--medium SubtleButton--standardTheme SubtleButton StatusUpdateColorSelectDropdownButtonV2 StatusUpdateHeaderWidget StatusUpdateHeaderWidget-subtleButton " role="button" tabindex="0" aria-expanded="false">
              <div class="Thirdnav-leftIcon StatusUpdateHeaderWidget-addStatusPromptDot ">
              </div>
              Set status
              <svg class="MiniIcon Thirdnav-rightIcon StatusUpdateHeaderWidget-arrowDownIcon ArrowDownMiniIcon " viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2C18.5,7.3,19.5,7.3,20,8c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1c-0.6,0.5-1.4,0.5-2,0L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z">
                </path>
              </svg>
            </div>
          </div>









          <div className="TopbarPageHeaderStructureWithBreadcrumbs-rightChildrenWrapper ">
            <div className="ProjectHeaderFacepile">

              
              {/* <div
                className="FacepileButton FacepileButton--sizeSmall ProjectHeaderFacepile-facepile"
                role="button"
                tabIndex={0}
                aria-label="Manage project members"
              >
                <ul
                  className="FacepileStructure Facepile FacepileButton-facepile"
                  aria-hidden="true"
                >
                  <li className="FacepileStructure-item">
                    <div
                      aria-hidden="true"
                      className="Facepile-avatar Facepile-item Avatar AvatarPhoto AvatarPhoto--default AvatarPhoto--small AvatarPhoto--color7"
                    >
                      Dr
                    </div>
                  </li>
                </ul>
              </div> */}


              <div
                className="Thirdnav--isEnabled Thirdnav Thirdnav--medium PrimaryButton--standardTheme PrimaryButton ProjectHeaderFacepile-joinOrShareButton PrimaryButton--standardTheme PrimaryButton ProjectHeaderFacepile-joinOrShareButton"
                role="button"
                tabIndex={0}
              >
                <svg
                  className="MiniIcon Thirdnav-leftIcon UsersFillMiniIcon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M16,13.5c-3.59,0-6.5-2.91-6.5-6.5S12.41,.5,16,.5s6.5,2.91,6.5,6.5-2.91,6.5-6.5,6.5Zm-10,7.5c0-1.287,.348-2.492,.955-3.527,.383-.653-.122-1.473-.878-1.473h-1.076C2.239,16,0,18.239,0,21v2C0,23.552,.448,24,1,24H5c.552,0,1-.448,1-1v-2Zm18,2v-2c0-2.761-2.239-5-5-5h-6c-2.761,0-5,2.239-5,5v2c0,.552,.448,1,1,1h14c.552,0,1-.448,1-1ZM7.5,7c0-1.834,.584-3.53,1.573-4.917,.461-.646,.016-1.539-.777-1.576-.662-.031-1.351,.041-2.057,.239C3.67,1.466,1.753,3.767,1.525,6.424c-.331,3.849,2.695,7.076,6.475,7.076,.102,0,.204-.002,.305-.007,.789-.038,1.227-.933,.768-1.575-.989-1.387-1.573-3.083-1.573-4.917Z"></path>
                </svg>
                Share
              </div>
            </div>
            <div className="ProjectPageHeader-customizeMenuButtonContainer">
              <div className="CustomizeMenuButton-notificationIndicatorButtonContainer">
                <div
                  className="Thirdnav--isEnabled Thirdnav Thirdnav--medium SecondaryButton--standardTheme SecondaryButton CustomizeMenuButton SecondaryButton--standardTheme SecondaryButton CustomizeMenuButton"
                  role="button"
                  tabIndex={0}
                  aria-expanded="false"
                >
                  <img
                    className="MiniIllustration MiniIllustration--smallMiniIcon Thirdnav-leftIcon"
                    alt=""
                    src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/ce625ef5536516f31458c34d0c9d41457cae8470/customize_12.svg"
                  />
                  Customize
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>










      <nav className="NavBar " aria-labelledby="lui_31">
        <ul className="NavBar-list NavBar-list--defaultTabWidth">
          <li className="NavBarItem NavBar-tab">
            <a aria-current="false" className="NavBarItem-link BaseLink" href="https://app.asana.com/0/1203991349558352/overview">
              <span className="NavBarItem-selectableTabContainer">
                <span className="NavBarItem-selectableTab--isClickable NavBarItem-selectableTab NavBarItem-selectableTab--colorAqua Typography">
                  &nbsp;  &nbsp;  &nbsp;Overview
                </span>
              </span>
            </a>
          </li>
          <div className="NavBar-tab">
            <li className="NavBarItem">
              <a aria-current="false" className="NavBarItem-link BaseLink" href="https://app.asana.com/0/1203991349558352/list">
                <span className="NavBarItem-selectableTabContainer">
                  <span className="NavBarItem-selectableTab--isClickable NavBarItem-selectableTab NavBarItem-selectableTab--colorAqua Typography">
                    List
                  </span>
                </span>
              </a>
            </li>
          </div>
          <li className="NavBarItem NavBar-tab">
            <a aria-current="false" className="NavBarItem-link BaseLink" href="https://app.asana.com/0/1203991349558352/board">
              <span className="NavBarItem-selectableTabContainer">
                <span className="NavBarItem-selectableTab--isClickable NavBarItem-selectableTab NavBarItem-selectableTab--colorAqua Typography">
                  Board
                </span>
              </span>
            </a>
          </li>
          <li className="NavBarItem NavBar-tab">
            <a aria-current="true" className="NavBarItem-link BaseLink" href="https://app.asana.com/0/1203991349558352/timeline">
              <span className="NavBarItem-selectableTabContainer">
                <span className="NavBarItem-selectableTab--isSelected NavBarItem-selectableTab NavBarItem-selectableTab--colorAqua Typography">
                  Timeline
                </span>
              </span>
            </a>
          </li>
          <li className="NavBarItem NavBar-tab">
            <a aria-current="false" className="NavBarItem-link BaseLink" href="https://app.asana.com/0/1203991349558352/calendar">
              <span className="NavBarItem-selectableTabContainer">
                <span className="NavBarItem-selectableTab--isClickable NavBarItem-selectableTab NavBarItem-selectableTab--colorAqua Typography">
                  Calendar
                </span>
              </span>
            </a>
          </li>
          <li className="NavBarItem NavBar-tab">
            <a aria-current="false" className="NavBarItem-link BaseLink" href="https://app.asana.com/0/1203991349558352/workflow">
              <span className="NavBarItem-selectableTabContainer">
                <span className="NavBarItem-selectableTab--isClickable NavBarItem-selectableTab NavBarItem-selectableTab--colorAqua Typography">
                  Workflow
                </span>
              </span>
            </a>
          </li>
          <li className="NavBarItem NavBar-tab">
            <a aria-current="false" className="NavBarItem-link BaseLink" href="https://app.asana.com/0/1203991349558352/dashboard">
              <span className="NavBarItem-selectableTabContainer">
                <span className="NavBarItem-selectableTab--isClickable NavBarItem-selectableTab NavBarItem-selectableTab--colorAqua Typography">
                  Dashboard
                </span>
              </span>
            </a>
          </li>
          <li className="NavBarItem NavBar-tab">
            <a aria-current="false" className="NavBarItem-link BaseLink" href="https://app.asana.com/0/1203991349558352/messages">
              <span className="NavBarItem-selectableTabContainer">
                <span className="NavBarItem-selectableTab--isClickable NavBarItem-selectableTab NavBarItem-selectableTab--colorAqua Typography">
                  Messages
                </span>
              </span>
            </a>
          </li>
          <li className="NavBarItem NavBar-tab">
            <a aria-current="false" className="NavBarItem-link BaseLink" href="https://app.asana.com/0/1203991349558352/files">
              <span className="NavBarItem-selectableTabContainer">
                <span className="NavBarItem-selectableTab--isClickable NavBarItem-selectableTab NavBarItem-selectableTab--colorAqua Typography">
                  Files
                </span>
              </span>
            </a>
          </li>
        </ul>
      </nav>


      <div className="TaskTimelineSidebarHeader-addTask">
        <div className="SecondarySplitDropdownMenuButton AddTaskDropdownButton">
          <div className="Thirdnav--isEnabled Thirdnav Thirdnav--medium SecondarySplitDropdownMenuButton-leftButton SecondarySplitDropdownMenuButton-leftButton" role="button" tabIndex={0}>
            <svg className="MiniIcon Thirdnav-leftIcon PlusMiniIcon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M10,10V4c0-1.1,0.9-2,2-2s2,0.9,2,2v6h6c1.1,0,2,0.9,2,2s-0.9,2-2,2h-6v6c0,1.1-0.9,2-2,2s-2-0.9-2-2v-6H4c-1.1,0-2-0.9-2-2s0.9-2,2-2H10z">
              </path>
            </svg>
            Add task
          </div>
          <div id="lui_552" className="Thirdnav--isEnabled Thirdnav--withNoLabel Thirdnav Thirdnav--medium SecondarySplitDropdownMenuButton-rightButton" role="button" tabIndex={0} aria-label="More actions" aria-expanded="false">
            <svg className="MiniIcon Thirdnav-leftIcon ArrowDownMiniIcon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2C18.5,7.3,19.5,7.3,20,8c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1c-0.6,0.5-1.4,0.5-2,0L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z">
              </path>
            </svg>
          </div>
        </div>





        <div class="TimelineHeader-viewStateButtons ">
          
          
          <div class="Thirdnav--isEnabled Thirdnav Thirdnav--medium SubtleButton--standardTheme SubtleButton TimelineHeader-todayOrNowButton SubtleButton--standardTheme SubtleButton TimelineHeader-todayOrNowButton" role="button" tabindex="0">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Today
          </div>

          
          <div id="lui_590" class="Thirdnav--isEnabled Thirdnav Thirdnav--medium SubtleButton--standardTheme SubtleButton CompletionMenuStructure TimelineCompletionMenu TaskTimeline-timelineCompletionSettingMenu--inHeader SubtleButton--standardTheme SubtleButton CompletionMenuStructure TimelineCompletionMenu TaskTimeline-timelineCompletionSettingMenu--inHeader" role="button" tabindex="0" aria-expanded="false">

            <svg class="MiniIcon Thirdnav-leftIcon CheckCircleMiniIcon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M12,3c5,0,9,4,9,9s-4,9-9,9s-9-4-9-9S7,3,12,3 M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11s11-4.9,11-11S18.1,1,12,1L12,1zM11.2,16.2l6-6c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-5.3,5.3l-2.3-2.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l3,3c0.2,0.2,0.5,0.3,0.7,0.3S11,16.4,11.2,16.2z">
              </path>
            </svg>
            All tasks
          </div>


          <div id="lui_593" class="Thirdnav--isEnabled Thirdnav Thirdnav--medium SubtleButton--standardTheme SubtleButton TimelineZoomMenu SubtleButton--standardTheme SubtleButton TimelineZoomMenu" role="button" tabindex="0" aria-expanded="false">
            <svg class="MiniIcon Thirdnav-leftIcon MagnifyerZoomMiniIcon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M16,11c0,0.6-0.4,1-1,1h-3v3c0,0.6-0.4,1-1,1s-1-0.4-1-1v-3H7c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1h3V7c0-0.6,0.4-1,1-1s1,0.4,1,1v3h3C15.6,10,16,10.4,16,11z M21.7,21.7C21.5,21.9,21.2,22,21,22s-0.5-0.1-0.7-0.3L16.6,18c-1.5,1.2-3.5,2-5.6,2c-5,0-9-4-9-9c0-5,4-9,9-9c5,0,9,4,9,9c0,2.1-0.7,4.1-2,5.6l3.7,3.7C22.1,20.7,22.1,21.3,21.7,21.7z M18,11c0-3.9-3.1-7-7-7c-3.9,0-7,3.1-7,7c0,3.9,3.1,7,7,7C14.9,18,18,14.9,18,11z">
              </path>
            </svg>
            Weeks
          </div>


          <div id="lui_596" class="Thirdnav--isEnabled Thirdnav Thirdnav--medium SubtleButton--standardTheme SubtleButton SortMenuStructure TimelineSortMenu TaskTimeline-sortSettingsMenu--inHeader SubtleButton--standardTheme SubtleButton SortMenuStructure TimelineSortMenu TaskTimeline-sortSettingsMenu--inHeader" role="button" tabindex="0" aria-expanded="false">
            <svg class="MiniIcon Thirdnav-leftIcon SortMiniIcon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M11.7,9.7c-0.2,0.2-0.4,0.3-0.6,0.3H8v9c0,0.6-0.4,1-1,1s-1-0.4-1-1v-9H2.9C2.4,10,2,9.6,2,9.1c0-0.2,0.1-0.5,0.3-0.6l4.1-4.1C6.7,4,7.3,4,7.6,4.3l0,0l4.1,4.1C12.1,8.8,12.1,9.4,11.7,9.7z M21.7,14.3c-0.2-0.2-0.4-0.3-0.6-0.3H18V5c0-0.6-0.4-1-1-1s-1,0.4-1,1v9h-3.1c-0.5,0-0.9,0.4-0.9,0.9c0,0.2,0.1,0.5,0.3,0.6l4.1,4.1c0.4,0.4,0.9,0.4,1.3,0l0,0l4.1-4.1C22.1,15.2,22.1,14.6,21.7,14.3z">
              </path>
            </svg>
            Sort
          </div>
          <div id="lui_599" class="Thirdnav--isEnabled Thirdnav Thirdnav--medium SubtleButton--standardTheme SubtleButton ViewSettingsMenuColorDropdown ViewSettingsMenuColorDropdown-button SubtleButton--standardTheme SubtleButton ViewSettingsMenuColorDropdown ViewSettingsMenuColorDropdown-button" role="button" tabindex="0" aria-expanded="false">
            <svg class="MiniIcon Thirdnav-leftIcon PaintbrushMiniIcon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M21,0H3C2.4,0,2,0.4,2,1v10c0,1.7,1.3,3,3,3h3v6c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4v-6h3c1.7,0,3-1.3,3-3V1  C22,0.4,21.6,0,21,0z M4,2h2v2c0,0.6,0.4,1,1,1s1-0.4,1-1V2h2v2c0,0.6,0.4,1,1,1s1-0.4,1-1V2h2v2c0,0.6,0.4,1,1,1s1-0.4,1-1V2h4v4.9  H4V2z M20,11c0,0.6-0.4,1-1,1h-4c-0.6,0-1,0.4-1,1v7c0,1.1-0.9,2-2,2c-1.1,0-2-0.9-2-2v-7c0-0.6-0.4-1-1-1H5c-0.6,0-1-0.4-1-1V8.9  h16V11z">
              </path>
            </svg>
            <span class="ViewSettingsMenuColorDropdown-buttonLabel Typography Typography--overflowTruncate Typography--s">
              Color: Default
            </span>
          </div>
          <div class="Thirdnav--isEnabled Thirdnav Thirdnav--medium SubtleButton--standardTheme SubtleButton TaskTimeline-unscheduledTasksButton SubtleButton--standardTheme SubtleButton TaskTimeline-unscheduledTasksButton" role="button" tabindex="0" aria-expanded="false">
            Unscheduled
          </div>
          <div id="lui_602" class="Thirdnav--isEnabled Thirdnav Thirdnav--medium SubtleButton--standardTheme SubtleButton SubtleButton--standardTheme SubtleButton" role="button" tabindex="0" aria-disabled="false" aria-expanded="false">
            <svg class="MiniIcon Thirdnav-leftIcon InactiveDotMiniIcon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M12,6 C15.3137,6 18,8.68629 18,12 C18,15.3137 15.3137,18 12,18 C8.68629,18 6,15.3137 6,12 C6,8.68629 8.68629,6 12,6 Z M12,8 C9.79086,8 8,9.79086 8,12 C8,14.2091 9.79086,16 12,16 C14.2091,16 16,14.2091 16,12 C16,9.79086 14.2091,8 12,8 Z">
              </path>
            </svg>
            Public link: Off
          </div>
          <noscript>
          </noscript>
          <div id="lui_605" class="Thirdnav--isEnabled Thirdnav--withNoLabel Thirdnav Thirdnav--medium SubtleButton--standardTheme SubtleButton MoreMenu ProjectPageToolbarMoreMenu SubtleButton--standardTheme SubtleButton MoreMenu ProjectPageToolbarMoreMenu" role="button" tabindex="0" aria-label="More actions" aria-expanded="false">
            <svg class="Icon Thirdnav-leftIcon MoreIcon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
              <path d="M16,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S14.3,13,16,13z M3,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S1.3,13,3,13z M29,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S27.3,13,29,13z">
              </path>
            </svg>
          </div>
        </div>

      </div>




      <div className="TaskTimelineGroupSidebar " style={{ "padding-top": "12px", "height": "369px" }}>
        <div className="SortableList">
          <div className="SortableList-itemContainer SortableList-itemContainer--column">
            <div className="SortableList-sortableItemContainer">
              <div className="SortableItem SortableList-sortableItem">
                <div className="TaskTimelineGroupSidebarGroup TaskTimelineGroupSidebarGroup--isOneRow TaskTimelineGroupSidebar-group" style={{ "height": "40px" }}>
                  <div className="TimelineGroupWithNamesSidebar-content TaskTimelineGroupSidebarGroup-content">
                    <div className="TimelineGroupHeader TimelineGroupHeader--draggable TimelineGroupHeader--showDragIcon" draggable="true">
                      <svg className="MiniIcon TimelineGroupHeader-dragMiniIcon DragMiniIcon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M10,4c0,1.1-0.9,2-2,2S6,5.1,6,4s0.9-2,2-2S10,2.9,10,4z M16,2c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S17.1,2,16,2z M8,10 c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S9.1,10,8,10z M16,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S17.1,10,16,10z M8,18 c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S9.1,18,8,18z M16,18c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S17.1,18,16,18z">
                        </path>
                      </svg>
                      <div className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton TimelineGroupHeader-toggleButton SubtleIconButton--standardTheme SubtleIconButton TimelineGroupHeader-toggleButton" role="button" tabIndex={0} aria-label="Expand task list for the section To do">
                        <svg className="Icon RightTriangleIcon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                          <path d="M13.707,6.707L23,16l-9.293,9.293C13.077,25.923,12,25.477,12,24.586V7.414C12,6.523,13.077,6.077,13.707,6.707z">
                          </path>
                        </svg>
                      </div>
                      <div className="TimelineGroupHeader-headerContainer">
                        <button className="TimelineGroupHeader-nameButton">
                          To do
                        </button>
                        <div id="lui_868" className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton TimelineGroupHeader-dropdownButton SubtleIconButton--standardTheme SubtleIconButton TimelineGroupHeader-dropdownButton" role="button" tabIndex={0} aria-label="Show options" aria-expanded="false">
                          <svg className="Icon MoreIcon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                            <path d="M16,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S14.3,13,16,13z M3,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S1.3,13,3,13z M29,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S27.3,13,29,13z">
                            </path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="SortableList-sortableItemContainer">
              <div className="SortableItem SortableList-sortableItem">
                <div className="TaskTimelineGroupSidebarGroup TaskTimelineGroupSidebarGroup--isOneRow TaskTimelineGroupSidebar-group" style={{ "height": "40px" }}>
                  <div className="TimelineGroupWithNamesSidebar-content TaskTimelineGroupSidebarGroup-content">
                    <div className="TimelineGroupHeader TimelineGroupHeader--draggable" draggable="true">
                      <svg className="MiniIcon TimelineGroupHeader-dragMiniIcon DragMiniIcon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M10,4c0,1.1-0.9,2-2,2S6,5.1,6,4s0.9-2,2-2S10,2.9,10,4z M16,2c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S17.1,2,16,2z M8,10 c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S9.1,10,8,10z M16,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S17.1,10,16,10z M8,18 c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S9.1,18,8,18z M16,18c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S17.1,18,16,18z">
                        </path>
                      </svg>
                      <div className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton TimelineGroupHeader-toggleButton SubtleIconButton--standardTheme SubtleIconButton TimelineGroupHeader-toggleButton" role="button" tabIndex={0} aria-label="Collapse task list for the section Doing">
                        <svg className="Icon DownTriangleIcon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                          <path d="M7.207,13.707L16.5,23l9.293-9.293c0.63-0.63,0.184-1.707-0.707-1.707H7.914C7.023,12,6.577,13.077,7.207,13.707z">
                          </path>
                        </svg>
                      </div>
                      <div className="TimelineGroupHeader-headerContainer">
                        <button className="TimelineGroupHeader-nameButton">
                          Doing
                        </button>
                        <div id="lui_938" className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton TimelineGroupHeader-dropdownButton SubtleIconButton--standardTheme SubtleIconButton TimelineGroupHeader-dropdownButton" role="button" tabIndex={0} aria-label="Show options" aria-expanded="false">
                          <svg className="Icon MoreIcon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                            <path d="M16,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S14.3,13,16,13z M3,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S1.3,13,3,13z M29,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S27.3,13,29,13z">
                            </path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>













            <div className="SortableList-sortableItemContainer">
              <div className="SortableItem SortableList-sortableItem">
                <div className="TaskTimelineGroupSidebarGroup TaskTimelineGroupSidebarGroup--isOneRow TaskTimelineGroupSidebar-group" style={{ "height": "40px" }}>
                  <div className="TimelineGroupWithNamesSidebar-content TaskTimelineGroupSidebarGroup-content">
                    <div className="TimelineGroupHeader TimelineGroupHeader--draggable" draggable="true">
                      <svg className="MiniIcon TimelineGroupHeader-dragMiniIcon DragMiniIcon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M10,4c0,1.1-0.9,2-2,2S6,5.1,6,4s0.9-2,2-2S10,2.9,10,4z M16,2c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S17.1,2,16,2z M8,10 c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S9.1,10,8,10z M16,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S17.1,10,16,10z M8,18 c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S9.1,18,8,18z M16,18c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S17.1,18,16,18z">
                        </path>
                      </svg>
                      <div className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton TimelineGroupHeader-toggleButton SubtleIconButton--standardTheme SubtleIconButton TimelineGroupHeader-toggleButton" role="button" tabIndex={0} aria-label="Collapse task list for the section Doing">
                        <svg className="Icon DownTriangleIcon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                          <path d="M7.207,13.707L16.5,23l9.293-9.293c0.63-0.63,0.184-1.707-0.707-1.707H7.914C7.023,12,6.577,13.077,7.207,13.707z">
                          </path>
                        </svg>
                      </div>
                      <div className="TimelineGroupHeader-headerContainer">
                        <button className="TimelineGroupHeader-nameButton">
                          Doing
                        </button>
                        <div id="lui_878" className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton TimelineGroupHeader-dropdownButton SubtleIconButton--standardTheme SubtleIconButton TimelineGroupHeader-dropdownButton" role="button" tabIndex={0} aria-label="Show options" aria-expanded="false">
                          <svg className="Icon MoreIcon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                            <path d="M16,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S14.3,13,16,13z M3,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S1.3,13,3,13z M29,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S27.3,13,29,13z">
                            </path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="SortableList-sortableItemContainer">
              <div className="SortableItem SortableList-sortableItem">
                <div className="TaskTimelineGroupSidebarGroup TaskTimelineGroupSidebarGroup--isOneRow TaskTimelineGroupSidebar-group" style={{ "height": "40px" }}>
                  <div className="TimelineGroupWithNamesSidebar-content TaskTimelineGroupSidebarGroup-content">
                    <div className="TimelineGroupHeader TimelineGroupHeader--draggable" draggable="true">
                      <svg className="MiniIcon TimelineGroupHeader-dragMiniIcon DragMiniIcon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M10,4c0,1.1-0.9,2-2,2S6,5.1,6,4s0.9-2,2-2S10,2.9,10,4z M16,2c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S17.1,2,16,2z M8,10 c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S9.1,10,8,10z M16,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S17.1,10,16,10z M8,18 c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S9.1,18,8,18z M16,18c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S17.1,18,16,18z">
                        </path>
                      </svg>
                      <div className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton TimelineGroupHeader-toggleButton SubtleIconButton--standardTheme SubtleIconButton TimelineGroupHeader-toggleButton" role="button" tabIndex={0} aria-label="Expand task list for the section Done">
                        <svg className="Icon RightTriangleIcon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                          <path d="M13.707,6.707L23,16l-9.293,9.293C13.077,25.923,12,25.477,12,24.586V7.414C12,6.523,13.077,6.077,13.707,6.707z">
                          </path>
                        </svg>
                      </div>
                      <div className="TimelineGroupHeader-headerContainer">
                        <button className="TimelineGroupHeader-nameButton">
                          Done
                        </button>
                        <div id="lui_883" className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton TimelineGroupHeader-dropdownButton SubtleIconButton--standardTheme SubtleIconButton TimelineGroupHeader-dropdownButton" role="button" tabIndex={0} aria-label="Show options" aria-expanded="false">
                          <svg className="Icon MoreIcon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                            <path d="M16,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S14.3,13,16,13z M3,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S1.3,13,3,13z M29,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S27.3,13,29,13z">
                            </path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="SortableList-sortableItemContainer">
              <div className="SortableItem SortableList-sortableItem">
                <div className="TaskTimelineGroupSidebarGroup TaskTimelineGroupSidebarGroup--isOneRow TaskTimelineGroupSidebar-group" style={{ "height": "40px" }}>
                  <div className="TimelineGroupWithNamesSidebar-content TaskTimelineGroupSidebarGroup-content">
                    <div className="TimelineGroupHeader TimelineGroupHeader--draggable" draggable="true">
                      <svg className="MiniIcon TimelineGroupHeader-dragMiniIcon DragMiniIcon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M10,4c0,1.1-0.9,2-2,2S6,5.1,6,4s0.9-2,2-2S10,2.9,10,4z M16,2c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S17.1,2,16,2z M8,10 c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S9.1,10,8,10z M16,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S17.1,10,16,10z M8,18 c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S9.1,18,8,18z M16,18c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S17.1,18,16,18z">
                        </path>
                      </svg>
                      <div className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton TimelineGroupHeader-toggleButton SubtleIconButton--standardTheme SubtleIconButton TimelineGroupHeader-toggleButton" role="button" tabIndex={0} aria-label="Expand task list for the section Done">
                        <svg className="Icon RightTriangleIcon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                          <path d="M13.707,6.707L23,16l-9.293,9.293C13.077,25.923,12,25.477,12,24.586V7.414C12,6.523,13.077,6.077,13.707,6.707z">
                          </path>
                        </svg>
                      </div>
                      <div className="TimelineGroupHeader-headerContainer">
                        <button className="TimelineGroupHeader-nameButton">
                          Done
                        </button>
                        <div id="lui_888" className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton TimelineGroupHeader-dropdownButton SubtleIconButton--standardTheme SubtleIconButton TimelineGroupHeader-dropdownButton" role="button" tabIndex={0} aria-label="Show options" aria-expanded="false">
                          <svg className="Icon MoreIcon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                            <path d="M16,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S14.3,13,16,13z M3,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S1.3,13,3,13z M29,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S27.3,13,29,13z">
                            </path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="SortableList-sortableItemContainer">
              <div className="SortableItem SortableList-sortableItem">
                <div className="TaskTimelineGroupSidebarGroup TaskTimelineGroupSidebarGroup--isOneRow TaskTimelineGroupSidebar-group" style={{ "height": "40px" }}>
                  <div className="TimelineGroupWithNamesSidebar-content TaskTimelineGroupSidebarGroup-content">
                    <div className="TimelineGroupHeader TimelineGroupHeader--draggable" draggable="true">
                      <svg className="MiniIcon TimelineGroupHeader-dragMiniIcon DragMiniIcon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M10,4c0,1.1-0.9,2-2,2S6,5.1,6,4s0.9-2,2-2S10,2.9,10,4z M16,2c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S17.1,2,16,2z M8,10 c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S9.1,10,8,10z M16,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S17.1,10,16,10z M8,18 c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S9.1,18,8,18z M16,18c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S17.1,18,16,18z">
                        </path>
                      </svg>
                     


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ItemListAddSectionButton--large ItemListAddSectionButton TaskTimelineGroupSidebar-addSectionButton" role="button" tabIndex={0}>
          <svg className="Icon ItemListAddSectionButton-plusIcon PlusIcon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
            <path d="M26,14h-8V6c0-1.1-0.9-2-2-2l0,0c-1.1,0-2,0.9-2,2v8H6c-1.1,0-2,0.9-2,2l0,0c0,1.1,0.9,2,2,2h8v8c0,1.1,0.9,2,2,2l0,0c1.1,0,2-0.9,2-2v-8h8c1.1,0,2-0.9,2-2l0,0C28,14.9,27.1,14,26,14z">
            </path>
          </svg>
          Add section
        </div>
      </div>



    </div>
  )
}

export default Header