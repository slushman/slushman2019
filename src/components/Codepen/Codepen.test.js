import { shallowFactory } from '../../../testutils';

import Codepen, {
  defaultHeight,
  defaultWidth,
} from './Codepen';

const defaultProps = {
  id: 'bMMKrb',
  title: '',
};
const factory = shallowFactory(Codepen, defaultProps);

describe('<Codepen />', () => {
  it('renders without crashing', () => {
    const wrapper = factory();
    const foundIframe = wrapper.find('Styled(iframe)');
    const iframeSrc = foundIframe.prop('src');
    const foundFigcaption = wrapper.find('figcaption');

    expect(wrapper.exists()).toBe(true);
    expect(foundFigcaption.exists()).toBe(false);
    expect(foundIframe.exists()).toBe(true);
    expect(iframeSrc.indexOf(defaultProps.id)).toBeGreaterThan(1);
    expect(foundIframe.prop('height')).toBe(defaultHeight);
    expect(iframeSrc.indexOf('default-tab=result')).toBeGreaterThan(1);
    expect(iframeSrc.indexOf(`theme-id=0`)).toBeGreaterThan(1);
    expect(iframeSrc.indexOf(`/slushman/`)).toBeGreaterThan(1);
    expect(foundIframe.prop('width')).toBe(defaultWidth);
  });
  
  describe('when given a caption', () => {
    it('should render with a figcaption', () => {
      const givenCaption = 'kjsbfjkhbfb';
      const wrapper = factory({
        caption: givenCaption,
      });
      const foundFigcaption = wrapper.find('figcaption');

      expect(foundFigcaption.exists()).toBe(true);
      expect(foundFigcaption.prop('children')).toBe(givenCaption);
    });
  });

  describe('when given a height value', () => {
    it('should render the iframe with the given height', () => {
      const givenHeight = '862px';
      const wrapper = factory({
        height: givenHeight,
        id: defaultProps.id,
      });
      const foundIframe = wrapper.find('Styled(iframe)');

      expect(foundIframe.exists()).toBe(true);
      expect(foundIframe.prop('height')).toBe(givenHeight);
    });
  });

  describe('when given a tab value', () => {
    it('should render the iframe src with the given tab', () => {
      const givenTab = 'html';
      const wrapper = factory({
        id: defaultProps.id,
        tab: givenTab,
      });
      const foundIframe = wrapper.find('Styled(iframe)');
      const iframeSrc = foundIframe.prop('src');

      expect(foundIframe.exists()).toBe(true);
      expect(iframeSrc.indexOf(`default-tab=${ givenTab }`)).toBeGreaterThan(1);
    });
  });

  describe('when given a theme value', () => {
    it('should render the iframe src with the given tab', () => {
      const givenTheme = '1';
      const wrapper = factory({
        id: defaultProps.id,
        theme: givenTheme,
      });
      const foundIframe = wrapper.find('Styled(iframe)');
      const iframeSrc = foundIframe.prop('src');

      expect(foundIframe.exists()).toBe(true);
      expect(iframeSrc.indexOf(`theme-id=${ givenTheme }`)).toBeGreaterThan(1);
    });
  });

  describe('when given a user value', () => {
    it('should render the iframe src with the given user', () => {
      const givenUser = 'yermom';
      const wrapper = factory({
        id: defaultProps.id,
        user: givenUser,
      });
      const foundIframe = wrapper.find('Styled(iframe)');
      const iframeSrc = foundIframe.prop('src');

      expect(foundIframe.exists()).toBe(true);
      expect(iframeSrc.indexOf(`/${ givenUser }/`)).toBeGreaterThan(1);
    });
  });

  describe('when given a width value', () => {
    it('should render the iframe with the given width', () => {
      const givenWidth = '235px';
      const wrapper = factory({
        width: givenWidth,
        id: 'bMMKrb',
      });
      const foundIframe = wrapper.find('Styled(iframe)');

      expect(foundIframe.exists()).toBe(true);
      expect(foundIframe.prop('width')).toBe(givenWidth);
    });
  });

  describe('when given a title', () => {
    it('should render with the given title', () => {
      const givenTitle = 'kjbdsfkjbndfkb';
      const wrapper = factory({
        id: 'bMMKrb',
        title: givenTitle,
      });
      const foundIframe = wrapper.find('Styled(iframe)');

      expect(foundIframe.exists()).toBe(true);
      expect(foundIframe.prop('title')).toBe(givenTitle);
    });
  });
});
