#!/bin/bash

# 读取 res.js 文件内容
while read line; do
  # 去掉行尾的换行符
  line=${line%% }
  # 提取文件名（去掉 .md 后缀）
  filename=${line%.md}
  # 构造新的内容
  new_line="{ text: \"${filename}\", link: \"/third-party/${line}\" },"
  # 输出新的内容
  echo "$new_line"
done < tree.js
