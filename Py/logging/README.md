# logging — Logging facility for Python

This module defines functions and classes which implement a flexible event logging system for applications and libraries.


Logging levels

logging.NOTSET 0

When set on a logger, indicates that ancestor loggers are to be consulted to determine the effective level. If that still resolves to NOTSET, then all events are logged. When set on a handler, all events are handled.

logging.DEBUG 10

Detailed information, typically only of interest to a developer trying to diagnose a problem.

logging.INFO 20

Confirmation that things are working as expected.

logging.WARNING 30

An indication that something unexpected happened, or that a problem might occur in the near future (e.g. ‘disk space low’). The software is still working as expected.

logging.ERROR 40

Due to a more serious problem, the software has not been able to perform some function.

logging.CRITICAL 50

A serious error, indicating that the program itself may be unable to continue running.

