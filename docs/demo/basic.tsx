import Segmented from 'rc-segmented';
import React from 'react';
import '../../assets/style.less';

export default function App() {
  const onAppearStart = (vertical: boolean) => {
    if (vertical) {
      return {
        transform: 'translateY(var(--thumb-start-top)) skew(-28deg)',
        height: 'var(--thumb-start-height)',
      };
    }

    return {
      transform: 'translateX(var(--thumb-start-left)) skew(-28deg)',
      width: 'var(--thumb-start-width)',
      background:
        'radial-gradient(67.31% 67.31% at 55.3% 50%, rgba(0, 122, 255, 0.8) 0%, rgba(0, 122, 255, 0) 100%)',
    };
  };
  const onAppearActive = (vertical: boolean) => {
    if (vertical) {
      return {
        transform: 'translateY(var(--thumb-active-top)) skew(-28deg)',
        height: 'var(--thumb-active-height)',
      };
    }

    return {
      transform: 'translateX(var(--thumb-active-left)) skew(-28deg)',
      width: 'var(--thumb-active-width)',
      background:
        'radial-gradient(67.31% 67.31% at 55.3% 50%, rgba(0, 122, 255, 0.8) 0%, rgba(0, 122, 255, 0) 100%)',
    };
  };

  return (
    <div>
      <div className="wrapper">
        <Segmented
          options={['iOS', 'Android', 'Web']}
          defaultValue="Android"
          name="segmented1"
          onChange={(value) => console.log(value, typeof value)}
          onAppearStart={onAppearStart}
          onAppearActive={onAppearActive}
        />
      </div>
      <div className="wrapper">
        <Segmented
          vertical
          options={['iOS', 'Android', 'Web']}
          name="segmented2"
          onChange={(value) => console.log(value, typeof value)}
        />
      </div>
      <div className="wrapper">
        <Segmented
          options={[13333333333, 157110000, 12110086]}
          onChange={(value) => console.log(value, typeof value)}
        />
      </div>
      <div className="wrapper">
        <Segmented options={['iOS', 'Android', 'Web']} disabled />
      </div>
      <div className="wrapper">
        <Segmented
          options={[
            'iOS',
            { label: 'Android', value: 'Android', disabled: true },
            'Web',
          ]}
        />
      </div>
    </div>
  );
}
