import styles from './colors.module.scss';

import { ComponentProps, ElementType, ReactNode } from 'react';

type TextOwnProps<E extends ElementType> = {
  color?: 'primary' | 'contrast' | 'primary';
  children: ReactNode;
  as?: E;
};

type TextProps<E extends ElementType> = TextOwnProps<E> &
  Omit<ComponentProps<E>, keyof TextOwnProps<E>>;

const Text = <E extends ElementType = 'div'>({
  color,
  children,
  as,
}: TextProps<E>) => {
  const Component = as || 'div';

  const textStyle = {
    color: `var(--${color})`,
  };
  return <Component style={textStyle}>{children}</Component>;
};

Text.defaultProps = {
  color: 'frontend',
};

export interface TypographyProps {
  text: string;
}

const Headers = ({ text }: TypographyProps) => {
  // const HeaderTemplate: ComponentStory<typeof StoryElement> = ({ text }) => {
  return (
    <>
      <Text as="h1" color="primary">
        HEADING
      </Text>
      <hr />
      <h1> H1: {text}</h1>
      <hr />
      <h2> H2: {text}</h2>
      <hr />
      <h3> H3: {text}</h3>
      <hr />
      <h4> H4: {text}</h4>
      <hr />
      <h4> H5: {text}</h4>
      <hr />
      <h4> H6: {text}</h4>
      <hr />
    </>
  );
};

const Body = ({ text }: TypographyProps) => {
  return (
    <>
      <Text as="h1" color="primary">
        BODY
      </Text>
      <hr />
      <p> Normal: {text}</p>
      <hr />
      <small> Small: {text} </small>
      <hr />
    </>
  );
};

const Inline = ({ text }: TypographyProps) => {
  return (
    <>
      <Text as="h1" color="primary">
        Inline
      </Text>
      <hr />
      <div>
        <div>
          <p>
            <abbr title="Abbreviation">Abbr.</abbr> <code>abbr</code>
          </p>
          <p>
            <strong>Bold</strong> <code>strong</code> <code>b</code>
          </p>
          <p>
            <em>Italic</em> <code>i</code> <code>em</code> <code>cite</code>
          </p>
          <p>
            <del>Deleted</del> <code>del</code>
          </p>
          <p>
            <ins>Inserted</ins> <code>ins</code>
          </p>
          <p>
            <kbd>Ctrl + S</kbd> <code>kbd</code>
          </p>
        </div>
        <div>
          <p>
            <mark>Highlighted</mark> <code>mark</code>
          </p>
          <p>
            <s>Strikethrough</s> <code>s</code>
          </p>
          <p>
            <small>Small </small>
            <code>small</code>
          </p>
          <p>
            Text <sub>Sub</sub> <code>sub</code>
          </p>
          <p>
            Text <sup>Sup</sup> <code>sup</code>
          </p>
          <p>
            <u>Underline</u> <code>u</code>
          </p>
        </div>
      </div>
      <hr />
    </>
  );
};

const Forms = ({ text }: TypographyProps) => {
  return (
    <>
      <Text as="h1" color="primary">
        LABEL TEXT
      </Text>
      <hr />
      <label> Normal: {text}</label>
      <label className="strong">Strong: {text}</label>
      <hr />

      <Text as="h1" color="primary">
        INPUT TEXT
      </Text>
      <hr />
      <label>
        {' '}
        Enabled: {text}
        <input value="Active" />
      </label>
      <label>
        Disabled: {text}
        <input value="Disabled" disabled />
      </label>
      <hr />

      <Text as="h1" color="primary">
        BUTTON TEXT
      </Text>
      <hr />
      <button> Active</button>
      <button disabled>Disabled</button>
      <hr />
    </>
  );
};

export function Typography({ text }: TypographyProps) {
  return (
    <div className={styles['container']}>
      <Headers text={text}></Headers>
      <Body text={text}></Body>
      <Inline text={text}></Inline>
      <Forms text={text}></Forms>
    </div>
  );
}

export default Typography;
