import fs from 'fs-extra';

export interface LogEntry {
  timestamp: string;
  level: string;
  message: string;
}

// Function to parse the log file and return an array of LogEntry objects
export function parseLogs(filePath: string): LogEntry[] {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  
  const lines = fileContent.split('\n');
  
  const logs: LogEntry[] = lines.map(line => {
    const regex = /\[(.*?)\] \[(.*?)\] (.*)/;
    const match = line.match(regex);
    
    if (match) {
      return {
        timestamp: match[1],
        level: match[2],
        message: match[3],
      };
    }
    
    // Return a default value in case of invalid line format
    return { timestamp: '', level: '', message: '' };
  });
  
  return logs;
}

// Function to filter logs by level
export function filterLogsByLevel(logs: LogEntry[], level: string): LogEntry[] {
  return logs.filter(log => log.level.toUpperCase() === level.toUpperCase());
}

// Function to filter logs by a search string in the message
export function filterLogsBySearch(logs: LogEntry[], search: string): LogEntry[] {
  return logs.filter(log => log.message.toLowerCase().includes(search.toLowerCase()));
}

// Function to filter logs by a time range
export function filterLogsByTimeRange(
  logs: LogEntry[],
  from: string,
  to: string
): LogEntry[] {
  const fromDate = new Date(from);
  const toDate = new Date(to);
  
  return logs.filter(log => {
    const logDate = new Date(log.timestamp);
    return logDate >= fromDate && logDate <= toDate;
  });
}
