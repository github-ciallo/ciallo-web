import { AutoComplete, theme, type AutoCompleteProps } from 'antd';
import React, { useCallback, useState } from 'react';

const EMAIL_OPTIONS = [
  // cSpell: disable
  '@qq.com',
  '@163.com',
  '@gmail.com',
  '@msn.com',
  '@hotmail.com',
  '@126.com',
  // cSpell: enable
];

export default (props: Omit<AutoCompleteProps, 'onSearch' | 'onSelect' | 'options'>) => {
  const [options, setOptions] = useState<{ value: string; label: React.ReactNode }[]>([]);

  const {
    token: { colorPrimary },
  } = theme.useToken();

  const handleSearch = useCallback(
    (value: string) => {
      let atIndex: number;

      if (!value) return setOptions([]);

      if ((atIndex = value.indexOf('@')) !== -1) {
        const preAtStr = value.slice(0, atIndex);
        const afterAtStr = value.slice(atIndex);
        const validOptions = EMAIL_OPTIONS.filter(
          (option) => option.startsWith(afterAtStr) && option.length !== afterAtStr.length,
        );

        return setOptions([
          {
            value,
            label: <span style={{ color: colorPrimary }}>{value}</span>,
          },
          ...validOptions.map((option) => {
            const valueStr = `${preAtStr}${option}`;

            return {
              value: valueStr,
              label: (
                <>
                  <span style={{ color: colorPrimary }}>{value}</span>
                  <span>{valueStr.slice(value.length)}</span>
                </>
              ),
            };
          }),
        ]);
      }

      setOptions([
        {
          value,
          label: <span style={{ color: colorPrimary }}>{value}</span>,
        },
        ...EMAIL_OPTIONS.map((option) => ({
          value: `${value}${option}`,
          label: (
            <>
              <span style={{ color: colorPrimary }}>{value}</span>
              <span>{option}</span>
            </>
          ),
        })),
      ]);
    },
    [colorPrimary],
  );

  return (
    <AutoComplete onSearch={handleSearch} onSelect={handleSearch} options={options} {...props} />
  );
};
