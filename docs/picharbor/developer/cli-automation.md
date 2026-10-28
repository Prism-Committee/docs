---
id: cli-automation
slug: /picharbor/developer/cli-automation
title: CLI 自动化与脚本参考
sidebar_label: CLI 自动化
sidebar_position: 4
---

# CLI 自动化与脚本参考

`PicHarbor.Cli` 是采用 .NET 10 编写的独立无头控制台程序，适合编写 Windows 定时任务（Task Scheduler）或 NAS 脚本。

---

## 命令行参数速查

```bash
picharbor backup-afc [options]
```

| 参数选项 | 类型 | 默认值 | 功能说明 |
| :--- | :--- | :--- | :--- |
| `-d, --destination` | string | `.` | 归档写入的目标物理根路径 |
| `-l, --layout` | string | `year-month` | 落盘目录格式（`month`, `year-month`, `year`, `flat`） |
| `--verify-hash` | boolean | `false` | 写入过程中开启逐文件 SHA-256 计算与严格校验 |
| `--dry-run` | boolean | `false` | 仅扫描并输出待备份清单，不实际向磁盘写入数据 |
| `--timeout` | int | `30` | 单个文件 AFC 数据流读取超时时间（秒） |

---

## 编写 Windows 定时归档脚本示例

你可以编写一个简单的 PowerShell 脚本，当电脑开机或特定时间段检测到 iPhone 接入时，自动静默归档：

```powershell
# auto-backup.ps1
$TargetDir = "D:\Photos"
$CliPath = "D:\Tools\PicHarbor\picharbor.exe"

Write-Host "正在检测已连接的 iOS 设备..."
& $CliPath backup-afc --destination $TargetDir --layout year-month --verify-hash

if ($LASTEXITCODE -eq 0) {
    Write-Host "照片归档成功完成！" -ForegroundColor Green
} else {
    Write-Warning "归档退出，退出码: $LASTEXITCODE"
}
```
