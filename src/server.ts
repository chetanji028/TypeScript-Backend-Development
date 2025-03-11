import express from 'express';
import { parseLogs, filterLogsByLevel, filterLogsBySearch, filterLogsByTimeRange, LogEntry } from './utils/logParser';

const app = express();
const port = 3000;

// Example endpoint to get all logs
app.get('/logs', (req, res) => {
  const { level, search, from, to } = req.query;
  
  // Parse the log file
  const logs: LogEntry[] = parseLogs('./logs.txt');
  
  let filteredLogs = logs;
  
  // Filter logs by level if the 'level' query parameter is provided
  if (level) {
    filteredLogs = filterLogsByLevel(filteredLogs, level as string);
  }

  // Filter logs by search string if the 'search' query parameter is provided
  if (search) {
    filteredLogs = filterLogsBySearch(filteredLogs, search as string);
  }

  // Filter logs by time range if 'from' and 'to' query parameters are provided
  if (from && to) {
    filteredLogs = filterLogsByTimeRange(filteredLogs, from as string, to as string);
  }

  // Return the filtered logs as a JSON response
  res.json(filteredLogs);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
