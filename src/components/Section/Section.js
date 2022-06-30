
import PropTypes from 'prop-types';
import { Sect, Label } from './Section.styled';

function Section({ title, children }) {
  return (
    <Sect >
      {title && <Label>{title}</Label>}
      {children}
    </Sect>
  );
}

Section.prototype = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Section;