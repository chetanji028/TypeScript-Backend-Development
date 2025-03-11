// src/controllers/logController.ts
import { Request, Response } from 'express';
import { parseLogs } from '../utils/logParser';
import { LogEntry } from '../models/log';

const logs = parseLogs('logs.txt');

export const getLogs = (req: Request, res: Response): void => {
  let filteredLogs: LogEntry[] = [...logs];

  // Level filter
  if (req.query.level) {
    filteredLogs = filteredLogs.filter((log) => log.level === req.query.level);
  }

  // Search filter
  if (req.query.search) {
    filteredLogs = filteredLogs.filter((log) =>
      log.message.includes(req.query.search as string)
    );
  }

  // Date range filter
  if (req.query.from && req.query.to) {
    const from = new Date(req.query.from as string);
    const to = new Date(req.query.to as string);

    filteredLogs = filteredLogs.filter((log) => {
      const timestamp = new Date(log.timestamp);
      return timestamp >= from && timestamp <= to;
    });
  }

  // Return filtered logs
  res.json(filteredLogs);
};
