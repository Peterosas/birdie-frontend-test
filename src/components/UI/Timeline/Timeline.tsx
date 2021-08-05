import React from 'react';
import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const TimelineSection = styled.div`
  
`;

const Timeline = () => {
  return (
    <TimelineSection>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fafbfc', color: 'rgba(0,0,0,.9)' }}
          contentArrowStyle={{ borderRight: '7px solid  #fafbfc' }}
          date="2011 - present"
        
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fafbfc', color: 'rgba(0,0,0,.9)' }}
          contentArrowStyle={{ borderRight: '7px solid  #fafbfc' }}
          date="2011 - present"
        
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </TimelineSection>
  );
}

export default Timeline;
